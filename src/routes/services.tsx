import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Services | Doctor Care Medical & Skin Aesthetic Centre";
const DESC =
  "Trusted Diagnostic & Medical Centre| Lab Tests | General OPD| Child Specialist| Ultrasound| Accurate Results| Physiotherapist Doctor |Skin Aesthetic treatments| ECG| DM for Consultation|";

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
      "Routine check-ups, follow-ups and ongoing health support — unhurried appointments that listen first.",
    benefits: [
      "✓ Attentive doctors",
      "✓ Convenient late hours",
      "✓ Continuity of care",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20a%20General%20Consultation.",
    reverse: true,
  },
  {
    num: "05",
    title: "Emergency Care ",
    body:
      "Urgent medical attention when you need it most — our team is equipped to respond quickly and calmly to emergency situations.",
    benefits: [
      "✓ Rapid response team",
      "✓ Open late into the night",
      "✓ Stabilisation & onward referral if needed",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20have%20an%20Emergency%20and%20need%20immediate%20help.",
  },
  {
    num: "06",
    title: "First Aid & Suturing Services",
    body:
      "Prompt wound care, dressing and suturing performed under sterile conditions by experienced medical staff.",
    benefits: [
      "✓ Sterile, well-equipped treatment room",
      "✓ Fast, low-wait service",
      "✓ Careful aftercare guidance",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20need%20First%20Aid%2FSuturing%20services.",
    reverse: true,
  },
  {
    num: "07",
    title: "Injection & IV Drip Services",
    body:
      "Safe, hygienic administration of prescribed injections and intravenous drips by trained staff in a comfortable setting.",
    benefits: [
      "✓ Trained nursing staff",
      "✓ Single-use, sterile equipment",
      "✓ Comfortable seating during drips",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Injection%20%26%20Drip%20services.",
  },
  {
    num: "08",
    title: "Whitening Drips",
    body:
      "Glutathione-based whitening drip therapy to even tone and brighten skin, administered safely under medical supervision.",
    benefits: [
      "✓ Medically supervised sessions",
      "✓ Gradual, natural-looking brightening",
      "✓ Customised course plans",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Whitening%20Drips.",
    reverse: true,
  },
  {
    num: "09",
    title: "Slimming Drips",
    body:
      "IV-based slimming and metabolism-support drips designed to complement your weight management goals.",
    benefits: [
      "✓ Doctor-assessed before starting",
      "✓ Safe, monitored administration",
      "✓ Personalised drip plans",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Slimming%20Drips.",
  },
  {
    num: "10",
    title: "Carbon Laser Facial",
    body:
      "A advanced carbon laser treatment that deep-cleanses pores, reduces oiliness and leaves skin instantly smoother and brighter.",
    benefits: [
      "✓ Minimises pores & oil control",
      "✓ No downtime",
      "✓ Instant glow, visible after one session",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Carbon%20Laser%20Facial.",
    reverse: true,
  },
  {
    num: "11",
    title: "Laser Hair Removal",
    body:
      "Long-lasting, comfortable laser hair reduction for face and body, performed with modern equipment by trained staff.",
    benefits: [
      "✓ Suitable for most skin types",
      "✓ Noticeable reduction over a course",
      "✓ Quick sessions, minimal discomfort",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Laser%20Hair%20Removal.",
  },
  {
    num: "12",
    title: "Hydra Facial",
    body:
      "A deeply hydrating, multi-step facial that cleanses, exfoliates and infuses the skin for an immediate, healthy glow.",
    benefits: [
      "✓ Deep cleanse & hydration",
      "✓ Gentle, non-invasive",
      "✓ Glowing results same day",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Hydra%20Facial.",
    reverse: true,
  },
  {
    num: "13",
    title: "Chemical Peels",
    body:
      "Professional-grade chemical peels to treat acne, dullness, pigmentation and fine lines, tailored to your skin's needs.",
    benefits: [
      "✓ Targets pigmentation & texture",
      "✓ Strength tailored to your skin",
      "✓ Clear aftercare instructions",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Chemical%20Peels.",
  },
  {
    num: "14",
    title: "Pigmentation & Melasma Treatments",
    body:
      "Dedicated treatment plans to reduce stubborn pigmentation and melasma, combining clinical procedures with at-home guidance.",
    benefits: [
      "✓ Thorough skin assessment first",
      "✓ Combination treatment approach",
      "✓ Realistic timelines & follow-up",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Pigmentation%20%26%20Melasma%20Treatment.",
    reverse: true,
  },
  {
    num: "15",
    title: "Mesotherapy for Pigmentation & Melasma",
    body:
      "Targeted mesotherapy sessions that deliver active ingredients directly into the skin to fade pigmentation and melasma.",
    benefits: [
      "✓ Precision micro-injection technique",
      "✓ Suited for stubborn pigmentation",
      "✓ Performed by trained staff",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Mesotherapy.",
  },
  {
    num: "16",
    title: "PRP – Face & Scalp",
    body:
      "Platelet-Rich Plasma therapy using your own blood to rejuvenate skin or stimulate hair regrowth on the scalp.",
    benefits: [
      "✓ Natural, autologous treatment",
      "✓ Supports skin rejuvenation & hair growth",
      "✓ Minimal downtime",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Face%2FScalp.",
    reverse: true,
  },
  {
    num: "17",
    title: "Microneedling (Dr Pen)",
    body:
      "Advanced Dr Pen microneedling to improve skin texture, scarring and overall radiance by stimulating natural collagen production.",
    benefits: [
      "✓ Boosts collagen naturally",
      "✓ Improves texture & scarring",
      "✓ Customisable depth & intensity",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Microneedling%20(Dr%20Pen).",
  },
  {
    num: "18",
    title: "Subcision for Acne Scars",
    body:
      "A specialised procedure that releases tethered acne scars beneath the skin, improving texture and smoothness over time.",
    benefits: [
      "✓ Effective for rolling/atrophic scars",
      "✓ Often combined with other treatments",
      "✓ Performed with careful technique",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Subcision%20for%20Acne%20Scars.",
    reverse: true,
  },
  {
    num: "19",
    title: "Warts & Tattoo Removal",
    body:
      "Safe and effective removal of warts and unwanted tattoos using appropriate clinical techniques for your skin type.",
    benefits: [
      "✓ Assessed case-by-case",
      "✓ Minimised scarring approach",
      "✓ Clear aftercare support",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Warts%20%26%20Tattoo%20Removal.",
  },
  {
    num: "20",
    title: "Gynaecologist Doctor",
    body:
      "Confidential, compassionate consultations with a qualified gynaecologist for women's health concerns at every life stage.",
    benefits: [
      "✓ Private, comfortable consultation",
      "✓ Experienced female healthcare",
      "✓ Judgement-free environment",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Gynaecologist%20appointment.",
    reverse: true,
  },
  {
    num: "21",
    title: "Orthopaedic Doctor",
    body:
      "Specialist assessment and treatment for bone, joint and muscle conditions, often paired with our in-house physiotherapy.",
    benefits: [
      "✓ Joint, bone & muscle expertise",
      "✓ Works alongside physiotherapy team",
      "✓ Clear diagnosis & treatment plan",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20an%20Orthopaedic%20Doctor%20appointment.",
  },
  {
    num: "22",
    title: "ENT Doctor & Procedures",
    body:
      "Comprehensive ear, nose and throat consultations and procedures from an experienced ENT specialist.",
    benefits: [
      "✓ Full ENT consultation & procedures",
      "✓ Modern diagnostic approach",
      "✓ Friendly, thorough care",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20an%20ENT%20Doctor%20appointment.",
    reverse: true,
  },
  {
    num: "23",
    title: "Child Specialist Doctor (Paediatrician)",
    body:
      "Gentle, attentive care for infants and children from a qualified paediatrician, in a calm and welcoming setting.",
    benefits: [
      "✓ Child-friendly clinic environment",
      "✓ Routine & urgent paediatric care",
      "✓ Patient, reassuring approach",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Child%20Specialist%20(Paediatrician)%20appointment.",
  },
  {
    num: "24",
    title: "Ultrasound",
    body:
      "On-site ultrasound imaging with prompt, accurate reporting to support fast and informed diagnosis.",
    benefits: [
      "✓ Modern ultrasound equipment",
      "✓ Quick turnaround on reports",
      "✓ Comfortable, private setting",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20an%20Ultrasound.",
    reverse: true,
  },
  {
    num: "25",
    title: "ECG",
    body:
      "Fast, reliable electrocardiogram testing to assess heart health, with results reviewed promptly by our medical team.",
    benefits: [
      "✓ Quick, painless test",
      "✓ Prompt result review",
      "✓ Available alongside OPD visits",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20an%20ECG.",
  },
  {
    num: "26",
    title: "All Lab Tests (CDC Laboratory)",
    body:
      "A full range of laboratory tests processed through CDC Laboratory, with accurate results and easy-to-read reporting.",
    benefits: [
      "✓ Wide range of tests available",
      "✓ Trusted CDC Laboratory partnership",
      "✓ Clear, timely reports",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20Lab%20Tests%20(CDC%20Laboratory).",
    reverse: true,
  },
  {
    num: "27",
    title: "Pharmacy (100% Original Medicines)",
    body:
      "An on-site pharmacy stocked with 100% original medicines, so you can fill your prescription right after your appointment.",
    benefits: [
      "✓ 100% genuine, original medicines",
      "✓ Convenient on-site pickup",
      "✓ Helpful pharmacy staff",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20the%20Pharmacy.",
  },
  {
    num: "28",
    title: "Home Visit Service",
    body:
      "Can't make it to the clinic? Our doctors and staff can visit you at home for consultations, injections, drips and other selected services.",
    benefits: [
      "✓ Doctor & nursing visits at your doorstep",
      "✓ Ideal for elderly or mobility-limited patients",
      "✓ Available across Lahore on request",
    ],
    wa: "https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Home%20Visit%20service.",
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
            Trusted Diagnostic & Medical Centre| Lab Tests | General OPD| Child Specialist| Ultrasound| Accurate Results| Physiotherapist Doctor |Skin Aesthetic treatments| ECG| DM for Consultation|
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