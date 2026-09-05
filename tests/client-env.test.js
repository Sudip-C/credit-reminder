import { describe, expect, it } from 'vitest'

import { parseClientEnv } from '../src/config/client-env.js'

const validClientEnvironment = {
  VITE_SUPABASE_URL: 'https://example.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test_key',
  VITE_VAPID_PUBLIC_KEY: 'A'.repeat(87),
}

describe('parseClientEnv', () => {
  it('returns validated browser-safe configuration', () => {
    const result = parseClientEnv(validClientEnvironment)

    expect(result).toEqual(validClientEnvironment)
    expect(Object.isFrozen(result)).toBe(true)
  })

  it('rejects missing configuration with a clear error', () => {
    expect(() => parseClientEnv({})).toThrow(
      /Invalid client environment configuration:.*VITE_SUPABASE_URL/,
    )
  })

  it('does not return server-only variables', () => {
    const result = parseClientEnv({
      ...validClientEnvironment,
      SUPABASE_SECRET_KEY: 'sb_secret_must_not_reach_the_browser',
    })

    expect(result).not.toHaveProperty('SUPABASE_SECRET_KEY')
  })
})
