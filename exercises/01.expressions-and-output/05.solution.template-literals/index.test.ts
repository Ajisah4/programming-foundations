import assert from 'node:assert/strict'
import { test } from 'node:test'

import { getNpmStartOutput } from '../run-npm-start.ts'

const output = getNpmStartOutput()

await test('should print "The answer is 42"', () => {
	assert.ok(
		output.includes('The answer is 42'),
		'🚨 Output should include "The answer is 42" - use a template literal with ${40 + 2}',
	)
})

await test('should print Hello, TypeScript! greeting', () => {
	assert.ok(
		output.toLowerCase().includes('hello') &&
			output.toLowerCase().includes('typescript'),
		'🚨 Output should include "Hello" and "TypeScript"',
	)
})

await test('should print math result with 50', () => {
	assert.ok(
		output.includes('50'),
		'🚨 Output should include 50 (the result of 10 * 5) - use ${10 * 5} in a template literal',
	)
})
