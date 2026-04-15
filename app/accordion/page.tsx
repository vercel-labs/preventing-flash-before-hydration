import { Accordion } from "./accordion";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-8 py-16 px-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Accordion with Persisted State
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Open a section, reload the page. The inline script restores your
          selection before paint, and the lazy{" "}
          <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
            useState
          </code>{" "}
          initializer reads the same value so React agrees with the DOM.
        </p>

        <Accordion />
      </main>
    </div>
  );
}
