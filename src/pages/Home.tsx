import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

// ─── Shared primitives ───────────────────────────────────────────

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 40,
      }}
    >
      <div
        style={{
          width: 24,
          height: 1,
          backgroundColor: "var(--accent)",
          opacity: 0.6,
          flexShrink: 0,
        }}
      />
      <Label>{children}</Label>
    </div>
  );
}

function ArtDirectionPlaceholder({
  label,
  note,
  aspectRatio = "16/9",
  className = "",
}: {
  label: string;
  note: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        aspectRatio,
        border: "1px solid var(--accent-dim)",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(160,120,64,0.04) 12px, rgba(160,120,64,0.04) 13px)",
        backgroundColor: "var(--accent-faint)",
      }}
    >
      {/* Corner marker */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          fontFamily: "var(--font-body)",
          fontSize: 8,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--accent-dim)",
          fontWeight: 500,
          border: "1px solid var(--accent-dim)",
          padding: "3px 6px",
        }}
      >
        PENDING
      </div>

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--accent-dim)",
            fontWeight: 500,
            marginBottom: 6,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--text-muted)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {note}
        </div>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--bg-page)",
        backgroundImage:
          "radial-gradient(ellipse at 25% 60%, rgba(160,120,64,0.05) 0%, transparent 55%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: 64,
        position: "relative",
      }}
    >
      {/* Main content */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 48,
          paddingBottom: 48,
        }}
      >
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "center" }}>
          {/* Left: text */}
          <div>
            {/* Location label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 36,
              }}
            >
              <div style={{ width: 20, height: 1, backgroundColor: "var(--accent)" }} />
              <Label>Cairo, Egypt · Business Gateway</Label>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 6.5vw, 86px)",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                fontWeight: 400,
                marginBottom: 28,
              }}
            >
              Your Business
              <br />
              <em
                style={{
                  color: "var(--accent)",
                  fontStyle: "italic",
                }}
              >
                Gateway
              </em>
              <br />
              to Egypt.
            </h1>

            {/* Positioning line */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                fontWeight: 300,
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              Investment advisory and business establishment for international investors. International Perspective. Local Execution.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/services"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--bg-page)",
                  backgroundColor: "var(--accent)",
                  padding: "14px 28px",
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
                Explore Services
              </Link>
              <Link
                to="/contact"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  border: "1px solid var(--text-faint)",
                  padding: "14px 28px",
                  display: "inline-block",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--text-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--text-faint)";
                }}
              >
                Speak with an Adviser →
              </Link>
            </div>
          </div>

          {/* Right: art direction placeholder */}
          <div className="hero-placeholder-wrap">
            <ArtDirectionPlaceholder
              label="Hero Visual"
              note={"Cairo financial district — dusk\nAerial wide shot · ultra-cinematic"}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 28,
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              fontWeight: 400,
            }}
          >
            {["GAFI Registered", "Investment Advisory", "Business Establishment"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
            }}
          >
            Scroll to explore
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-placeholder-wrap {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Announcement Band ─────────────────────────────────────────────

function AnnouncementBand() {
  return (
    <div
      style={{
        backgroundColor: "var(--accent-faint)",
        borderTop: "1px solid var(--accent-dim)",
        borderBottom: "1px solid rgba(160, 120, 64, 0.12)",
        padding: "14px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            letterSpacing: "0.05em",
            color: "rgba(232, 226, 212, 0.7)",
            fontWeight: 300,
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: 9,
              fontWeight: 600,
              marginRight: 12,
            }}
          >
            Investor Briefing
          </span>
          Cairo, Q4 2026 — New Administrative Capital opportunities. Seats limited.
        </div>
        <Link
          to="/contact"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontWeight: 500,
            whiteSpace: "nowrap",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
        >
          Register →
        </Link>
      </div>
    </div>
  );
}

// ─── Journey Band ─────────────────────────────────────────────────

const journeySteps = [
  {
    number: "01",
    name: "Invest",
    description:
      "Identify the opportunity and define your entry thesis for the Egyptian market.",
  },
  {
    number: "02",
    name: "Establish",
    description:
      "Register your entity, obtain licences, and build the legal foundation.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Deploy capital, hire staff, and construct the operational infrastructure.",
  },
  {
    number: "04",
    name: "Launch",
    description:
      "Begin trading, activate market relationships, and move to first revenue.",
  },
  {
    number: "05",
    name: "Protect",
    description:
      "Maintain compliance, manage regulatory obligations, and guard your position.",
  },
  {
    number: "06",
    name: "Grow",
    description:
      "Expand market share, optimise structure, and build long-term equity.",
  },
];

function JourneySection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionLabel>The Paramount Path</SectionLabel>

        <div
          className="journey-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 0,
          }}
        >
          {journeySteps.map((step, i) => (
            <div
              key={step.number}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                padding: "28px 24px 32px",
                borderLeft:
                  i > 0
                    ? "1px solid var(--border)"
                    : "none",
                cursor: "default",
                transition: "background-color 0.25s ease",
                backgroundColor:
                  active === i
                    ? "var(--accent-faint)"
                    : "transparent",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: active === i ? "var(--accent)" : "var(--accent-dim)",
                  marginBottom: 14,
                  transition: "color 0.25s ease",
                  fontWeight: 500,
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                  lineHeight: 1.1,
                }}
              >
                {step.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  transition: "color 0.25s ease",
                  ...(active === i ? { color: "rgba(232, 226, 212, 0.65)" } : {}),
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .journey-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .journey-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Investment Finder ────────────────────────────────────────────

const sectors = ["All", "Real Estate", "Manufacturing", "Technology", "Agriculture", "Energy", "Tourism"];
const scales = ["Any Size", "<$1M", "$1M – $5M", "$5M – $20M", ">$20M"];
const structures = ["Any Structure", "Joint Venture", "Wholly Owned", "Free Zone", "Public–Private"];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: active ? 500 : 400,
        color: active ? "var(--bg-page)" : "var(--text-secondary)",
        backgroundColor: active ? "var(--accent)" : "transparent",
        border: active
          ? "1px solid #A07840"
          : "1px solid var(--border-mid)",
        padding: "7px 14px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = "var(--text-muted)";
          e.currentTarget.style.color = "rgba(232, 226, 212, 0.85)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = "var(--border-mid)";
          e.currentTarget.style.color = "var(--text-secondary)";
        }
      }}
    >
      {label}
    </button>
  );
}

function InvestmentFinderSection() {
  const [sector, setSector] = useState("All");
  const [scale, setScale] = useState("Any Size");
  const [structure, setStructure] = useState("Any Structure");
  const [interested, setInterested] = useState(false);

  return (
    <section style={{ padding: "96px 24px", backgroundColor: "var(--bg-page)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <SectionLabel>Investment Opportunities</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.15,
                marginTop: -8,
              }}
            >
              Qualified Opportunities
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--text-secondary)",
              maxWidth: 320,
              lineHeight: 1.6,
              fontWeight: 300,
              textAlign: "right",
            }}
            className="hide-on-mobile"
          >
            Opportunities are introduced on a rolling basis as they are qualified and approved for disclosure.
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 0",
            marginBottom: 40,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
            {/* Sector */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Sector
              </span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {sectors.map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={sector === s}
                    onClick={() => setSector(s)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", marginTop: 14 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Scale
              </span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {scales.map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={scale === s}
                    onClick={() => setScale(s)}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Structure
              </span>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {structures.map((s) => (
                  <FilterChip
                    key={s}
                    label={s}
                    active={structure === s}
                    onClick={() => setStructure(s)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results area */}
        <div
          className="finder-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 4fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          {/* Single opportunity card */}
          <div
            style={{
              border: "1px solid var(--border-mid)",
              borderTop: "2px solid #A07840",
              backgroundColor: "var(--bg-surface)",
              padding: "32px",
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  Real Estate · Joint Venture
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "var(--text-primary)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Commercial & Mixed-Use Development
                </h3>
              </div>
              <div
                style={{
                  border: "1px solid var(--accent-dim)",
                  padding: "4px 10px",
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(160, 120, 64, 0.8)",
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              >
                Available
              </div>
            </div>

            {/* Specs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 32px",
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {[
                ["Location", "New Administrative Capital, Cairo"],
                ["Investment Range", "USD 5M – 20M"],
                ["Structure", "Joint Venture / Direct"],
                ["Timeline to Close", "Indicatively Q2 2026"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "rgba(232, 226, 212, 0.75)",
                      fontWeight: 300,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder note */}
            <div
              style={{
                border: "1px dashed var(--accent-dim)",
                backgroundColor: "var(--accent-faint)",
                padding: "14px 16px",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Full opportunity brief — including financial projections, site details, and co-investor terms — available upon execution of a mutual NDA and confirmation of investor credentials.
              </p>
            </div>

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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Request Brief
            </Link>
          </div>

          {/* Right panel: adviser CTA */}
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "32px",
              backgroundColor: "var(--bg-surface)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                border: "1px solid var(--accent-dim)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="var(--accent)" strokeWidth="1" />
              </svg>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                color: "var(--text-primary)",
                fontWeight: 400,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              New opportunities are added regularly.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: 28,
              }}
            >
              Each opportunity is qualified before disclosure. Register your investment criteria and an adviser will contact you when a relevant opportunity becomes available.
            </p>

            {/* Quick register form */}
            {!interested ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid var(--border-mid)",
                    padding: "11px 14px",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-primary)",
                    outline: "none",
                    fontWeight: 300,
                    width: "100%",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-dim)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-mid)")
                  }
                />
                <button
                  onClick={() => setInterested(true)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    border: "1px solid var(--text-faint)",
                    padding: "12px 20px",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    width: "100%",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--border)";
                    e.currentTarget.style.borderColor = "var(--text-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "var(--text-faint)";
                  }}
                >
                  Register Interest
                </button>
              </div>
            ) : (
              <div
                style={{
                  border: "1px solid var(--accent-dim)",
                  backgroundColor: "var(--accent-faint)",
                  padding: "16px",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Thank you. An adviser will be in touch.
              </div>
            )}

            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-body)",
                fontSize: 10,
                color: "var(--text-faint)",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Your details are held in strict confidence and not shared with third parties.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .finder-grid {
          grid-template-columns: 5fr 4fr;
        }
        @media (max-width: 860px) {
          .finder-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────

function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        padding: "96px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <SectionLabel>How We Work</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.15,
                marginTop: -8,
              }}
            >
              Six Core Disciplines
            </h2>
          </div>
          <Link
            to="/services"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
          >
            All Services →
          </Link>
        </div>

        {/* Asymmetric grid: row 1 is 5+3+4, row 2 is 4+4+4 */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 1,
            backgroundColor: "var(--border)",
          }}
        >
          {services.map((svc, i) => {
            const colSpanMap = [5, 3, 4, 4, 4, 4];
            const isHovered = hovered === svc.slug;

            return (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                onMouseEnter={() => setHovered(svc.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  gridColumn: `span ${colSpanMap[i]}`,
                  backgroundColor: isHovered ? "var(--bg-raised)" : "var(--bg-surface)",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 220,
                  transition: "background-color 0.25s ease",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: isHovered ? "var(--accent)" : "var(--accent-dim)",
                    fontWeight: 500,
                    marginBottom: 16,
                    transition: "color 0.25s ease",
                  }}
                >
                  {svc.number}
                </div>

                {/* Category tag */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 8,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {svc.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: colSpanMap[i] >= 5 ? 26 : 20,
                    color: "var(--text-primary)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: 10,
                    flex: 1,
                  }}
                >
                  {svc.title}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    fontWeight: 300,
                    marginBottom: 20,
                    transition: "color 0.25s ease",
                    ...(isHovered ? { color: "var(--text-secondary)" } : {}),
                  }}
                >
                  {svc.tagline}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: isHovered ? "var(--accent)" : "rgba(160, 120, 64, 0.35)",
                    transition: "color 0.25s ease, transform 0.25s ease",
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid > a {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 560px) {
          .services-grid > a {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Why Paramount ────────────────────────────────────────────────

const pillars = [
  {
    number: "I",
    heading: "One Primary Adviser",
    body: "No hand-offs. A single senior adviser manages your matter from first engagement through ongoing operations. You always know who is responsible.",
  },
  {
    number: "II",
    heading: "Cairo-Based Execution",
    body: "Every engagement is executed by advisers physically present in Egypt — not managed remotely or delegated to local correspondents.",
  },
  {
    number: "III",
    heading: "15+ Entry Structures",
    body: "We maintain active working knowledge of every legal entry pathway available to foreign investors in Egypt, and the trade-offs between them.",
  },
];

function WhySection() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-page)",
        padding: "96px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 8fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>Our Distinction</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 38px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginTop: -8,
              }}
            >
              Why international investors choose Paramount.
            </h2>
          </div>

          <div
            className="pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              borderLeft: "1px solid var(--border)",
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  padding: "0 32px 0 32px",
                  borderRight: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--border-accent)",
                    marginBottom: 20,
                    lineHeight: 1,
                    fontStyle: "italic",
                  }}
                >
                  {pillar.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    color: "var(--text-primary)",
                    fontWeight: 400,
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .pillars-grid {
            border-left: none !important;
          }
        }
        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .pillars-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
            padding: 0 0 32px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── CTA Band ─────────────────────────────────────────────────────

function CTABand() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        padding: "96px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            backgroundColor: "var(--accent-dim)",
            marginBottom: 40,
          }}
        />

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 56px)",
            color: "var(--text-primary)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 600,
          }}
        >
          Begin your Egyptian business journey.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-secondary)",
            fontWeight: 300,
            marginBottom: 40,
            maxWidth: 440,
            lineHeight: 1.65,
          }}
        >
          A no-obligation introductory call with a senior adviser. Confidential, direct, substantive.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            to="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--bg-page)",
              backgroundColor: "var(--accent)",
              padding: "15px 32px",
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
            Speak with an Adviser
          </Link>
          <Link
            to="/services"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "rgba(232, 226, 212, 0.7)",
              border: "1px solid var(--border-mid)",
              padding: "15px 32px",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--text-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(232, 226, 212, 0.7)";
              e.currentTarget.style.borderColor = "var(--border-mid)";
            }}
          >
            Explore Services
          </Link>
        </div>

        <div
          style={{
            width: 1,
            height: 48,
            backgroundColor: "var(--accent-dim)",
            marginTop: 56,
          }}
        />
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnnouncementBand />
      <JourneySection />
      <InvestmentFinderSection />
      <ServicesSection />
      <WhySection />
      <CTABand />
    </>
  );
}
