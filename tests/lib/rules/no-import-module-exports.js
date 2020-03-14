/**
 * @fileoverview Should not use module.exports or export.xxx when there are import sentences
 * @author Yudu Ban
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-import-module-exports')

var RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-import-module-exports', rule, {

  valid: [

    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import foo from './foo'; module.exports = foo;",
      errors: [{
        message: 'Fill me in.',
        type: 'Me too'
      }]
    }
  ]
})
