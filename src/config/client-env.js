import { z } from 'zod'

const clientEnvironmentSchema = z.object({
  VITE_SUPABASE_URL: z.string().trim().url('VITE_SUPABASE_URL must be a valid URL'),
  VITE_SUPABASE_PUBLISHABLE_KEY: z
    .string()
    .trim()
    .min(1, 'VITE_SUPABASE_PUBLISHABLE_KEY is required')
    .startsWith('sb_publishable_', 'VITE_SUPABASE_PUBLISHABLE_KEY must start with sb_publishable_'),
  VITE_VAPID_PUBLIC_KEY: z.string().trim().min(1, 'VITE_VAPID_PUBLIC_KEY is required'),
})

function formatIssues(issues) {
  return issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')
}

export function parseClientEnv(environment) {
  const result = clientEnvironmentSchema.safeParse(environment)

  if (!result.success) {
    throw new Error(
      `Invalid client environment configuration: ${formatIssues(result.error.issues)}`,
    )
  }

  return Object.freeze(result.data)
}

export function getClientEnv(environment = import.meta.env) {
  return parseClientEnv(environment)
}
