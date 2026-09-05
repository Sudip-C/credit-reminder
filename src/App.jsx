const foundationItems = [
  {
    title: 'Track credits',
    description: 'Keep every lending record organized in one private place.',
  },
  {
    title: 'Record repayments',
    description: 'Track partial and full payments without losing history.',
  },
  {
    title: 'Prepare reminders',
    description: 'Review a friendly message before opening WhatsApp.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-canvas px-page py-8 text-ink antialiased sm:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="grid size-11 place-items-center rounded-control bg-brand-600 text-xl font-bold text-white shadow-sm"
              aria-hidden="true"
            >
              ₹
            </span>

            <div>
              <p className="font-bold text-ink">Credit Reminder</p>
              <p className="text-sm text-muted">Personal lending tracker</p>
            </div>
          </div>

          <span className="rounded-full bg-success-50 px-3 py-1 text-sm font-semibold text-success-700">
            Foundation ready
          </span>
        </header>

        <section className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
          <div className="h-2 bg-brand-600" />

          <div className="p-6 sm:p-10">
            <p className="mb-3 text-sm font-bold tracking-wider text-brand-700 uppercase">
              Issue #3
            </p>

            <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
              A calm, reliable place for every credit you need to remember.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              The React foundation now uses a consistent visual system for
              colors, typography, spacing, surfaces, status states, and focus
              styles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {foundationItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-control border border-line bg-canvas p-5"
                >
                  <h2 className="font-bold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                React
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                Vite
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App