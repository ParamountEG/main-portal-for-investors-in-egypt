import { Link } from "react-router-dom";
import Logo from "./Logo";

const serviceLinks = [
  { href: "/services/entity-formation", label: "Entity Formation" },
  { href: "/services/investment-advisory", label: "Investment Advisory" },
  { href: "/services/regulatory-navigation", label: "Regulatory Navigation" },
  { href: "/services/banking-setup", label: "Banking & Finance Setup" },
  { href: "/services/tax-optimisation", label: "Tax Optimisation" },
  { href: "/services/market-entry", label: "Market Entry Strategy" },
];

const companyLinks = [
  { href: "/about", label: "About Paramount" },
  { href: "/about#approach", label: "Our Approach" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/disclosures", label: "Regulatory Disclosures" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-page)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 24px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px 48px",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div style={{ gridColumn: "span 1" }}>
          {/* Logo */}
          <div style={{ marginBottom: 24 }}>
            <Logo pyramidHeight={44} layout="vertical" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Investment advisory and business establishment for international investors entering Egypt.
          </p>

          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
            }}
          >
            Cairo, Egypt
          </div>
        </div>

        {/* Services */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Services
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Company
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Contact
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--text-secondary)",
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            <div>enquiries@paramountadvisers.com</div>
            <div style={{ marginTop: 8 }}>
              New Administrative Capital<br />
              Cairo, Arab Republic of Egypt
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 12,
              marginTop: 24,
              fontWeight: 500,
            }}
          >
            Legal
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontWeight: 300,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer + copyright */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "24px 24px 32px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            lineHeight: 1.6,
            color: "var(--text-faint)",
            maxWidth: 800,
            fontWeight: 300,
          }}
        >
          The information on this website is for general informational purposes only and does not constitute investment advice, legal advice, or a solicitation to invest. Past performance is not indicative of future results. Paramount Advisers is registered in the Arab Republic of Egypt. Investment activities are subject to applicable local and international regulations.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--text-faint)",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} Paramount Advisers. All rights reserved.
          </span>

          {/* Language switcher in footer */}
          <div
            style={{
              display: "flex",
              gap: 12,
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>EN</span>
            <span style={{ color: "var(--text-faint)" }}>AR</span>
            <span style={{ color: "var(--text-faint)" }}>RU</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
