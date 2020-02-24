module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  rules: {
    'space-before-function-paren': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'linebreak-style': 'off',
    'global-require': 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-async-promise-executor': 'off',
    'max-classes-per-file': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'lines-between-class-members': 'off',
    'arrow-parens': 'off',
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: { paths: ['./src'] },
    },
  },
}
