module.exports = {
  'extends': ['@folio/eslint-config-stripes'],
  'parser': '@babel/eslint-parser',
  'overrides': [
    {
      "files": ["src/**/*.test.js", "test/jest/**/*"]
    }
  ],
  'env': {
    'jest': true
  }
};
