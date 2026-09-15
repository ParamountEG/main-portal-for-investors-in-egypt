import { useParams, Link } from "react-router-dom";
import { services, getServiceBySlug } from "../data/services";

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

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--bg-page)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingTop: 64,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 40,
            color: "var(--text-primary)",
          }}
        >
          Service not found.
        </div>
        <Link
          to="/services"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  const related = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as typeof services;

  return (
    <>
      {/* Header */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          paddingTop: 128,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 48,
            }}
          >
            <Link
              to="/services"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Services
            </Link>
            <span
              style={{
                color: "var(--text-faint)",
                fontFamily: "var(--font-body)",
                fontSize: 10,
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              {service.category}
            </span>
          </div>

          <div
            className="detail-header-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "7fr 5fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {service.number}
                </span>
                <div style={{ height: 1, width: 20, backgroundColor: "rgba(160,120,64,0.4)" }} />
                <Label>{service.category}</Label>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  marginBottom: 20,
                }}
              >
                {service.title}
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  color: "var(--accent)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                {service.tagline}
              </p>
            </div>

            <div
              style={{
                paddingTop: 56,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: 32,
                }}
              >
                {service.detail}
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
                  padding: "13px 26px",
                  display: "inline-block",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--accent-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--accent)")
                }
              >
                Discuss This Service →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          padding: "80px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="capabilities-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "4fr 8fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6 }} />
                <Label>Scope of Work</Label>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                What this engagement covers.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px 40px",
              }}
              className="capabilities-list"
            >
              {service.capabilities.map((cap, i) => (
                <div
                  key={cap}
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 16,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: 14,
                      lineHeight: 1.4,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(232, 226, 212, 0.65)",
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Art direction placeholder: founder video */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          padding: "80px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6 }} />
            <Label>Adviser Perspective</Label>
          </div>

          <div
            style={{
              maxWidth: 760,
              aspectRatio: "16/9",
              border: "1px solid rgba(160, 120, 64, 0.18)",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgba(160, 120, 64, 0.02)",
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(160,120,64,0.03) 12px, rgba(160,120,64,0.03) 13px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  border: "1px solid var(--accent-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <polygon points="6,3 15,9 6,15" fill="rgba(160,120,64,0.6)" />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent-dim)",
                  fontWeight: 500,
                }}
              >
                Video Pending
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--text-faint)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Adviser commentary on {service.title} — production scheduled
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontFamily: "var(--font-body)",
                fontSize: 8,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent-dim)",
                border: "1px solid rgba(160, 120, 64, 0.18)",
                padding: "3px 6px",
              }}
            >
              Pending
            </div>
          </div>
        </div>
      </div>

      {/* Related services */}
      {related.length > 0 && (
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            padding: "64px 24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6 }} />
              <Label>Related Services</Label>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
                backgroundColor: "var(--border)",
              }}
              className="related-grid"
            >
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    textDecoration: "none",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--bg-raised)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--bg-surface)")
                  }
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent-dim)",
                      fontWeight: 500,
                    }}
                  >
                    {rel.number} · {rel.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "var(--text-primary)",
                      fontWeight: 400,
                    }}
                  >
                    {rel.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                      lineHeight: 1.55,
                    }}
                  >
                    {rel.tagline}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "var(--accent)",
                      marginTop: 4,
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          borderTop: "1px solid var(--border)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--text-primary)",
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            Ready to discuss {service.title.toLowerCase()}?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--text-secondary)",
              fontWeight: 300,
              marginBottom: 32,
              lineHeight: 1.65,
            }}
          >
            Speak with a senior adviser. Confidential, no obligation.
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
        @media (max-width: 900px) {
          .detail-header-grid,
          .capabilities-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .capabilities-list {
            grid-template-columns: 1fr !important;
          }
          .related-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
