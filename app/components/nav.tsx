import Link from "next/link";

export function Nav() {
  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto flex gap-6 px-8 py-3 text-sm">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Home
        </Link>
        <Link href="/inline-script" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Inline Script
        </Link>
        <Link href="/hydration-error" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Without Inline Script
        </Link>
        <Link href="/accordion" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
          Accordion
        </Link>
      </div>
    </nav>
  );
}
