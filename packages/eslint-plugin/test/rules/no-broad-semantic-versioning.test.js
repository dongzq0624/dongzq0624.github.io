const rule = require('../../rules/no-broad-semantic-versioning')
const { RuleTester } = require('eslint')

const ruleTester = new RuleTester()

ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'qcxn-eslint-plugin': '^1.0.0' },
      })}`
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'qcxn-eslint-plugin': '*' },
      })}`,
      errors: [
        {
          message: 'The "qcxn-eslint-plugin" is not recommended to use "*"',
        },
      ],
    },
  ]
})