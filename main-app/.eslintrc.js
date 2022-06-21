module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier'
  ],
  /*
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      alias: {
        map: [['@', 'src']]
      }
    }
  },
*/
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', 'src']],
        extensions: ['.js', '.vue']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'vue/attribute-hyphenation': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }]
    /* 'vue/max-attributes-per-line': [
  'error',
  {
    singleline: 1,
    multiline: 1
  }
] */
  }
}
