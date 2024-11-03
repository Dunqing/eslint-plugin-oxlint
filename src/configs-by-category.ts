// These rules are automatically generated by scripts/generate-rules.ts

import * as rules from './rules-by-category.js';

const restrictionConfig = {
  name: 'oxlint/restriction',
  rules: rules.restrictionRules,
};

const nurseryConfig = {
  name: 'oxlint/nursery',
  rules: rules.nurseryRules,
};

const styleConfig = {
  name: 'oxlint/style',
  rules: rules.styleRules,
};

const pedanticConfig = {
  name: 'oxlint/pedantic',
  rules: rules.pedanticRules,
};

const correctnessConfig = {
  name: 'oxlint/correctness',
  rules: rules.correctnessRules,
};

const perfConfig = {
  name: 'oxlint/perf',
  rules: rules.perfRules,
};

const suspiciousConfig = {
  name: 'oxlint/suspicious',
  rules: rules.suspiciousRules,
};

const configByCategory = {
  'flat/restriction': restrictionConfig,
  'flat/nursery': nurseryConfig,
  'flat/style': styleConfig,
  'flat/pedantic': pedanticConfig,
  'flat/correctness': correctnessConfig,
  'flat/perf': perfConfig,
  'flat/suspicious': suspiciousConfig,
};

export default configByCategory;
