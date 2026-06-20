import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Services | Doctor Care Medical & Skin Aesthetic Centre ";
const DESC =
  "Explore medical diagnostics, physiotherapy, specialist doctors, lab tests, pharmacy and skin aesthetic services at Doctor Care, Samanabad, Lahore.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ServicesPage,
});

/* ---------- Flagship services (full editorial detail) ---------- */

const SERVICES: Array<{
  num: string;
  title: string;
  body: string;
  benefits: string[];
  wa: string;
  reverse?: boolean;
}> = [
  {
    num: "01",
    title: "Medical Diagnostic Imaging",
    body:
      "Accurate diagnostic imaging delivered with care and prompt reporting, helping your doctor make confident decisions.",
    benefits: [
      "✓ Modern imaging in a clean environment",
      "✓ Easy-to-understand reports",
      "✓ Friendly, professional technicians",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Diagnostic%20Imaging.",
  },
  {
    num: "02",
    title: "Skin Aesthetic Treatments",
    body:
      "Honest consultations and gentle, results-focused skin care — from advanced facials to dermatological procedures performed in a sterile environment.",
    benefits: [
      "✓ Personalised skin assessment",
      "✓ Modern aesthetic procedures",
      "✓ Visible, long-lasting results",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Skin%20Aesthetic%20Treatments.",
    reverse: true,
  },
  {
    num: "03",
    title: "Physiotherapy & Rehabilitation",
    body:
      "Targeted recovery for neck, shoulder, back, ankle and sports-related pain — guided by experienced physiotherapists like Dr. Mahnoor Butt, whose patients consistently report measurable improvement.",
    benefits: [
      "✓ Custom rehab plans",
      "✓ Hands-on, evidence-based therapy",
      "✓ Real pain relief, session by session",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Physiotherapy%20session.",
  },
  {
    num: "04",
    title: "General Medical Consultations (OPD)",
    body:
      "Routine check-ups, follow-ups and ongoing health support — unhurried OPD appointments that listen first.",
    benefits: [
      "✓ Attentive doctors",
      "✓ Convenient late hours",
      "✓ Continuity of care",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20a%20General%20Consultation.",
    reverse: true,
  },
];

/* ---------- Compact services, grouped by category ---------- */

type CompactService = { icon: string; title: string; body: string; wa: string };
type Category = { name: string; blurb: string; items: CompactService[] };

function waLink(label: string) {
  return `https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20${encodeURIComponent(
    label
  )}.`;
}

const CATEGORIES: Category[] = [
  {
    name: "Skin Aesthetic Procedures",
    blurb: "Advanced, results-led treatments for skin, scars and pigmentation.",
    items: [
      { icon: "💧", title: "Whitening Drips", body: "IV brightening drips for an even, radiant complexion.", wa: waLink("Whitening Drips") },
      { icon: "🔥", title: "Carbon Laser", body: "Carbon peel laser facial for pores, oil control and glow.", wa: waLink("Carbon Laser") },
      { icon: "🩸", title: "PRP Face / Scalp", body: "Platelet-rich plasma therapy for skin rejuvenation and hair regrowth.", wa: waLink("PRP Face/Scalp") },
      { icon: "🎯", title: "Subcision for Acne Scars", body: "Targeted procedure to release and smooth depressed acne scars.", wa: waLink("Subcision for Acne Scars") },
      { icon: "💉", title: "Microneedling (Dr Pen)", body: "Collagen-induction therapy for texture, scars and fine lines.", wa: waLink("Microneedling (Dr Pen)") },
      { icon: "🧪", title: "Mesotherapy", body: "Targeted micro-injections for pigmentation and melasma.", wa: waLink("Mesotherapy for Pigmentation & Melasma") },
      { icon: "🌿", title: "Chemical Peels", body: "Customised peels to refresh tone, texture and clarity.", wa: waLink("Chemical Peels") },
      { icon: "🚿", title: "Hydra Facial", body: "Deep cleansing, exfoliating and hydrating facial treatment.", wa: waLink("Hydra Facial") },
      { icon: "🌗", title: "Pigmentation & Melasma Treatment", body: "Dedicated treatment plans for uneven tone and dark patches.", wa: waLink("Pigmentation & Melasma Treatment") },
      { icon: "⚖️", title: "Slimming Drips", body: "IV drip therapy supporting body contouring goals.", wa: waLink("Slimming Drips") },
      { icon: "✨", title: "Laser Hair Removal", body: "Long-lasting hair reduction for face and body.", wa: waLink("Laser Hair Removal") },
      { icon: "🩹", title: "Warts & Tattoo Removal", body: "Safe, precise removal of warts and unwanted tattoos.", wa: waLink("Warts & Tattoo Removal") },
    ],
  },
  {
    name: "Specialist Doctors",
    blurb: "Consultant-led care across key specialities, under one roof.",
    items: [
      { icon: "👂", title: "ENT Doctor & Procedures", body: "Ear, nose and throat consultations and minor procedures.", wa: waLink("ENT Doctor & Procedures") },
      { icon: "🤰", title: "Gynaecologist", body: "Confidential women's health consultations and care.", wa: waLink("Gynaecologist") },
      { icon: "🦴", title: "Orthopaedic Doctor", body: "Bone, joint and muscle assessment and treatment.", wa: waLink("Orthopaedic Doctor") },
      { icon: "🧒", title: "Child Specialist (Paeds)", body: "Dedicated paediatric consultations for infants and children.", wa: waLink("Child Specialist (Paeds)") },
    ],
  },
  {
    name: "Diagnostics & Lab",
    blurb: "On-site testing and imaging, with fast, accurate reporting.",
    items: [
      { icon: "📡", title: "Ultrasound", body: "On-site ultrasound imaging with prompt reporting.", wa: waLink("Ultrasound") },
      { icon: "💓", title: "ECG", body: "Quick, accurate cardiac screening on-site.", wa: waLink("ECG") },
      { icon: "🧫", title: "All Lab Tests (CDC Laboratory)", body: "Full diagnostic lab testing in partnership with CDC Laboratory.", wa: waLink("Lab Tests - CDC Laboratory") },
    ],
  },
  {
    name: "Pharmacy & Support Care",
    blurb: "Everything around your treatment, handled in-house.",
    items: [
      { icon: "💊", title: "Pharmacy", body: "100% original medicines, dispensed on-site.", wa: waLink("Pharmacy") },
      { icon: "💉", title: "Injection & Drips", body: "Prescribed injections and IV drip administration.", wa: waLink("Injection & Drips") },
    ],
  },
];

/* ---------- Emergency banner ---------- */

const EMERGENCY = {
  title: "Emergency & Urgent Care",
  body:
    "First aid, sutures and emergency support available — walk in or call ahead and our team will be ready.",
  wa: "https://wa.me/923327557014?text=Hello%2C%20this%20is%20an%20emergency%2C%20I%20need%20urgent%20help.",
  tel: "tel:+923327557014",
};

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Complete medical, physiotherapy &amp; skin aesthetic care.</h1>
          <p className="lead">
            Every service is delivered by qualified professionals in a clean, calm
            environment — with treatment plans tailored to you.
          </p>
        </div>
      </section>

      {/* Emergency banner — deliberately distinct, not a card in a grid */}
      <section className="section emergency-band">
        <div className="container emergency-inner">
          <div className="emergency-copy">
            <span className="emergency-tag">🚨 Emergency</span>
            <h2>{EMERGENCY.title}</h2>
            <p>{EMERGENCY.body}</p>
          </div>
          <div className="emergency-actions">
            <a className="btn btn-light" href={EMERGENCY.wa} target="_blank" rel="noopener">
              WhatsApp Now
            </a>
            <a className="btn btn-ghost-light" href={EMERGENCY.tel}>
              Call +92 332 7557014
            </a>
          </div>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          {SERVICES.map((s) => (
            <article key={s.num} className={`svc${s.reverse ? " reverse" : ""}`}>
              <div className="svc-head">
                <span className="svc-num">{s.num}</span>
                <h2>{s.title}</h2>
              </div>
              <div>
                <p>{s.body}</p>
                <ul className="benefits">
                  {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-primary"
                  href={s.wa}
                  target="_blank"
                  rel="noopener"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categorised compact services */}
      {CATEGORIES.map((cat) => (
        <section className="section why" key={cat.name}>
          <div className="container">
            <div className="section-head center">
              <span className="kicker">{cat.name}</span>
              <h2>{cat.blurb}</h2>
            </div>
            <div className="why-grid">
              {cat.items.map((item) => (
                <article className="feature" key={item.title}>
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a
                    className="link-arrow"
                    href={item.wa}
                    target="_blank"
                    rel="noopener"
                  >
                    Inquire on WhatsApp →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <span className="kicker light">Not Sure Which Service?</span>
            <h2>Tell us your concern — we’ll guide you.</h2>
            <p>
              Our team will help you book the right appointment with the right
              specialist.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-light"
              href="https://wa.me/923327557014?text=Hello%2C%20I%20need%20guidance%20choosing%20a%20service."
              target="_blank"
              rel="noopener"
            >
              WhatsApp Us
            </a>
            <Link className="btn btn-ghost-light" to="/contact">
              Visit Us →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}