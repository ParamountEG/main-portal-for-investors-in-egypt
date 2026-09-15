import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 9,
        letterSpacing: "0.28em",
        textTransform: "uppercase" as const,
        color: "var(--accent)",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
      <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6, flexShrink: 0 }} />
      <Label>{children}</Label>
    </div>
  );
}

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* Page header */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          paddingTop: 128,
          paddingBottom: 64,
          paddingLeft: 24,
          paddingRight: 24,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel>Our Practice</SectionLabel>
          <div
            className="services-header-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "7fr 5fr",
              gap: 64,
              alignItems: "end",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              Everything required to establish and build a business in Egypt.
            </h1>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: 28,
                }}
              >
                Our practice covers the complete arc of a business establishment — from initial structure advisory through ongoing compliance and growth strategy. Each discipline is led by an adviser with direct operating experience in Egypt.
              </p>
              <Link
                to="/contact"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--bg-page)",
                  backgroundColor: "var(--accent)",
                  padding: "12px 24px",
                  display: "inline-block",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services detailed list */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          padding: "0 24px 96px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {services.map((svc, i) => {
            const isHovered = hovered === svc.slug;
            return (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                onMouseEnter={() => setHovered(svc.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 2fr 1fr 80px",
                  gap: "0 40px",
                  alignItems: "center",
                  padding: "40px 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                  backgroundColor: isHovered
                    ? "var(--accent-faint)"
                    : "transparent",
                }}
                className="service-row"
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: isHovered ? "var(--accent)" : "var(--accent-dim)",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                >
                  {svc.number}
                </div>

                {/* Title */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 8,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                      fontWeight: 500,
                      marginBottom: 6,
                    }}
                  >
                    {svc.category}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      color: "var(--text-primary)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                    }}
                  >
                    {svc.title}
                  </h2>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {svc.description}
                </p>

                {/* Capabilities preview */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {svc.capabilities.slice(0, 3).map((cap) => (
                    <div
                      key={cap}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        color: "var(--text-muted)",
                        fontWeight: 300,
                        lineHeight: 1.4,
                      }}
                    >
                      — {cap}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 18,
                    color: isHovered ? "var(--accent)" : "var(--border-accent)",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    textAlign: "right",
                  }}
                >
                  →
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Process overview strip */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "4fr 8fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <SectionLabel>Our Process</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginTop: -8,
                }}
              >
                Engagement begins with a single, confidential conversation.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
                borderLeft: "1px solid var(--border)",
              }}
              className="process-steps"
            >
              {[
                { step: "01", label: "Introductory Call", desc: "Confidential discussion of your goals and timeline." },
                { step: "02", label: "Scoping", desc: "We map the engagement and propose a structure." },
                { step: "03", label: "Execution", desc: "We manage every step, keeping you informed throughout." },
                { step: "04", label: "Ongoing", desc: "Compliance management and continued advisory." },
              ].map((s, i) => (
                <div
                  key={s.step}
                  style={{
                    padding: "0 24px",
                    borderRight: i < 3 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      color: "var(--accent-dim)",
                      fontWeight: 500,
                      marginBottom: 10,
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          borderTop: "1px solid var(--border)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--text-primary)",
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            Not sure where to begin?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--text-secondary)",
              fontWeight: 300,
              marginBottom: 32,
              lineHeight: 1.65,
            }}
          >
            Most engagements start with a single question. Our advisers will help you define the right starting point for your situation.
          </p>
          <Link
            to="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--bg-page)",
              backgroundColor: "var(--accent)",
              padding: "14px 32px",
              display: "inline-block",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
          >
            Open a Conversation
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .service-row {
            grid-template-columns: 60px 1fr !important;
            gap: 0 20px !important;
          }
          .service-row > :nth-child(3),
          .service-row > :nth-child(4),
          .service-row > :nth-child(5) {
            display: none;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .process-steps {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            border-left: none !important;
          }
          .process-steps > div {
            border-right: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
