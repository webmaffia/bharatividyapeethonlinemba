"use client";
import { useState } from "react";
import { cities } from "@/lib/data";

type Stage = "form" | "otp" | "done";
const input = "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

export default function EnquiryForm({ id }: { id?: string }) {
  const [stage, setStage] = useState<Stage>("form");
  const [phone, setPhone] = useState("");

  return (
    <div id={id} className="glass rounded-3xl p-6 shadow-2xl shadow-brand/10 sm:p-8">
      {stage === "form" && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            setPhone(String(f.get("phone")));
            // TODO: POST to your CRM / API route here.
            setStage("otp");
          }}
        >
          <h3 className="font-display text-2xl font-semibold">Get a free counselling call</h3>
          <p className="text-sm text-muted">Fill in your details and download the brochure.</p>
          <input required name="name" placeholder="Full name" autoComplete="name" className={input} />
          <input required type="email" name="email" placeholder="Email address" autoComplete="email" className={input} />
          <input required name="phone" type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" placeholder="10-digit mobile number" autoComplete="tel-national" className={input} />
          <select required name="city" defaultValue="" className={input}>
            <option value="" disabled>Select city</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
          <label className="flex items-start gap-2 text-xs text-muted">
            <input required type="checkbox" className="mt-0.5 accent-brand" />
            I agree to the Terms &amp; Conditions and to be contacted about this programme.
          </label>
          <button className="w-full rounded-xl bg-linear-to-r from-brand to-brand-2 px-5 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl">
            Register &amp; Download Brochure
          </button>
        </form>
      )}
      {stage === "otp" && (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStage("done"); }}>
          <h3 className="font-display text-2xl font-semibold">Verify your number</h3>
          <p className="text-sm text-muted">Enter the OTP sent to +91 {phone}.</p>
          <input required inputMode="numeric" pattern="[0-9]{4,6}" maxLength={6} placeholder="Enter OTP" className={`${input} text-center text-lg tracking-[0.4em]`} />
          <button className="w-full rounded-xl bg-brand px-5 py-3.5 font-semibold text-white transition hover:bg-brand/90">Verify OTP</button>
        </form>
      )}
      {stage === "done" && (
        <div className="py-8 text-center" role="status">
          <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600">✓</div>
          <h3 className="font-display text-2xl font-semibold">Thank you!</h3>
          <p className="mt-2 text-sm text-muted">Our counsellor will reach out shortly.</p>
        </div>
      )}
    </div>
  );
}
