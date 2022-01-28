module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',

    sourceType: 'module'
  },
  plugins: [
    'react', // eslint-plugin-react
    'prettier' // eslint-plugin-prettier
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/no-array-index-key': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off'
  }
};
