"use client";

import { useState, useCallback } from "react";

const STORAGE_KEY = "open-section";

const sections = [
  {
    id: "about",
    title: "About",
    content:
      "This demo shows how to persist which accordion section is open across page reloads using localStorage and an inline script.",
  },
  {
    id: "how",
    title: "How it works",
    content:
      "An inline script reads localStorage before React hydrates and sets the open attribute on the correct details element. The useState lazy initializer reads the same value so React's initial state matches the DOM.",
  },
  {
    id: "why",
    title: "Why not useEffect?",
    content:
      "useEffect runs after paint. The user would see the default section open first, then a flash as it switches to their saved section.",
  },
];

export function Accordion() {
  const [openId, setOpenId] = useState(() => {
    if (typeof window === "undefined") return sections[0].id;
    return localStorage.getItem(STORAGE_KEY) ?? sections[0].id;
  });

  const handleToggle = useCallback(
    (id: string) => (e: React.ToggleEvent<HTMLDetailsElement>) => {
      if (e.newState === "open") {
        setOpenId(id);
        localStorage.setItem(STORAGE_KEY, id);
      }
    },
    []
  );

  return (
    <div className="flex flex-col gap-2">
      {sections.map((section) => (
        <details
          key={section.id}
          name="accordion"
          id={`section-${section.id}`}
          open={openId === section.id}
          onToggle={handleToggle(section.id)}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800"
        >
          <summary className="cursor-pointer px-4 py-3 font-medium">
            {section.title}
          </summary>
          <p className="px-4 pb-3 text-zinc-600 dark:text-zinc-400">
            {section.content}
          </p>
        </details>
      ))}
    </div>
  );
}
