import { writeFileSync } from "node:fs";
import path from "node:path";
import { getLatestVersionFromClonedRepo } from "./oxlint-version.js";
import { TARGET_DIRECTORY, VERSION_PREFIX } from "./constants.js";
import { type Rule, traverseRules } from "./traverse-rules.js";

const __dirname = new URL(".", import.meta.url).pathname;

const oxlintVersion = getLatestVersionFromClonedRepo(
  TARGET_DIRECTORY,
  VERSION_PREFIX,
);

if (!oxlintVersion) {
  console.log(
    "Failed to get the latest version of oxlint, did you forget to run `pnpm clone`?",
  );
  process.exit(1);
}

console.log(`Generating rules for ${oxlintVersion}`);

//   const rulesMap = await loadAndProcessOxlintRules();

export enum RulesGrouping {
  CATEGORY = "category",
  SCOPE = "scope",
}

export type ResultMap = Map<string, string[]>;

class RulesGenerator {
  private rulesGrouping: RulesGrouping;
  private rulesArray: Rule[];
  constructor(
    rulesArray: Rule[] = [],
    rulesGrouping: RulesGrouping = RulesGrouping.SCOPE,
  ) {
    this.rulesGrouping = rulesGrouping;
    this.rulesArray = rulesArray;
  }

  public setRulesGrouping(rulesGrouping: RulesGrouping) {
    this.rulesGrouping = rulesGrouping;
  }

  private groupItemsBy(
    rules: Rule[],
    rulesGrouping: RulesGrouping,
  ): Map<string, string[]> {
    const map = new Map<string, string[]>();
    for (const item of rules) {
      const key = item[rulesGrouping];
      const group = map.get(key) || [];
      group.push(item.value);
      map.set(key, group);
    }

    return map;
  }

  private generateRulesDeclaration(exportGrouping: string[]) {
    let code =
      "// This declaration is automatically generated by scripts/generate-rules.ts\n\n";

    for (const grouping of exportGrouping) {
      code += `export declare const ${grouping}Rules: Record<string, unknown>;\n`;
    }

    writeFileSync(
      path.resolve(__dirname, `../rules-by-${this.rulesGrouping}.d.ts`),
      code,
    );
  }

  public async generateRules(isCjs = false) {
    const rulesGrouping = this.rulesGrouping;
    const rulesArray = this.rulesArray;

    const rulesMap = this.groupItemsBy(rulesArray, rulesGrouping);

    const exportGrouping: string[] = [];
    let code =
      "// These rules are automatically generated by scripts/generate-rules.ts\n\n";

    for (const grouping of rulesMap.keys()) {
      exportGrouping.push(grouping);
      const rules = rulesMap.get(grouping);

      code += `const ${grouping.replaceAll(/_(\w)/g, (_, c) =>
        c.toUpperCase(),
      )}Rules = {\n`;

      code += rules
        ?.map((rule) => {
          return `  "${rule.replaceAll("_", "-")}": "off"`;
        })
        .join(",\n");
      code += "\n}\n\n";
    }

    code += isCjs ? "module.exports = {\n" : "export {\n";
    code += exportGrouping
      .map((grouping) => {
        return `  ${grouping.replaceAll(/_(\w)/g, (_, c) => c.toUpperCase())}Rules`;
      })
      .join(",\n");
    code += "\n}";

    writeFileSync(
      path.resolve(
        __dirname,
        `../rules-by-${rulesGrouping}.${isCjs ? "cjs" : "js"}`,
      ),
      code,
    );

    if (isCjs) {
      this.generateRulesDeclaration(exportGrouping);
    }
  }
}

const { successResultArray, failureResultArray } = await traverseRules();

if (failureResultArray.length > 0) {
  console.log("Failed to generate rules for the following rules:");
  console.log(failureResultArray);
  process.exit(1);
}

const generator = new RulesGenerator(successResultArray);

generator.setRulesGrouping(RulesGrouping.SCOPE);

generator.generateRules();
generator.generateRules(true);

generator.setRulesGrouping(RulesGrouping.CATEGORY);

generator.generateRules();
generator.generateRules(true);
