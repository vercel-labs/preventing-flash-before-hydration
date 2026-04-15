export function Nav() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto flex gap-6 px-8 py-3 text-sm">
        <a href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Home
        </a>
        <a href="/inline-script" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Inline Script
        </a>
        <a href="/client-component" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Client Component
        </a>
        <a href="/accordion" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Accordion
        </a>
      </div>
    </nav>
  );
}
