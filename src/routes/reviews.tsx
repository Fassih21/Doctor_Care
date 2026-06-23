import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

const TITLE = "Patient Reviews | Doctor Care Medical & Skin Aesthetic Centre";
const DESC =
  "Read verified Google reviews from our patients. Doctor Care Medical & Skin Aesthetic Centre is rated 5.0★ by 73 patients in Samanabad, Lahore.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      {/* ── Page hero ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">★ 5.0 · 73 verified reviews on Google</span>
          <h1>
            What our patients say about <span className="grad">Doctor Care</span>.
          </h1>
          <p className="lead">
            Honest feedback from real patients who visited our clinic in Samanabad,
            Lahore. We let our work speak for itself.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ borderBottom: "1px solid var(--line)", padding: "2rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                5.0
              </div>
              <div style={{ color: "var(--gold)", fontSize: "1.1rem", margin: "4px 0" }}>
                ★★★★★
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Average rating
              </div>
            </div>

            <div style={{ width: 1, height: 56, background: "var(--line)" }} />

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                73
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>
                Patient reviews
              </div>
            </div>

            <div style={{ width: 1, height: 56, background: "var(--line)" }} />

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                Google
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>
                Verified platform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Elfsight widget ── */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="kicker">Patient feedback</span>
            <h2>Read our latest reviews</h2>
          </div>

          {/* Elfsight Google Reviews widget */}
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-54d944eb-e06b-41ae-be5f-7f93e758af6a"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section
        style={{
          background: "var(--teal-900)",
          padding: "3.5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="kicker light">Ready to visit?</span>
          <h2 style={{ color: "#fff", marginBottom: "0.5rem" }}>
            Experience the care yourself.
          </h2>
          <p style={{ color: "var(--teal-300)", marginBottom: "1.8rem", maxWidth: "48ch", margin: "0 auto 1.8rem" }}>
            Book an appointment on WhatsApp and join our growing family of happy
            patients.
          </p>
          <a
            className="btn btn-light"
            href="https://wa.me/923327557014?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}