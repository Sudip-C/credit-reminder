import { describe, expect, it } from 'vitest'

import { parseServerEnv } from '../server/config/server-env.js'

const validServerEnvironment = {
  SUPABASE_URL: 'https://example.supabase.co',
  SUPABASE_SECRET_KEY: 'sb_secret_test_key',
  VAPID_SUBJECT: 'mailto:test@example.com',
  VAPID_PUBLIC_KEY: 'A'.repeat(87),
  VAPID_PRIVATE_KEY: 'B'.repeat(43),
  CRON_SECRET: 'C'.repeat(32),
}

describe('parseServerEnv', () => {
  it('returns validated server-only configuration', () => {
    const result = parseServerEnv(validServerEnvironment)

    expect(result).toEqual(validServerEnvironment)
    expect(Object.isFrozen(result)).toBe(true)
  })

  it('rejects missing configuration with a clear error', () => {
    expect(() => parseServerEnv({})).toThrow(
      /Invalid server environment configuration:.*SUPABASE_URL/,
    )
  })

  it('rejects short cron secrets', () => {
    expect(() =>
      parseServerEnv({
        ...validServerEnvironment,
        CRON_SECRET: 'too-short',
      }),
    ).toThrow(/CRON_SECRET/)
  })

  it('does not reveal rejected secret values in errors', () => {
    const invalidSecret = 'private-value-that-must-not-appear'
    let thrownError

    try {
      parseServerEnv({
        ...validServerEnvironment,
        SUPABASE_SECRET_KEY: invalidSecret,
      })
    } catch (error) {
      thrownError = error
    }

    expect(thrownError).toBeInstanceOf(Error)
    expect(thrownError.message).not.toContain(invalidSecret)
  })
})
