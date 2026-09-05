import { z } from 'zod'

const serverEnvironmentSchema = z.object({
  SUPABASE_URL: z.string().trim().url('SUPABASE_URL must be a valid URL'),
  SUPABASE_SECRET_KEY: z
    .string()
    .trim()
    .min(1, 'SUPABASE_SECRET_KEY is required')
    .startsWith('sb_secret_', 'SUPABASE_SECRET_KEY must start with sb_secret_'),
  VAPID_SUBJECT: z
    .string()
    .trim()
    .refine(
      (value) => value.startsWith('mailto:') || value.startsWith('https://'),
      'VAPID_SUBJECT must start with mailto: or https://',
    ),
  VAPID_PUBLIC_KEY: z.string().trim().min(1, 'VAPID_PUBLIC_KEY is required'),
  VAPID_PRIVATE_KEY: z.string().trim().min(1, 'VAPID_PRIVATE_KEY is required'),
  CRON_SECRET: z.string().trim().min(32, 'CRON_SECRET must contain at least 32 characters'),
})

function formatIssues(issues) {
  return issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')
}

export function parseServerEnv(environment) {
  const result = serverEnvironmentSchema.safeParse(environment)

  if (!result.success) {
    throw new Error(
      `Invalid server environment configuration: ${formatIssues(result.error.issues)}`,
    )
  }

  return Object.freeze(result.data)
}

export function getServerEnv(environment = process.env) {
  return parseServerEnv(environment)
}
