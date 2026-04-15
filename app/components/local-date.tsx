import { useId } from "react";

function formatDate(iso: string, options?: Intl.DateTimeFormatOptions) {
  return new Date(iso).toLocaleDateString(undefined, options);
}

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
        {formatDate(date, options)}
      </time>
      <script
        dangerouslySetInnerHTML={{
          __html: `{const n=document.getElementById("${id}");if(n)n.textContent=(${formatDate.toString()})("${date}",${JSON.stringify(options)})}`,
        }}
      />
    </>
  );
}
