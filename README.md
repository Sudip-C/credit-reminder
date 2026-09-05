# Credit Reminder

An installable personal PWA for tracking money lent to friends, repayments, due dates, and manually prepared WhatsApp reminders.

## Project status

Early development. The React foundation, design system, quality tooling, and validated environment configuration are in place.

## Local development

Requirements:

- Node.js 24
- npm

Install dependencies:

```bash
npm install
```

Create an ignored `.env.local` file using `.env.example` as the reference. Replace its placeholders when the related integrations are configured.

Start the development server:

```bash
npm run dev
```

## Environment variables

Only variables beginning with `VITE_` are available to browser code. Never add the `VITE_` prefix to a secret.

### Browser-safe variables

| Variable                        | Purpose                       |
| ------------------------------- | ----------------------------- |
| `VITE_SUPABASE_URL`             | Supabase project URL          |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Browser-safe Supabase API key |
| `VITE_VAPID_PUBLIC_KEY`         | Browser push-subscription key |

### Server-only variables

| Variable              | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `SUPABASE_URL`        | Supabase project URL for backend operations   |
| `SUPABASE_SECRET_KEY` | Privileged Supabase key that must stay secret |
| `VAPID_SUBJECT`       | Push-service contact URL or email             |
| `VAPID_PUBLIC_KEY`    | Public key used by the push sender            |
| `VAPID_PRIVATE_KEY`   | Private push-signing key                      |
| `CRON_SECRET`         | Secret protecting scheduled reminder routes   |

Real environment files are ignored by Git. `.env.example` must contain placeholders only.

## Quality checks

Run formatting, linting, tests, and the production build together:

```bash
npm run check
```

## Documentation

- [System design](docs/system-design.md)
- [Design system](docs/design-system.md)

Implementation is tracked through the repository’s GitHub issues.
