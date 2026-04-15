import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-16 px-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Preventing Flash Before Hydration
        </h1>
        <div className="text-zinc-600 dark:text-zinc-400 text-center max-w-lg flex flex-col gap-3">
          <p>
            This demo is built with{" "}
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              LANG=ja_JP.UTF-8
            </code>
            , so the server renders dates in Japanese format.
          </p>
          <p>
            To test with different client locales, use Chrome DevTools{" "}
            <a
              href="https://developer.chrome.com/docs/devtools/sensors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-zinc-900 dark:text-zinc-100"
            >
              Sensors
            </a>{" "}
            to override your location and locale (e.g.{" "}
            <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              ru-RU
            </code>{" "}
            for Cyrillic formatting).
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/inline-script"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Inline Script
          </Link>
          <Link
            href="/hydration-error"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Without Inline Script
          </Link>
          <Link
            href="/accordion"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Accordion + State
          </Link>
        </div>
      </main>
    </div>
  );
}
