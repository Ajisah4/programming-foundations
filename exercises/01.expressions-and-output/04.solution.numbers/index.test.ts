import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { test } from 'node:test'

function getOutput() {
	const result = spawnSync('npm', ['start', '--silent'], {
		encoding: 'utf8',
		shell: true,
	})

	if (result.error) {
		throw result.error
	}

	assert.strictEqual(
		result.status,
		0,
		result.stderr || '🚨 Running the program failed',
	)

	return result.stdout.replace(/\r\n/g, '\n')
}

const output = getOutput()
const lines = output
	.split('\n')
	.map((line) => line.trim())
	.filter(Boolean)

await test('should print 42', () => {
	assert.ok(
		lines.some((line) => line.includes('42')),
		'🚨 Output should include 42 (the result of 25 + 17)',
	)
})

await test('should print 48', () => {
	assert.ok(
		lines.some((line) => line.includes('48')),
		'🚨 Output should include 48 (the result of 8 * 6)',
	)
})

await test('should print 25', () => {
	assert.ok(
		lines.some((line) => line.includes('25')),
		'🚨 Output should include 25 (the result of 100 / 4)',
	)
})

await test('should print 30', () => {
	assert.ok(
		lines.some((line) => line.includes('30')),
		'🚨 Output should include 30 (the result of (10 + 5) * 2)',
	)
})
