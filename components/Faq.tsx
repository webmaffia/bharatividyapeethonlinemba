import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map(([q, a]) => (
        <details key={q} className="group rounded-2xl border border-line bg-card p-5 open:shadow-lg open:shadow-brand/5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}
