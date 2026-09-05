# Credit Reminder Design System

## Direction

The interface should feel calm, reliable, private, and easy to use on a phone. Use a clean light theme with blue for primary actions and separate semantic colors for payment and due-date states.

## Core colors

| Token       | Purpose                                           |
| ----------- | ------------------------------------------------- |
| `brand-*`   | Primary actions, selected navigation and emphasis |
| `canvas`    | Application background                            |
| `surface`   | Cards, dialogs and form surfaces                  |
| `ink`       | Primary text                                      |
| `muted`     | Secondary text and metadata                       |
| `line`      | Borders and separators                            |
| `success-*` | Recovered and fully paid states                   |
| `warning-*` | Due-soon and due-today states                     |
| `danger-*`  | Overdue, errors and destructive actions           |

Use semantic tokens instead of arbitrary color values inside components.

## Typography

- Use the `font-sans` token throughout the application.
- Primary body text should normally be at least `text-base`.
- Labels and secondary metadata should normally be at least `text-sm`.
- Use clear line heights for English and Bengali text.
- Use Tailwind’s `tabular-nums` utility for monetary amounts.

## Shape and elevation

- Use `rounded-control` for inputs, buttons, badges and compact panels.
- Use `rounded-card` for primary content surfaces.
- Use `shadow-card` sparingly for elevated primary surfaces.
- Prefer borders over shadows for ordinary cards.

## Spacing

- Use `px-page` for responsive page padding.
- Use `gap-section` for separation between major page sections.
- Use Tailwind’s standard spacing scale inside components.

## Interaction

- Every interactive control must have a visible keyboard focus state.
- Primary actions use `brand-600` and may use `brand-700` on hover.
- Disabled actions must remain readable and use a `not-allowed` cursor.
- Do not use color alone to communicate status.

## Motion

Respect `prefers-reduced-motion`. Animation must not be required to understand or complete an action.

## Responsive behavior

Design mobile-first from a minimum width of 320px. Interfaces must not cause unintended horizontal scrolling, and touch controls should remain easy to use.
