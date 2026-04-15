import { EventDate } from "../components/event-date";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-12 py-16 px-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Without Inline Script
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A Client Component that calls{" "}
          <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
            toLocaleDateString()
          </code>{" "}
          directly. The server and client produce different strings. In
          development, check the console for a hydration error. In production,
          look for a{" "}
          <a
            href="https://react.dev/errors/418"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            418
          </a>{" "}
          error and a visible flash as React recovers.
        </p>

        <section className="flex flex-col gap-4">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
            <EventDate date="2026-06-15T18:00:00Z" />
          </div>
        </section>
      </main>
    </div>
  );
}
