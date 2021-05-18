// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   // 'prettier/prettier': [
//   //   'error',
//   //   {
//   //     endOfLine: 'auto',
//   //   },
//   // ],
// };
module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  plugins: ['react-hooks'],

  rules: {
    jsxQuotes: 'off',
    arrowParens: 'off',
    'react-native/no-inline-styles': 0,
  },
};
