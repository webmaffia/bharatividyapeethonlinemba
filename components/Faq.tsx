import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <div className="max-w-3xl space-y-3">
      {faqs.map(([q, a]) => (
        <details key={q} className="group rounded-md border border-line bg-white p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {q}
            <span className="grid size-7 shrink-0 place-items-center rounded bg-soft text-brand transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
