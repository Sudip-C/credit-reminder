import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../src/App.jsx'

describe('App', () => {
  it('renders the application foundation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /a calm, reliable place for every credit you need to remember/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText('Foundation ready')).toBeInTheDocument()
  })
})
