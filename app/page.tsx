export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-16 px-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Preventing Flash Before Hydration
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-md">
          Run with{" "}
          <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
            LANG=ja_JP.UTF-8 pnpm dev
          </code>{" "}
          to see the locale mismatch.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/inline-script"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Inline script
          </a>
          <a
            href="/client-component"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Client Component
          </a>
          <a
            href="/accordion"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Accordion + State
          </a>
        </div>
      </main>
    </div>
  );
}
