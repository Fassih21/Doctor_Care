import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Doctor Care Medical & Skin Aesthetic Centre | Samanabad, Lahore";
const DESC =
  "Trusted medical diagnostics, physiotherapy and skin aesthetic treatments in Samanabad, Lahore. 5.0★ rated by 73 patients on Google.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">★ 5.0 · 73 verified reviews on Google</span>
            <h1>
              Compassionate Care for <span className="grad">Your Health &amp; Skin</span>.
            </h1>
            <p className="lead">
              A trusted medical, physiotherapy and skin aesthetic centre in the heart
              of Samanabad, Lahore — combining experienced doctors with a calm, modern
              clinic environment.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/923327557014?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20more%20information."
                target="_blank"
                rel="noopener"
              >
                Book on WhatsApp
              </a>
              <Link className="btn btn-ghost" to="/services">
                Explore Services →
              </Link>
            </div>
            <ul className="hero-points">
              <li>✓ Friendly &amp; cooperative staff</li>
              <li>✓ Clean, welcoming environment</li>
              <li>✓ Experienced physiotherapists &amp; dermatology care</li>
            </ul>
          </div>
          <aside className="hero-card">
            <div className="hero-card-head">
              <h3>Quick Appointment</h3>
              <span className="badge-open">● Open Now</span>
            </div>
            <ul className="quick-info">
              <li>
                <strong>Today</strong>
                <span>Closes 1:00 AM</span>
              </li>
              <li>
                <strong>Call</strong>
                <span>
                  <a href="tel:+923327557014">+92 332 7557014</a>
                </span>
              </li>
              <li>
                <strong>Location</strong>
                <span>Samanabad, Lahore</span>
              </li>
              <li>
                <strong>Rating</strong>
                <span>5.0 ★★★★★ (73)</span>
              </li>
            </ul>
            <a
              className="btn btn-primary btn-block"
              href="https://wa.me/923327557014?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener"
            >
              Message on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <section className="section about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="stat-card s1">
              <b>5.0★</b>
              <span>Google Rating</span>
            </div>
            <div className="stat-card s2">
              <b>73+</b>
              <span>Happy Patients</span>
            </div>
            <div className="stat-card s3">
              <b>10+</b>
              <span>Specialised Services</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="kicker">About the Centre</span>
            <h2>Modern medicine, gentle hands, real results.</h2>
            <p>
              Doctor Care Medical &amp; Skin Aesthetic Centre brings together qualified
              physicians, physiotherapists and skin specialists under one calm,
              hygienic roof. From diagnostic imaging to advanced skin care and
              rehabilitation, every patient receives unhurried attention and a
              treatment plan built around them.
            </p>
            <p>
              Our patients consistently describe us as{" "}
              <em>“professional, attentive and welcoming”</em> — and that is exactly
              the standard we work to every single day.
            </p>
            <Link className="link-arrow" to="/services">
              See what we treat →
            </Link>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">Why Patients Choose Us</span>
            <h2>Care you can feel from the first visit.</h2>
          </div>
          <div className="why-grid">
            {[
              ["🩺", "Experienced Doctors", "Qualified physicians and physiotherapists led by professionals like Dr. Mahnoor Butt, trusted for measurable improvement."],
              ["✨", "Advanced Skin Care", "Modern aesthetic treatments performed in a sterile, comfortable environment with honest consultations."],
              ["🧘", "Physiotherapy", "Targeted recovery plans for neck, shoulder, ankle and joint pain — patients report real relief, often within sessions."],
              ["🤝", "Cooperative Staff", "Friendly, attentive team that listens first and treats with respect — every visit."],
              ["🧼", "Clean Environment", "Spotless, welcoming clinic — one of the most-mentioned reasons patients return."],
              ["📍", "Central Lahore", "Easy to reach in Samanabad Town with friendly opening hours late into the night."],
            ].map(([icon, title, body]) => (
              <article className="feature" key={title}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Featured Services</span>
              <h2>Treatments designed around you.</h2>
            </div>
            <Link className="btn btn-outline" to="/services">
              View all services
            </Link>
          </div>
          <div className="services-grid">
            {[
              ["01", "Medical Diagnostic Imaging", "Accurate diagnostics with prompt, easy-to-understand reporting."],
              ["02", "Skin Aesthetic Treatments", "Facials, skin rejuvenation and advanced dermatology procedures."],
              ["03", "Physiotherapy & Rehab", "Neck, shoulder, ankle and sports injury rehabilitation."],
              ["04", "General Medical Care", "Routine consultations and ongoing health support."],
            ].map(([num, title, body]) => (
              <Link key={num} to="/services" className="service-card">
                <span className="service-num">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">In Patients’ Words</span>
            <h2>Rated 5.0 ★ on Google by 73 patients.</h2>
          </div>
          <div className="reviews">
            {[
              ["Dodo Chanel", "Excellent experience. The whole staff was friendly, cooperative and professional. I received physiotherapy treatment for my neck and shoulder pain from Dr. Mahnoor Butt — really happy with the results."],
              ["Zaryab Mustafa", "Wonderful experience at Doctor Care. The staff is incredibly cooperative, professional and attentive. The atmosphere is clean and welcoming. Highly recommended!"],
              ["Aneesa Javaid", "Very good experience with Physiotherapist Dr. Mahnoor Butt for my ankle sprain. Professional, kind and helpful. My pain improved a lot after the sessions. Highly recommended."],
            ].map(([name, quote]) => (
              <article className="review" key={name}>
                <div className="stars">★★★★★</div>
                <p>“{quote}”</p>
                <footer>
                  <strong>{name}</strong>
                  <span>Google Review</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <span className="kicker light">Ready When You Are</span>
            <h2>Book your visit in under a minute.</h2>
            <p>
              Chat with us directly on WhatsApp and our team will help you schedule
              the right appointment.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-light"
              href="https://wa.me/923327557014?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20more%20information."
              target="_blank"
              rel="noopener"
            >
              WhatsApp Us
            </a>
            <a className="btn btn-ghost-light" href="tel:+923327557014">
              Call +92 332 7557014
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}