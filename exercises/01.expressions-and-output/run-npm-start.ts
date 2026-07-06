import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'

export function getNpmStartOutput() {
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
