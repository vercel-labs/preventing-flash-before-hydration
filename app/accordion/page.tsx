import { Accordion } from "./accordion";

const STORAGE_KEY = "open-section";
const DEFAULT_ID = "about";
const SECTION_IDS = ["about", "how", "why"];

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

        {/* Inline script: restore the open section before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `{const id=localStorage.getItem("${STORAGE_KEY}")??"${DEFAULT_ID}";${JSON.stringify(SECTION_IDS)}.forEach(function(s){const el=document.getElementById("section-"+s);if(el){if(s===id)el.setAttribute("open","");else el.removeAttribute("open")}})}`,
          }}
        />
      </main>
    </div>
  );
}
