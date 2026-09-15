import { useState } from "react";
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
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
      <div style={{ width: 24, height: 1, backgroundColor: "var(--accent)", opacity: 0.6, flexShrink: 0 }} />
      <Label>{children}</Label>
    </div>
  );
}

function FieldInput({
  label,
  type = "text",
  placeholder,
  required = false,
  textarea = false,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  const base: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: `1px solid ${focused ? "var(--accent-dim)" : "var(--border-mid)"}`,
    padding: "12px 14px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--text-primary)",
    outline: "none",
    fontWeight: 300,
    lineHeight: 1.5,
    resize: "none",
    transition: "border-color 0.2s ease",
    appearance: "none",
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-body)",
          fontSize: 9,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: focused ? "var(--accent)" : "var(--text-muted)",
          fontWeight: 500,
          marginBottom: 8,
          transition: "color 0.2s ease",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--accent)", marginLeft: 4 }}>*</span>
        )}
      </label>
      {textarea ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      )}
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-body)",
          fontSize: 9,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: focused ? "var(--accent)" : "var(--text-muted)",
          fontWeight: 500,
          marginBottom: 8,
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            backgroundColor: "var(--bg-surface)",
            border: `1px solid ${focused ? "var(--accent-dim)" : "var(--border-mid)"}`,
            padding: "12px 36px 12px 14px",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: value ? "var(--text-primary)" : "var(--text-muted)",
            outline: "none",
            fontWeight: 300,
            appearance: "none",
            cursor: "pointer",
            transition: "border-color 0.2s ease",
          }}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              style={{ backgroundColor: "var(--bg-surface)", color: "var(--text-primary)" }}
            >
              {opt.label}
            </option>
          ))}
        </select>
        <div
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--accent-dim)",
            fontSize: 10,
          }}
        >
          ▾
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    { value: "", label: "Select an area of interest" },
    ...services.map((s) => ({ value: s.slug, label: s.title })),
    { value: "general", label: "General Enquiry" },
    { value: "investment-finder", label: "Investment Opportunities" },
  ];

  const countryOptions = [
    { value: "", label: "Select country" },
    { value: "ae", label: "United Arab Emirates" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "kw", label: "Kuwait" },
    { value: "qa", label: "Qatar" },
    { value: "gb", label: "United Kingdom" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "us", label: "United States" },
    { value: "cn", label: "China" },
    { value: "ru", label: "Russia" },
    { value: "other", label: "Other" },
  ];

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
          <SectionLabel>Get in Touch</SectionLabel>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "var(--text-primary)",
              fontWeight: 400,
              lineHeight: 1.05,
              maxWidth: 640,
              marginBottom: 20,
            }}
          >
            Open a conversation.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "var(--text-secondary)",
              fontWeight: 300,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            We keep initial conversations direct, confidential, and focussed on your specific situation. No obligation, no sales process — a genuine exchange to determine whether we can help you.
          </p>
        </div>
      </div>

      {/* Main contact area */}
      <div
        style={{
          backgroundColor: "var(--bg-page)",
          padding: "64px 24px 96px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "4fr 8fr",
              gap: 96,
              alignItems: "start",
            }}
          >
            {/* Left: contact info */}
            <div>
              {/* Direct contact */}
              <div style={{ marginBottom: 48 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  Direct Enquiries
                </div>
                <a
                  href="mailto:enquiries@paramountadvisers.com"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--accent)",
                    fontWeight: 300,
                    display: "block",
                    marginBottom: 4,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
                >
                  enquiries@paramountadvisers.com
                </a>
              </div>

              {/* Office */}
              <div style={{ marginBottom: 48 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  Office
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  <div>Paramount Advisers</div>
                  <div>New Administrative Capital</div>
                  <div>Cairo</div>
                  <div>Arab Republic of Egypt</div>
                </div>
              </div>

              {/* Response note */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  padding: "20px",
                  borderLeft: "2px solid var(--accent-dim)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  We respond to all enquiries within one business day. Urgent matters can be flagged in your message.
                </p>
              </div>

              {/* What to expect */}
              <div style={{ marginTop: 40 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    fontWeight: 500,
                    marginBottom: 20,
                  }}
                >
                  What to Expect
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    "A response from a senior adviser, not a coordinator.",
                    "A straightforward assessment of whether and how we can help.",
                    "No pressure, no sales pipeline, no follow-up calls unless you want them.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          flexShrink: 0,
                          lineHeight: 1.6,
                          fontSize: 12,
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                padding: "48px",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 0",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      border: "1px solid var(--accent-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                      <path d="M1 7L7 13L17 1" stroke="var(--accent)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 26,
                      color: "var(--text-primary)",
                      fontWeight: 400,
                      marginBottom: 12,
                    }}
                  >
                    Thank you.
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      fontWeight: 300,
                      lineHeight: 1.65,
                      maxWidth: 340,
                      margin: "0 auto",
                    }}
                  >
                    A senior adviser will review your message and respond within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 28 }}
                >
                  <div style={{ gridColumn: "span 2" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                        color: "var(--text-primary)",
                        marginBottom: 6,
                        fontWeight: 400,
                      }}
                    >
                      Send us a message
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: "var(--text-muted)",
                        fontWeight: 300,
                        lineHeight: 1.5,
                      }}
                    >
                      All enquiries are treated as confidential. Fields marked * are required.
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "28px 24px",
                    }}
                    className="form-cols"
                  >
                    <FieldInput
                      label="Full Name"
                      placeholder="Your full name"
                      required
                      value={name}
                      onChange={setName}
                    />
                    <FieldInput
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={email}
                      onChange={setEmail}
                    />
                    <SelectField
                      label="Country of Residence"
                      options={countryOptions}
                      value={country}
                      onChange={setCountry}
                    />
                    <SelectField
                      label="Area of Interest"
                      options={serviceOptions}
                      value={service}
                      onChange={setService}
                    />
                  </div>

                  <div style={{ gridColumn: "span 2" }}>
                    <FieldInput
                      label="Your Message"
                      placeholder="Briefly describe your situation and what you are trying to accomplish in Egypt. The more context you provide, the more useful our initial response will be."
                      required
                      textarea
                      value={message}
                      onChange={setMessage}
                    />
                  </div>

                  {/* Confidentiality note */}
                  <div
                    style={{
                      backgroundColor: "var(--accent-faint)",
                      border: "1px solid rgba(160, 120, 64, 0.12)",
                      padding: "12px 14px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 11,
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                        fontWeight: 300,
                      }}
                    >
                      Your message and contact details are held in strict confidence. We do not share client information with any third party without explicit consent.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={!name || !email || !message}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "var(--bg-page)",
                      backgroundColor: name && email && message ? "var(--accent)" : "var(--accent-dim)",
                      padding: "15px 32px",
                      border: "none",
                      cursor: name && email && message ? "pointer" : "not-allowed",
                      alignSelf: "flex-start",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (name && email && message)
                        e.currentTarget.style.backgroundColor = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      if (name && email && message)
                        e.currentTarget.style.backgroundColor = "var(--accent)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 560px) {
          .form-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
