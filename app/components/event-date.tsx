"use client";

export function EventDate({ date }: { date: string }) {
  return (
    <p>
      {new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  );
}
