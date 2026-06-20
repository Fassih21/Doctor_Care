import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Location & Contact | Doctor Care Medical & Skin Aesthetic Centre";
const DESC =
  "Visit Doctor Care Medical & Skin Aesthetic Centre at 815-N Poonch Rd, Samanabad, Lahore. Call +92 302 7557004 or message us on WhatsApp.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ContactPage,
});

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Visit Us</span>
          <h1>Find us in the heart of Samanabad, Lahore.</h1>
          <p className="lead">
            Centrally located, easy to reach, and open late — we make it simple to
            get the care you need.
          </p>
        </div>
      </section>

      <section className="section contact-grid-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>
                815-N Poonch Rd,
                <br />
                Samanabad Town,
                <br />
                Lahore 54000, Pakistan
              </p>
              <small>Plus Code: G7MX+MJ Lahore</small>
            </div>
            <div className="info-card">
              <h3>📞 Phone &amp; WhatsApp</h3>
              <p>
                <a href="tel:+923027557004">+92 302 7557004</a>
              </p>
              <a
                className="btn btn-primary btn-sm"
                href="https://wa.me/923027557004?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20more%20information."
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="info-card">
              <h3>🕐 Business Hours</h3>
              <ul className="hours">
                {DAYS.map((d) => (
                  <li key={d}>
                    <span>{d}</span>
                    <b>10:00 AM – 1:00 AM</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-wrap">
              <iframe
                title="Doctor Care Medical & Skin Aesthetic Centre map"
                src="https://www.google.com/maps?q=815-N+Poonch+Rd,+Samanabad+Town,+Lahore,+54000,+Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="directions">
              <h3>🚗 Getting Here</h3>
              <p>
                We are located on Poonch Road in Samanabad Town — a central,
                well-known Lahore neighbourhood. Look for the Doctor Care signage
                near 815-N. Street parking is available nearby.
              </p>
              <a
                className="btn btn-outline"
                href="https://www.google.com/maps/dir/?api=1&destination=815-N+Poonch+Rd,+Samanabad+Town,+Lahore,+Pakistan"
                target="_blank"
                rel="noopener"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <span className="kicker light">Have a Question?</span>
            <h2>We’re one message away.</h2>
            <p>
              Reach our team on WhatsApp for appointments, pricing or general
              enquiries.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-light"
              href="https://wa.me/923027557004?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20more%20information."
              target="_blank"
              rel="noopener"
            >
              WhatsApp Us
            </a>
            <a className="btn btn-ghost-light" href="tel:+923027557004">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
