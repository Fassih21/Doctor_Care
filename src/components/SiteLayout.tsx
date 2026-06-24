import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

const WA_DEFAULT =
  "https://wa.me/923327557014?text=Hello%2C%20I%20found%20your%20website%20and%20would%20like%20more%20information.";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { location } = useRouterState();
  const path = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const revealRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [path]);

  useEffect(() => {
    const root = revealRoot.current;
    if (!root) return;
    const sel =
      ".feature, .service-card, .review, .stat-card, .svc, .info-card, .hero-card, .about-copy, .hero-copy";
    const items = Array.from(root.querySelectorAll<HTMLElement>(sel));
    items.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  const navLink = (to: string, label: string) => (
    <Link to={to} className={path === to ? "active" : ""}>
      {label}
    </Link>
  );

  return (
    <div ref={revealRoot}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📍 815-N Poonch Rd, Samanabad, Lahore</span>
          <span>🕐 Open Today · Closes 1:00 AM</span>
          <span>
            📞 <a href="tel:+923327557014">+92 332 7557014</a>
          </span>
        </div>
      </div>

      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="logo">
            <img src="/logo.jpeg" alt="Doctor Care Logo" className="logo-img" />
            <span className="logo-text">
              Doctor Care
              <small>Medical &amp; Skin Aesthetic Centre (We Care We Serve)</small>
            </span>
          </Link>
          <nav className={`nav${navOpen ? " open" : ""}`}>
            {navLink("/", "Home")}
            {navLink("/services", "Services")}
            {navLink("/reviews", "Reviews")}
            {navLink("/contact", "Location")}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="nav-cta"
            >
              Book Visit
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link to="/" className="logo logo-light">
              <img src="/logo.jpeg" alt="Doctor Care Logo" className="logo-img" />
              <span className="logo-text">
                Doctor Care
                <small>Medical &amp; Skin Aesthetic Centre (We Care We Serve)</small>
              </span>
            </Link>
            <p className="muted">
              A trusted medical, physiotherapy and skin aesthetic centre serving
              Samanabad, Lahore.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>
              815-N Poonch Rd,<br />
              Samanabad Town, Lahore 54000<br />
              Pakistan
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href="tel:+923327557014">+92 332 7557014</a>
              <br />
              <a href="https://wa.me/923327557014" target="_blank" rel="noopener">
                WhatsApp Chat
              </a>
              <br />
              <a href="https://facebook.com" target="_blank" rel="noopener">
                Facebook
              </a>
              <br />
              <a
                href="https://www.instagram.com/doctor_care_medical_centre?igsh=MTJuN2p6ejBvMHBlaw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.tiktok.com/@doctoraestheticcentre?_r=1&_t=ZS-97N3RAAanma"
                target="_blank"
                rel="noopener"
              >
                TikTok
              </a>
            </p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>
              Mon – Sun
              <br />
              Open · Closes 1:00 AM
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Doctor Care Medical &amp; Skin
            Aesthetic Centre (We Care We Serve). All rights reserved.
          </span>
          <span>Samanabad · Lahore · Pakistan</span>
        </div>
      </footer>

      <a
        className="wa-float"
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.27c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.71 1.43 5.33L5 27l5.83-1.71a10.66 10.66 0 0 0 5.19 1.32h.01c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.58-10.71-10.58zm0 19.55h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.46 1.01 1.03-3.37-.21-.34a8.83 8.83 0 1 1 7.47 4.12z"
          />
        </svg>
        <span>Chat</span>
      </a>
    </div>
  );
}