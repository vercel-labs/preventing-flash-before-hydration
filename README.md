# Preventing Flash Before Hydration

Companion demo for the [Preventing flash before hydration](https://nextjs.org/docs/app/guides/preventing-flash-before-hydration) guide.

Built with `LANG=ja_JP.UTF-8` to simulate a server/client locale mismatch. Use Chrome DevTools [Sensors](https://developer.chrome.com/docs/devtools/sensors) to test with different client locales.

## Routes

- `/inline-script` - Date formatting with an inline script. No flash, no hydration error.
- `/hydration-error` - A Client Component calling `toLocaleDateString()` directly. Hydration error in dev, flash in prod.
- `/accordion` - Persisted accordion state using `localStorage`, a lazy `useState` initializer, and an inline script.

## Key patterns

- `InlineScript` helper (`app/components/inline-script.tsx`) - Sets `type="text/javascript"` on the server and `type="text/plain"` on the client to avoid React's script warning.
- `LocalDate` component (`app/components/local-date.tsx`) - Client Component with `useId`, `suppressHydrationWarning`, and `InlineScript`.
- `Accordion` component (`app/accordion/accordion.tsx`) - Lazy `useState` initializer reads `localStorage` to match the DOM the inline script set.

## Running locally

```bash
pnpm install
pnpm dev
```

The `dev` script sets `LANG=ja_JP.UTF-8` automatically. If your browser also uses a Japanese locale, switch to a different one (e.g. `LANG=en_US.UTF-8 pnpm dev`) to see the mismatch.
