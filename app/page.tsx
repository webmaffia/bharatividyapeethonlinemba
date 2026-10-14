import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import { SITE_URL } from "@/lib/site";
import { accreditations, faqs, highlights, journey, semesters, skills, specialisations, steps } from "@/lib/data";

const btn = "inline-block rounded-md bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-brand-2";
const btnOutline = "inline-block rounded-md border-2 border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-foreground";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": `${SITE_URL}/#university`,
      name: "Bharati Vidyapeeth (Deemed to be University)",
      url: "https://bharatividyapeethonline.com/",
      foundingDate: "1964",
      address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
    },
    {
      "@type": "Course",
      name: "Online MBA – Bharati Vidyapeeth (Deemed to be University)",
      description:
        "A 2-year, 124-credit online MBA approved by UGC-DEB and AICTE, with 14 specialisations and an 8-credit summer internship.",
      provider: { "@id": `${SITE_URL}/#university` },
      inLanguage: "en",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "P2Y",
        offers: { "@type": "Offer", price: "178000", priceCurrency: "INR", category: "Total programme fee" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

function Section({ id, title, intro, children, bg = "" }: { id?: string; title: string; intro?: string; children: React.ReactNode; bg?: string }) {
  return (
    <section id={id} className={`px-5 py-14 sm:py-20 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-14 bg-brand" />
        {intro && <p className="mt-5 max-w-3xl text-lg text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-brand px-4 py-2 text-center text-sm font-medium text-white">
        Admissions are open for the July 2026 batch. Add-on IIT Madras Pravartak certificate available.
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" aria-label="Bharati Vidyapeeth Online Education home">
            <Image src="/img/site/logo-black.png" alt="Bharati Vidyapeeth Online Education" width={136} height={40} priority className="h-10 w-auto" />
          </a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            {[["Overview", "#overview"], ["Specialisations", "#specialisations"], ["Fees", "#fees"], ["Admission", "#admission"], ["FAQ", "#faq"]].map(([l, h]) => (
              <a key={h} href={h} className="hover:text-brand">{l}</a>
            ))}
          </div>
          <a href="#enquire" className="rounded-md bg-foreground px-5 py-2.5 text-sm font-bold text-white hover:bg-brand">Download Brochure</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-navy-pattern px-5 py-14 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand">Bharati Vidyapeeth (Deemed to be University), Pune</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Online MBA from Bharati Vidyapeeth: 2 years, 100% online</h1>
              <p className="mt-5 max-w-xl text-lg text-white/80">
                Earn a UGC-DEB and AICTE approved MBA without leaving your job. Choose from 14 specialisations, study on your own schedule and pay in easy instalments.
              </p>
              <ul className="mt-6 space-y-2 text-white/90">
                <li>Open to any graduate with 50% marks</li>
                <li>EMI options and semester-wise payment</li>
                <li>Placement assistance and 24/7 learner support</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquire" className={btn}>Enroll Now</a>
                <a href="#fees" className={btnOutline}>See Fees</a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/20 pt-6">
                {[["2 years", "Duration"], ["100% online", "Mode"], ["124", "Total credits"]].map(([v, l]) => (
                  <div key={l}>
                    <dd className="text-2xl font-bold">{v}</dd>
                    <dt className="text-sm text-white/70">{l}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <EnquiryForm id="enquire" />
          </div>
        </section>

        {/* Accreditations */}
        <div className="border-b border-line bg-white px-5 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {accreditations.map(([a, src]) => (
              <Image key={a} src={src} alt={a} width={150} height={150} className="size-20 object-contain" />
            ))}
          </div>
        </div>

        <Section id="overview" bg="bg-dots" title="About the online MBA programme" intro="This is a two-year management degree built for people who want to move up without stopping work.">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-muted">
              <p>
                The programme opens with core management subjects, moves into a dual specialisation in the third semester and closes with application-based learning and an 8-credit summer internship. Classes are taught in English, and you can take extra time to complete the course if work gets busy.
              </p>
              <p>
                The MBA is approved by UGC-DEB and AICTE and delivered by Bharati Vidyapeeth, a university founded in Pune in 1964 that now runs 8 campuses across India.
              </p>
              <h3 className="pt-2 text-xl font-bold text-foreground">Semester structure</h3>
              <table className="w-full border border-line text-left text-sm">
                <tbody>
                  {semesters.map(([s, d]) => (
                    <tr key={s} className="border-b border-line last:border-0">
                      <th scope="row" className="w-32 bg-soft px-4 py-3 font-bold text-foreground">{s}</th>
                      <td className="px-4 py-3">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Image src="/img/site/mba.jpg" alt="Wooden blocks stacked as steps leading up to a block labelled MBA" width={1024} height={683} className="w-full rounded-md" />
          </div>
        </Section>

        <Section id="highlights" title="Why choose the Bharati Vidyapeeth online MBA" bg="bg-stripe">
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([t, d], i) => (
              <div key={t} className="bg-white p-6">
                <Image src={`/img/kh-${i + 1}.png`} alt="" width={72} height={72} className="mb-3 size-12" />
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="specialisations" bg="bg-warm" title="Online MBA specialisations" intro="Pick specialisations that match the role you want. You choose two during the third semester.">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialisations.map((s) => (
              <li key={s} className="border-b border-line pb-3 font-medium">{s}</li>
            ))}
          </ul>
          <a href="#enquire" className={`${btn} mt-10`}>Talk to a counsellor</a>
        </Section>

        <section className="bg-navy-pattern px-5 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What you will build during the course</h2>
            <div className="mt-3 h-1 w-14 bg-brand" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map(([t, d], i) => (
                <div key={t}>
                  <Image src={`/img/learning-journey-${i + 1}.png`} alt="" width={75} height={75} className="size-14" />
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-white/75">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section bg="bg-grid" title="Add-on skill courses for career growth" intro="Alongside the MBA you can pick up value-added certificate courses in technology and analytics.">
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="rounded border border-line bg-white px-4 py-2 text-sm font-medium">{s}</li>
            ))}
          </ul>
        </Section>

        <Section id="fees" title="Online MBA eligibility and fees" bg="bg-cool">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Eligibility criteria</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                <li>Graduation (10+2+3) in any stream from a recognised university</li>
                <li>Minimum 50% aggregate marks, or 45% for SC/ST candidates</li>
                <li>Final-year students can apply, with provisional admission until the final result is issued</li>
              </ul>
            </div>
            <div className="rounded-md border border-line bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">Programme fees</h3>
              <table className="mt-4 w-full text-left">
                <tbody>
                  <tr className="border-b border-line"><th scope="row" className="py-3 font-medium text-muted">Total programme fee</th><td className="py-3 text-right text-2xl font-bold">₹1,78,000</td></tr>
                  <tr className="border-b border-line"><th scope="row" className="py-3 font-medium text-muted">Per semester</th><td className="py-3 text-right font-bold">₹40,000</td></tr>
                  <tr><th scope="row" className="py-3 font-medium text-muted">Payment options</th><td className="py-3 text-right font-bold">Semester-wise / EMI</td></tr>
                </tbody>
              </table>
              <a href="#enquire" className={`${btn} mt-4`}>Apply Now</a>
            </div>
          </div>
        </Section>

        <Section id="admission" bg="bg-dots" title="Admission process" intro="Getting started takes four steps and can be done entirely online.">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <Image src={`/img/site/step-${i + 1}.jpg`} alt="" width={180} height={180} className="size-20 rounded" />
                <h3 className="mt-4 text-lg font-bold">Step {i + 1}: {t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Degree and university" intro="Your degree is awarded by Bharati Vidyapeeth (Deemed to be University)." bg="bg-warm">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <Image src="/img/certificate.png" alt="Sample Bharati Vidyapeeth MBA degree certificate" width={385} height={545} className="h-80 w-auto rounded border border-line bg-white p-2" />
            <div className="space-y-4 text-muted">
              <p>Dr. Patangrao Kadam founded Bharati Vidyapeeth in Pune in 1964. The university runs 8 campuses across India and is accredited by NAAC.</p>
              <p>The online MBA is approved by UGC-DEB and AICTE, and the certificate you receive is issued by the university.</p>
            </div>
          </div>
        </Section>

        <Section bg="bg-grid" title="Where our alumni work">
          <div className="flex flex-wrap items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image key={n} src={`/img/alumni-${n}.png`} alt={`Alumni employer logo ${n}`} width={156} height={101} />
            ))}
          </div>
        </Section>

        <Section id="faq" title="Frequently asked questions" bg="bg-stripe">
          <Faq />
        </Section>

        <section className="bg-brand-pattern px-5 py-14 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Apply for the July 2026 online MBA batch</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">Speak to an admissions counsellor about fees, specialisations and eligibility.</p>
          <a href="#enquire" className="mt-7 inline-block rounded-md bg-white px-8 py-3.5 font-bold text-brand hover:bg-soft">Request a call back</a>
        </section>
      </main>

      <footer className="bg-navy-pattern px-5 py-10 text-sm text-white/70">
        <div className="mx-auto max-w-6xl">
          <Image src="/img/site/logo-white.png" alt="Bharati Vidyapeeth" width={170} height={50} className="mb-5 h-12 w-auto" />
          <p className="max-w-3xl">
            Disclaimer: This website is an admission and marketing partner service for Bharati Vidyapeeth (Deemed to be University). Images are for illustration only, and the university may request changes to this content at any time.
          </p>
          <p className="mt-4">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
