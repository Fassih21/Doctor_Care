import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Services | Doctor Care Medical & Skin Aesthetic Centre";
const DESC =
  "Explore medical diagnostics, physiotherapy and skin aesthetic services at Doctor Care, Samanabad, Lahore.";

export const Route = createFileRoute("/services")({
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
    wa: "https://wa.me/923027557004?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Diagnostic%20Imaging.",
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
    wa: "https://wa.me/923027557004?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Skin%20Aesthetic%20Treatments.",
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
    wa: "https://wa.me/923027557004?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Physiotherapy%20session.",
  },
  {
    num: "04",
    title: "General Medical Consultations",
    body:
      "Routine check-ups, follow-ups and ongoing health support — unhurried appointments that listen first.",
    benefits: [
      "✓ Attentive doctors",
      "✓ Convenient late hours",
      "✓ Continuity of care",
    ],
    wa: "https://wa.me/923027557004?text=Hello%2C%20I%20would%20like%20a%20General%20Consultation.",
    reverse: true,
  },
];

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
              href="https://wa.me/923027557004?text=Hello%2C%20I%20need%20guidance%20choosing%20a%20service."
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
