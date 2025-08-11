'use strict'

const rule = require('../../rules/no-http-url')
const { RuleTester } = require('eslint')

const ruleTester = new RuleTester()

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://dongzhiqiang.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://dongzhiqiang.com';",
      output: "var test = 'http://dongzhiqiang.com';",
      errors: [
        {
          message: 'Recommended "http://dongzhiqiang.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://dongzhiqiang.com' />",
      output: "<img src='http://dongzhiqiang.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://dongzhiqiang.com" switch to HTTPS',
        },
      ],
    },
  ],
})