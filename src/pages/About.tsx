import { Link } from "react-router-dom";

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
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
      <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6, flexShrink: 0 }} />
      <Label>{children}</Label>
    </div>
  );
}

function ArtDirectionFrame({
  label,
  note,
  style: extraStyle = {},
}: {
  label: string;
  note: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(160, 120, 64, 0.18)",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(160,120,64,0.035) 12px, rgba(160,120,64,0.035) 13px)",
        backgroundColor: "rgba(160, 120, 64, 0.02)",
        ...extraStyle,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontFamily: "var(--font-body)",
          fontSize: 8,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(160, 120, 64, 0.38)",
          border: "1px solid rgba(160, 120, 64, 0.16)",
          padding: "3px 6px",
        }}
      >
        Pending
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 18px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 8,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-dim)",
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "var(--text-faint)",
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.4,
          }}
        >
          {note}
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    role: "Managing Partner",
    note: "Portrait: formal, neutral background · Cairo office",
  },
  {
    role: "Head of Regulatory Affairs",
    note: "Portrait: formal, neutral background · Cairo office",
  },
  {
    role: "Investment Advisory Lead",
    note: "Portrait: formal, neutral background · Cairo office",
  },
];

export default function About() {
  return (
    <>
      {/* Mission header */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          paddingTop: 128,
          paddingBottom: 0,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel>Our Mission</SectionLabel>

          {/* Full-width statement */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 60px)",
              color: "var(--text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: 900,
              marginBottom: 64,
            }}
          >
            We exist to give international investors a credible, reliable path into the Egyptian market.
          </h1>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "var(--border)", marginBottom: 64 }} />

          {/* Two-column positioning statement */}
          <div
            className="positioning-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: 80,
              alignItems: "start",
              paddingBottom: 80,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  color: "rgba(232, 226, 212, 0.75)",
                  lineHeight: 1.45,
                  fontStyle: "italic",
                }}
              >
                "International Perspective. Local Execution."
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: 20,
                }}
              >
                Paramount was founded on a simple observation: international investors approaching Egypt routinely encounter the same problems. An advisory market that speaks in generalities. Opaque fee structures. Advisers who understand either international capital markets or Egyptian regulation — rarely both.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                We built Paramount to be the practice we wanted to exist: senior-led, Cairo-based, structured for execution — not for advice that stops at the door.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach section */}
      <div
        id="approach"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel>Our Approach</SectionLabel>

          <div
            className="approach-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 1,
              backgroundColor: "var(--border)",
            }}
          >
            {[
              {
                number: "01",
                heading: "Execution over advice.",
                body: "We do not produce reports. We execute. Our measure of success is a registered entity, an open bank account, an approved licence — not a document delivered.",
              },
              {
                number: "02",
                heading: "Continuity of relationship.",
                body: "The adviser you meet is the adviser who runs your matter. No hand-offs to junior staff. No account managers as intermediaries. One person, end to end.",
              },
              {
                number: "03",
                heading: "Fees aligned with outcomes.",
                body: "Our fee structures are transparent and — where possible — linked to measurable milestones. We have no interest in running long, inconclusive engagements.",
              },
              {
                number: "04",
                heading: "Disclosure before engagement.",
                body: "If we have a conflict or a limitation on a particular matter, we disclose it before you commit. We would rather lose a mandate than give compromised advice.",
              },
              {
                number: "05",
                heading: "Discretion as default.",
                body: "Client matters are held in strict confidence. We do not discuss clients publicly, accept testimonials, or use client relationships as references without explicit permission.",
              },
              {
                number: "06",
                heading: "Egypt as a long-term commitment.",
                body: "Our advisers live and work in Cairo. Egypt is not a market we cover — it is where we operate. That permanence is the foundation of our relationships and our knowledge.",
              },
            ].map((item, i) => (
              <div
                key={item.number}
                style={{
                  backgroundColor: "var(--bg-surface)",
                  padding: "36px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "rgba(160, 120, 64, 0.45)",
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  {item.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    color: "var(--text-primary)",
                    fontWeight: 400,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {item.heading}
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
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team section */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          borderTop: "1px solid var(--border)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="team-header"
            style={{
              display: "grid",
              gridTemplateColumns: "4fr 8fr",
              gap: 80,
              marginBottom: 56,
              alignItems: "end",
            }}
          >
            <div>
              <SectionLabel>Our Team</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  marginTop: -8,
                }}
              >
                Senior advisers only.
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Adviser profiles and biographies will be published following the formal launch of our practice. Each adviser is recruited selectively — we will not introduce a team member until we are confident in their capability and commitment to our standards.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              backgroundColor: "var(--border)",
            }}
            className="team-grid"
          >
            {teamMembers.map((member, i) => (
              <div key={i} style={{ backgroundColor: "var(--bg-page)" }}>
                <ArtDirectionFrame
                  label={`Team Portrait ${i + 1}`}
                  note={member.note}
                  style={{ aspectRatio: "3/4" }}
                />
                <div style={{ padding: "20px 24px" }}>
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
                    {member.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                    }}
                  >
                    Biography pending
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="location-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <SectionLabel>Our Base</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  color: "var(--text-primary)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  marginBottom: 24,
                  marginTop: -8,
                }}
              >
                Cairo. Permanently.
              </h2>
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
                Our principal office is in the New Administrative Capital — Egypt's newly established government and business hub east of Cairo. We are not a visiting practice. We are permanently based in Egypt, and all engagements are executed from this base.
              </p>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                <div>Paramount Advisers</div>
                <div>New Administrative Capital</div>
                <div>Cairo, Arab Republic of Egypt</div>
                <div style={{ marginTop: 8 }}>enquiries@paramountadvisers.com</div>
              </div>
            </div>

            <ArtDirectionFrame
              label="Office · Location Map"
              note={"New Administrative Capital, Cairo\nAerial or architectural photography — pending"}
              style={{ aspectRatio: "16/10", width: "100%" }}
            />
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
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 2.8vw, 34px)",
              color: "var(--text-primary)",
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            We would welcome an introduction.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--text-muted)",
              fontWeight: 300,
              marginBottom: 32,
              lineHeight: 1.65,
            }}
          >
            A brief introductory call costs nothing and commits you to nothing. We are direct and efficient with your time.
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
            Speak with an Adviser
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .positioning-grid,
          .team-header,
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .approach-grid > div,
          .team-grid > div {
            /* keep as-is, grid handles it */
          }
        }
        @media (max-width: 700px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
