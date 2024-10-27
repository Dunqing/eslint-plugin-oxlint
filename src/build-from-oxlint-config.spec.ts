import { describe, expect, it } from 'vitest';
import {
  buildFromOxlintConfig,
  buildFromOxlintConfigFile,
} from './build-from-oxlint-config.js';
import fs from 'node:fs';

describe('buildFromOxlintConfig', () => {
  it('detect active rules inside "rules" scope', () => {
    ['error', ['error'], 'warn', ['warn'], 1, [1], 2, [2]].forEach(
      (ruleSetting) => {
        const rules = buildFromOxlintConfig({
          plugins: [],
          rules: {
            eqeqeq: ruleSetting,
          },
        });

        expect('eqeqeq' in rules).toBe(true);
        expect(rules.eqeqeq).toBe('off');
      }
    );
  });

  it('skip deactive rules inside "rules" scope', () => {
    ['off', ['off'], 0, [0]].forEach((ruleSetting) => {
      const rules = buildFromOxlintConfig({
        plugins: [],
        rules: {
          eqeqeq: ruleSetting,
        },
      });

      expect('eqeqeq' in rules).toBe(false);
    });
  });

  it('skip deactive categories', () => {
    expect(
      buildFromOxlintConfig({
        categories: {
          correctness: 'off',
        },
      })
    ).toStrictEqual({});
  });

  it('default plugins (react, unicorn, typescript), default categories', () => {
    // snapshot because it can change with the next release
    expect(buildFromOxlintConfig({})).toMatchSnapshot(
      'defaultPluginDefaultCategories'
    );
  });

  it('custom plugins, default categories', () => {
    // snapshot because it can change with the next release
    expect(
      buildFromOxlintConfig({
        plugins: ['unicorn'],
      })
    ).toMatchSnapshot('customPluginDefaultCategories');
  });

  it('custom plugins, custom categories', () => {
    // snapshot because it can change with the next release
    expect(
      buildFromOxlintConfig({
        plugins: ['import'],
        categories: {
          nursery: 'warn',
          correctness: 'off',
        },
      })
    ).toMatchSnapshot('customPluginCustomCategories');
  });

  it('skip deactive rules, for custom enable category', () => {
    const rules = buildFromOxlintConfig({
      plugins: ['import'],
      categories: {
        nursery: 'warn',
        correctness: 'off',
      },
      rules: {
        'import/no-unused-modules': 'off',
      },
    });
    expect('import/no-unused-modules' in rules).toBe(false);
  });
});

const createConfigFileAndBuildFromIt = (
  filename: string,
  content: string
): Record<string, unknown> => {
  fs.writeFileSync(filename, content);

  const rules = buildFromOxlintConfigFile(filename);

  fs.unlinkSync(filename);

  return rules;
};

describe('buildFromOxlintConfigFile', () => {
  it('successfully parse oxlint config', () => {
    const rules = createConfigFileAndBuildFromIt(
      'success-config.json',
      JSON.stringify({
        rules: {
          'no-await-loop': 'on',
        },
      })
    );

    expect('no-await-loop' in rules).toBe(true);
  });

  it('failes to find oxlint config', () => {
    const rules = buildFromOxlintConfigFile('not-found.json');

    expect(rules).toStrictEqual({});
  });

  it('failes to parse oxlint config', () => {
    const rules = createConfigFileAndBuildFromIt(
      'invalid-config.json',
      '["this", is an invalid json format]'
    );

    expect(rules).toStrictEqual({});
  });
});
