"use client";

import { useId } from "react";
import { InlineScript } from "./inline-script";

export function LocalDate({
  date,
  options,
}: {
  date: string;
  options?: Intl.DateTimeFormatOptions;
}) {
  const id = useId();

  return (
    <>
      <time id={id} dateTime={date} suppressHydrationWarning>
        {new Date(date).toLocaleDateString(undefined, options)}
      </time>
      <InlineScript
        html={`{var n=document.getElementById("${id}");if(n)n.textContent=new Date("${date}").toLocaleDateString(undefined,${JSON.stringify(options)})}`}
      />
    </>
  );
}
