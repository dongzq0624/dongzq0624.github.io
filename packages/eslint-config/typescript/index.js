module.exports = {
  extends: [
    '../index',
    '../rules/typescript.js'
  ].map(require.resolve),
}