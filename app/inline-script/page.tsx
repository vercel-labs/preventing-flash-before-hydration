import { LocalDate } from "../components/local-date";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-12 py-16 px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Inline Script</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A Server Component with an inline script that corrects the date before
          the browser paints. No flash, no hydration error.
        </p>

        <section className="flex flex-col gap-4">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
            <LocalDate
              date="2026-06-15T18:00:00Z"
              options={{ year: "numeric", month: "long", day: "numeric" }}
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Multiple dates</h2>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Conference:</span>
              <LocalDate
                date="2026-06-15T18:00:00Z"
                options={{ year: "numeric", month: "long", day: "numeric" }}
              />
            </div>
            <div className="flex justify-between">
              <span>Deadline:</span>
              <LocalDate
                date="2026-05-01T23:59:59Z"
                options={{
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }}
              />
            </div>
            <div className="flex justify-between">
              <span>Short format:</span>
              <LocalDate date="2026-12-25T00:00:00Z" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
