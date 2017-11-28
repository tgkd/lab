module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
      'html'
  ],
  'rules': {
      'arrow-parens': 0,
      'generator-star-spacing': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'indent': ['error', 4],
      'semi': 0,
  }
}