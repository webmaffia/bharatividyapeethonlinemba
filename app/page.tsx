import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { accreditations, highlights, journey, skills, specialisations, steps } from "@/lib/data";

const cta = "inline-flex items-center justify-center rounded-full bg-linear-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl";
const ghost = "inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 font-semibold transition hover:border-brand hover:text-brand";

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* Banner */}
      <div className="bg-foreground px-4 py-2 text-center text-sm text-white">
        🔥 Admissions closing soon for the July 2026 batch · Add-on IIT Madras Pravartak certificate
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" aria-label="Bharati Vidyapeeth Online Education"><Image src="/img/site/logo-black.png" alt="Bharati Vidyapeeth" width={136} height={40} priority className="h-10 w-auto" /></a>
          <div className="hidden gap-7 text-sm font-medium text-muted md:flex">
            {[["Highlights", "#highlights"], ["Specialisations", "#specialisations"], ["Fees", "#fees"], ["FAQ", "#faq"]].map(([l, h]) => (
              <a key={h} href={h} className="transition hover:text-brand">{l}</a>
            ))}
          </div>
          <a href="#enquire" className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand">Download Brochure</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
        <div className="float pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="float pointer-events-none absolute -right-24 top-40 size-96 rounded-full bg-brand-2/20 blur-3xl [animation-delay:-3s]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-block rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-brand">Top-Ranked University · Deemed to be University</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
              Bharati Vidyapeeth <span className="grad-text">Online MBA</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Earn a UGC-DEB &amp; AICTE approved MBA in 2 years, 100% online, with dual specialisation and a summer internship.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Easy EMI Options", "100% Placement Assistance", "24/7 Learner Support"].map((b) => (
                <span key={b} className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">✓ {b}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquire" className={cta}>Enroll Now</a>
              <a href="#enquire" className={ghost}>Download Brochure</a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {[["2 Years", "Duration"], ["100% Online", "Mode"], ["Any Graduate", "Eligibility"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-xs text-muted">{l}</dt>
                  <dd className="mt-1 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <Image src="/img/girlimage.png" alt="Graduate with cap and notebook" width={653} height={735} priority className="pointer-events-none absolute -top-32 right-0 hidden h-72 w-auto xl:block" />
            <EnquiryForm id="enquire" />
          </div>
        </div>
      </section>

      <div className="px-5 pb-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand shadow-xl">
          <div className="p-8 text-white md:absolute md:inset-y-0 md:left-0 md:flex md:w-[46%] md:flex-col md:justify-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Learn on your schedule</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight lg:text-5xl">Upskill without pausing your career</h2>
            <p className="mt-4 max-w-md text-white/85">Live lectures, recorded sessions and 24/7 support, all from a single online platform.</p>
            <a href="#enquire" className="mt-6 inline-flex w-fit rounded-full bg-white px-7 py-3 font-semibold text-brand transition hover:-translate-y-0.5 hover:shadow-lg">Apply Now</a>
          </div>
          <Image src="/img/site/slider1.jpg" alt="Student studying online on a laptop" width={1920} height={705} className="hidden w-full md:block" />
          <Image src="/img/site/slider1.jpg" alt="" aria-hidden width={1920} height={705} className="h-56 w-full object-cover object-right md:hidden" />
        </div>
      </div>

      {/* Accreditations */}
      <div className="border-y border-line bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {accreditations.map(([a, src]) => <Image key={a} src={src} alt={a} width={150} height={150} className="size-24 object-contain" />)}
        </div>
      </div>

      {/* Overview */}
      <Section eyebrow="Programme overview" title="A two-year MBA built for working professionals">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg text-muted">
            The programme begins with core management in early semesters, moves into dual specialisations, and ends with a summer internship. Taught in English with flexible completion timelines, it is recognised by UGC-DEB and AICTE.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <Image src="/img/site/mba.jpg" alt="Wooden blocks forming steps up to MBA" width={1024} height={683} className="mx-auto h-72 w-full max-w-4xl rounded-3xl object-cover" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[["124", "Credits"], ["14", "Specialisations"], ["8", "Credit internship"]].map(([n, l], i) => (
            <Reveal key={l} delay={i * 100}>
              <div className="rounded-3xl border border-line bg-white p-8 text-center">
                <div className="grad-text font-display text-5xl font-bold">{n}</div>
                <div className="mt-2 text-muted">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Highlights */}
      <Section id="highlights" eyebrow="Key highlights" title="Why choose this MBA" className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 100}>
              <div className="h-full rounded-3xl border border-line bg-background p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                <Image src={`/img/kh-${i + 1}.png`} alt="" width={72} height={72} className="mb-4 size-14" />
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Specialisations */}
      <Section id="specialisations" eyebrow="Specialisations" title="Choose the path that fits your career">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {specialisations.map((s) => (
            <span key={s} className="rounded-full border border-line bg-white px-5 py-2.5 font-medium transition hover:border-brand hover:bg-brand hover:text-white">{s}</span>
          ))}
        </Reveal>
        <div className="mt-10 text-center"><a href="#enquire" className={cta}>Get Expert Guidance</a></div>
      </Section>

      {/* Learning journey */}
      <Section eyebrow="Learning journey" title="How you will grow" className="bg-foreground text-white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                <Image src={`/img/learning-journey-${i + 1}.png`} alt="" width={75} height={75} className="size-14" />
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-white/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Career growth */}
      <Section eyebrow="Career growth" title="Value-added skill programmes">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-xl bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">{s}</span>
          ))}
        </Reveal>
      </Section>

      {/* Eligibility + Fees */}
      <Section id="fees" eyebrow="Eligibility & fees" title="Simple to qualify, easy to afford" className="bg-white">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-background p-8">
              <h3 className="font-display text-2xl font-semibold">Eligibility</h3>
              <ul className="mt-5 space-y-3 text-muted">
                <li>✓ Any graduate (10+2+3) from a recognised university</li>
                <li>✓ Minimum 50% aggregate (45% for SC/ST)</li>
                <li>✓ Final-year bachelor&apos;s students can apply — provisional admission pending final result</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-linear-to-br from-brand to-brand-2 p-8 text-white">
              <h3 className="font-display text-2xl font-semibold">Programme fees</h3>
              <div className="mt-6 text-5xl font-bold">₹1,78,000</div>
              <p className="mt-1 text-white/80">Total programme fee</p>
              <div className="mt-6 rounded-2xl bg-white/15 p-4">₹40,000 per semester · Easy EMI options available</div>
              <a href="#enquire" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-brand">Apply Now</a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Admission */}
      <Section eyebrow="Admission process" title="Four steps to get started">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <li className="h-full list-none rounded-3xl border border-line bg-white p-7">
                <Image src={`/img/site/step-${i + 1}.jpg`} alt="" width={180} height={180} className="size-20 rounded-2xl" />
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Degree / About */}
      <Section eyebrow="Degree & university" title="A globally recognised MBA from a trusted name" className="bg-white">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg text-muted">
            <Image src="/img/certificate.png" alt="Sample MBA degree certificate" width={385} height={545} className="mx-auto mb-8 h-80 w-auto rounded-xl shadow-2xl" />
            Bharati Vidyapeeth was established in 1964 in Pune by Dr. Patangrao Kadam and today operates 8 campuses across India. Your online MBA carries the same university credentials as its on-campus programmes.
          </p>
        </Reveal>
      </Section>

      {/* Alumni */}
      <Section eyebrow="Our alumni work at" title="Top employers hire our learners">
        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Image key={n} src={`/img/alumni-${n}.png`} alt="Employer logo" width={156} height={101} />
          ))}
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Questions, answered">
        <Faq />
      </Section>

      {/* Final CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-foreground p-10 text-center text-white sm:p-16">
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">Ready to level up your career?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">Admissions are closing soon for the July 2026 batch.</p>
          <a href="#enquire" className={`${cta} mt-8`}>Enroll Now</a>
        </div>
      </section>

      <footer className="border-t border-line bg-white px-5 py-10 text-center text-xs text-muted">
        <Image src="/img/site/logo-black.png" alt="Bharati Vidyapeeth" width={170} height={50} className="mx-auto mb-5" />
        <p className="mx-auto max-w-3xl">
          Disclaimer: This site is an admission and marketing partner service. Images are for illustration only. The university may request content changes at any time.
        </p>
        <p className="mt-3">© 2026 All rights reserved.</p>
      </footer>
    </main>
  );
}
