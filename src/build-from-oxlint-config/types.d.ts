import type { Linter } from 'eslint';

export type OxlintConfigPlugins = string[];

export type OxlintConfigCategories = Record<string, unknown>;

export type OxlintConfigRules = Record<string, unknown>;

export type OxlintConfigOverride = {
  files: string[];
  plugins?: OxlintConfigPlugins;
  rules?: OxlintConfigRules;
};

export type EslintPluginOxLintConfig = Linter.Config<
  Record<string, 'off' | 'warn'>
>;

export type OxlintConfig = {
  [key: string]: unknown;
  plugins?: OxlintConfigPlugins;
  categories?: OxlintConfigCategories;
  rules?: OxlintConfigRules;
};
