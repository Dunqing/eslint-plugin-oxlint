import { describe, expect, it } from 'vitest';
import { handleCategoriesScope } from './categories.js';

describe('handleCategoriesScope', () => {
  it('default plugins (react, unicorn, typescript), default categories', () => {
    const rules = {};
    handleCategoriesScope(['unicorn', 'react', 'typescript'], {}, rules);

    // snapshot because it can change with the next release
    expect(['unicorn', 'react', 'typescript']).toMatchSnapshot(
      'defaultPluginDefaultCategories'
    );
  });

  it('skip deactivate categories', () => {
    const rules = {};
    handleCategoriesScope(['unicorn', 'react', 'typescript'], {}, rules);

    expect(rules).toStrictEqual({});
  });

  it('custom plugins, default categories', () => {
    const rules = {};
    handleCategoriesScope(
      ['unicorn'],
      {
        correctness: 'warn',
      },
      rules
    );
    // snapshot because it can change with the next release
    expect(rules).toMatchSnapshot('customPluginDefaultCategories');
  });

  it('custom plugins, custom categories', () => {
    const rules = {};
    handleCategoriesScope(
      ['import'],
      {
        suspicious: 'warn',
        correctness: 'off',
      },
      rules
    );
    // snapshot because it can change with the next release
    expect(rules).toMatchSnapshot('customPluginCustomCategories');
  });

  it('skip deactivate rules, for custom enable category', () => {
    const rules = {
      'import/no-self-import': 'off',
    } as const;
    handleCategoriesScope(
      ['import'],
      {
        suspicious: 'warn',
        correctness: 'off',
      },
      rules
    );

    expect(rules['import/no-self-import']).toBe('off');
  });
});
