// These rules are automatically generated by scripts/generate-rules.ts

const pedanticRules = {
  "array-callback-return": "off",
  eqeqeq: "off",
  "max-lines": "off",
  "no-array-constructor": "off",
  "no-case-declarations": "off",
  "no-mixed-operators": "off",
  "no-new-wrappers": "off",
  "no-prototype-builtins": "off",
  "no-redeclare": "off",
  "no-return-await": "off",
  "no-self-compare": "off",
  "react/checked-requires-onchange-or-readonly": "off",
  "react/no-unescaped-entities": "off",
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/ban-types": "off",
  "@typescript-eslint/no-duplicate-enum-values": "off",
  "@typescript-eslint/prefer-ts-expect-error": "off",
  "unicorn/escape-case": "off",
  "unicorn/explicit-length-check": "off",
  "unicorn/new-for-builtins": "off",
  "unicorn/no-hex-escape": "off",
  "unicorn/no-instanceof-array": "off",
  "unicorn/no-lonely-if": "off",
  "unicorn/no-negated-condition": "off",
  "unicorn/no-new-buffer": "off",
  "unicorn/no-object-as-default-parameter": "off",
  "unicorn/no-static-only-class": "off",
  "unicorn/no-this-assignment": "off",
  "unicorn/no-typeof-undefined": "off",
  "unicorn/no-unreadable-iife": "off",
  "unicorn/no-useless-promise-resolve-reject": "off",
  "unicorn/no-useless-switch-case": "off",
  "unicorn/prefer-array-flat": "off",
  "unicorn/prefer-array-some": "off",
  "unicorn/prefer-blob-reading-methods": "off",
  "unicorn/prefer-code-point": "off",
  "unicorn/prefer-date-now": "off",
  "unicorn/prefer-dom-node-append": "off",
  "unicorn/prefer-dom-node-dataset": "off",
  "unicorn/prefer-dom-node-remove": "off",
  "unicorn/prefer-event-target": "off",
  "unicorn/prefer-math-trunc": "off",
  "unicorn/prefer-native-coercion-functions": "off",
  "unicorn/prefer-prototype-methods": "off",
  "unicorn/prefer-query-selector": "off",
  "unicorn/prefer-regexp-test": "off",
  "unicorn/prefer-string-replace-all": "off",
  "unicorn/prefer-string-slice": "off",
  "unicorn/prefer-type-error": "off",
  "unicorn/require-number-to-fixed-digits-argument": "off",
};

const nurseryRules = {
  "constructor-super": "off",
  "getter-return": "off",
  "no-fallthrough": "off",
  "no-import-assign": "off",
  "no-undef": "off",
  "import/default": "off",
  "import/export": "off",
  "import/named": "off",
  "import/namespace": "off",
  "import/no-amd": "off",
  "import/no-cycle": "off",
  "import/no-default-export": "off",
  "import/no-deprecated": "off",
  "import/no-duplicates": "off",
  "import/no-named-as-default": "off",
  "import/no-named-as-default-member": "off",
  "import/no-self-import": "off",
  "import/no-unused-modules": "off",
  "tree-shaking/no-side-effects-in-initialization": "off",
};

const styleRules = {
  "default-case-last": "off",
  "default-param-last": "off",
  "guard-for-in": "off",
  "max-params": "off",
  "no-continue": "off",
  "no-script-url": "off",
  "no-template-curly-in-string": "off",
  "no-ternary": "off",
  "jest/max-expects": "off",
  "jest/no-alias-methods": "off",
  "jest/no-confusing-set-timeout": "off",
  "jest/no-deprecated-functions": "off",
  "jest/no-done-callback": "off",
  "jest/no-hooks": "off",
  "jest/no-identical-title": "off",
  "jest/no-interpolation-in-snapshots": "off",
  "jest/no-jasmine-globals": "off",
  "jest/no-mocks-import": "off",
  "jest/no-restricted-jest-methods": "off",
  "jest/no-restricted-matchers": "off",
  "jest/no-test-prefixes": "off",
  "jest/no-test-return-statement": "off",
  "jest/no-untyped-mock-factory": "off",
  "jest/prefer-called-with": "off",
  "jest/prefer-comparison-matcher": "off",
  "jest/prefer-equality-matcher": "off",
  "jest/prefer-expect-resolves": "off",
  "jest/prefer-lowercase-title": "off",
  "jest/prefer-mock-promise-shorthand": "off",
  "jest/prefer-spy-on": "off",
  "jest/prefer-strict-equal": "off",
  "jest/prefer-to-be": "off",
  "jest/prefer-to-contain": "off",
  "jest/prefer-to-have-length": "off",
  "jest/prefer-todo": "off",
  "@typescript-eslint/adjacent-overload-signatures": "off",
  "@typescript-eslint/array-type": "off",
  "@typescript-eslint/ban-tslint-comment": "off",
  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/prefer-for-of": "off",
  "@typescript-eslint/prefer-function-type": "off",
  "unicorn/catch-error-name": "off",
  "unicorn/empty-brace-spaces": "off",
  "unicorn/error-message": "off",
  "unicorn/filename-case": "off",
  "unicorn/no-await-expression-member": "off",
  "unicorn/no-console-spaces": "off",
  "unicorn/no-null": "off",
  "unicorn/no-unreadable-array-destructuring": "off",
  "unicorn/no-zero-fractions": "off",
  "unicorn/number-literal-case": "off",
  "unicorn/numeric-separators-style": "off",
  "unicorn/prefer-array-flat-map": "off",
  "unicorn/prefer-dom-node-text-content": "off",
  "unicorn/prefer-includes": "off",
  "unicorn/prefer-logical-operator-over-ternary": "off",
  "unicorn/prefer-modern-dom-apis": "off",
  "unicorn/prefer-node-protocol": "off",
  "unicorn/prefer-optional-catch-binding": "off",
  "unicorn/prefer-reflect-apply": "off",
  "unicorn/prefer-spread": "off",
  "unicorn/prefer-string-trim-start-end": "off",
  "unicorn/require-array-join-separator": "off",
  "unicorn/switch-case-braces": "off",
  "unicorn/text-encoding-identifier-case": "off",
  "unicorn/throw-new-error": "off",
};

const correctnessRules = {
  "for-direction": "off",
  "no-async-promise-executor": "off",
  "no-caller": "off",
  "no-class-assign": "off",
  "no-compare-neg-zero": "off",
  "no-cond-assign": "off",
  "no-const-assign": "off",
  "no-constant-binary-expression": "off",
  "no-constant-condition": "off",
  "no-control-regex": "off",
  "no-debugger": "off",
  "no-delete-var": "off",
  "no-dupe-class-members": "off",
  "no-dupe-else-if": "off",
  "no-dupe-keys": "off",
  "no-duplicate-case": "off",
  "no-empty-character-class": "off",
  "no-empty-pattern": "off",
  "no-empty-static-block": "off",
  "no-ex-assign": "off",
  "no-extra-boolean-cast": "off",
  "no-func-assign": "off",
  "no-global-assign": "off",
  "no-inner-declarations": "off",
  "no-irregular-whitespace": "off",
  "no-loss-of-precision": "off",
  "no-new-symbol": "off",
  "no-nonoctal-decimal-escape": "off",
  "no-obj-calls": "off",
  "no-self-assign": "off",
  "no-setter-return": "off",
  "no-shadow-restricted-names": "off",
  "no-sparse-arrays": "off",
  "no-this-before-super": "off",
  "no-unsafe-finally": "off",
  "no-unsafe-negation": "off",
  "no-unused-labels": "off",
  "no-unused-private-class-members": "off",
  "no-useless-catch": "off",
  "no-useless-escape": "off",
  "no-useless-rename": "off",
  "no-with": "off",
  "require-yield": "off",
  "use-isnan": "off",
  "valid-typeof": "off",
  "jest/expect-expect": "off",
  "jest/no-conditional-expect": "off",
  "jest/no-disabled-tests": "off",
  "jest/no-export": "off",
  "jest/no-focused-tests": "off",
  "jest/no-standalone-expect": "off",
  "jest/require-to-throw-message": "off",
  "jest/valid-describe-callback": "off",
  "jest/valid-expect": "off",
  "jest/valid-title": "off",
  "jsdoc/check-property-names": "off",
  "jsdoc/require-property": "off",
  "jsdoc/require-property-description": "off",
  "jsdoc/require-property-name": "off",
  "jsdoc/require-property-type": "off",
  "jsx-a11y/alt-text": "off",
  "jsx-a11y/anchor-has-content": "off",
  "jsx-a11y/anchor-is-valid": "off",
  "jsx-a11y/aria-activedescendant-has-tabindex": "off",
  "jsx-a11y/aria-props": "off",
  "jsx-a11y/aria-role": "off",
  "jsx-a11y/aria-unsupported-elements": "off",
  "jsx-a11y/autocomplete-valid": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/heading-has-content": "off",
  "jsx-a11y/html-has-lang": "off",
  "jsx-a11y/iframe-has-title": "off",
  "jsx-a11y/img-redundant-alt": "off",
  "jsx-a11y/lang": "off",
  "jsx-a11y/media-has-caption": "off",
  "jsx-a11y/mouse-events-have-key-events": "off",
  "jsx-a11y/no-access-key": "off",
  "jsx-a11y/no-aria-hidden-on-focusable": "off",
  "jsx-a11y/no-autofocus": "off",
  "jsx-a11y/no-distracting-elements": "off",
  "jsx-a11y/no-redundant-roles": "off",
  "jsx-a11y/prefer-tag-over-role": "off",
  "jsx-a11y/role-has-required-aria-props": "off",
  "jsx-a11y/role-supports-aria-props": "off",
  "jsx-a11y/scope": "off",
  "jsx-a11y/tabindex-no-positive": "off",
  "nextjs/google-font-display": "off",
  "nextjs/google-font-preconnect": "off",
  "nextjs/inline-script-id": "off",
  "nextjs/next-script-for-ga": "off",
  "nextjs/no-assign-module-variable": "off",
  "nextjs/no-async-client-component": "off",
  "nextjs/no-before-interactive-script-outside-document": "off",
  "nextjs/no-css-tags": "off",
  "nextjs/no-document-import-in-page": "off",
  "nextjs/no-head-element": "off",
  "nextjs/no-head-import-in-document": "off",
  "nextjs/no-img-element": "off",
  "nextjs/no-script-component-in-head": "off",
  "nextjs/no-sync-scripts": "off",
  "nextjs/no-title-in-document-head": "off",
  "nextjs/no-typos": "off",
  "nextjs/no-unwanted-polyfillio": "off",
  "react/jsx-key": "off",
  "react/jsx-no-duplicate-props": "off",
  "react/jsx-no-target-blank": "off",
  "react/jsx-no-undef": "off",
  "react/jsx-no-useless-fragment": "off",
  "react/no-children-prop": "off",
  "react/no-direct-mutation-state": "off",
  "react/no-find-dom-node": "off",
  "react/no-is-mounted": "off",
  "react/no-render-return-value": "off",
  "react/no-string-refs": "off",
  "react/require-render-return": "off",
  "react/void-dom-elements-no-children": "off",
  "react-perf/jsx-no-jsx-as-prop": "off",
  "react-perf/jsx-no-new-array-as-prop": "off",
  "react-perf/jsx-no-new-function-as-prop": "off",
  "react-perf/jsx-no-new-object-as-prop": "off",
  "@typescript-eslint/no-extra-non-null-assertion": "off",
  "@typescript-eslint/no-misused-new": "off",
  "@typescript-eslint/no-namespace": "off",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  "@typescript-eslint/no-this-alias": "off",
  "@typescript-eslint/no-unsafe-declaration-merging": "off",
  "@typescript-eslint/prefer-as-const": "off",
  "@typescript-eslint/triple-slash-reference": "off",
  "unicorn/no-await-in-promise-methods": "off",
  "unicorn/no-document-cookie": "off",
  "unicorn/no-empty-file": "off",
  "unicorn/no-invalid-remove-event-listener": "off",
  "unicorn/no-new-array": "off",
  "unicorn/no-single-promise-in-promise-methods": "off",
  "unicorn/no-thenable": "off",
  "unicorn/no-unnecessary-await": "off",
  "unicorn/no-useless-fallback-in-spread": "off",
  "unicorn/no-useless-length-check": "off",
  "unicorn/no-useless-spread": "off",
  "unicorn/prefer-set-size": "off",
  "unicorn/prefer-string-starts-ends-with": "off",
};

const restrictionRules = {
  "no-bitwise": "off",
  "no-console": "off",
  "no-empty": "off",
  "no-eq-null": "off",
  "no-eval": "off",
  "no-iterator": "off",
  "no-proto": "off",
  "no-regex-spaces": "off",
  "no-unsafe-optional-chaining": "off",
  "no-var": "off",
  "no-void": "off",
  "jsdoc/check-access": "off",
  "jsdoc/empty-tags": "off",
  "react/button-has-type": "off",
  "react/no-danger": "off",
  "react/no-unknown-property": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-var-requires": "off",
  "unicorn/no-abusive-eslint-disable": "off",
  "unicorn/no-array-for-each": "off",
  "unicorn/no-array-reduce": "off",
  "unicorn/no-nested-ternary": "off",
  "unicorn/no-process-exit": "off",
  "unicorn/prefer-modern-math-apis": "off",
  "unicorn/prefer-number-properties": "off",
};

const suspiciousRules = {
  "jest/no-commented-out-tests": "off",
  "react/jsx-no-comment-textnodes": "off",
  "react/react-in-jsx-scope": "off",
  "@typescript-eslint/no-unnecessary-type-constraint": "off",
  "unicorn/prefer-add-event-listener": "off",
};

module.exports = {
  pedanticRules,
  nurseryRules,
  styleRules,
  correctnessRules,
  restrictionRules,
  suspiciousRules,
};
