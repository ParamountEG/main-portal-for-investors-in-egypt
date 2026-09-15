import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      title={isDark ? "Switch to day mode" : "Switch to night mode"}
      style={{
        width: 34,
        height: 20,
        borderRadius: 10,
        border: `1px solid ${isDark ? "rgba(160,120,64,0.4)" : "rgba(139,107,48,0.4)"}`,
        backgroundColor: isDark ? "rgba(160,120,64,0.12)" : "rgba(139,107,48,0.15)",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.3s ease",
        flexShrink: 0,
        padding: 0,
      }}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
    >
      {/* Track icons */}
      <span
        style={{
          position: "absolute",
          left: 3,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 8,
          lineHeight: 1,
          opacity: isDark ? 0.9 : 0.4,
          transition: "opacity 0.3s ease",
          userSelect: "none",
        }}
      >
        ☽
      </span>
      <span
        style={{
          position: "absolute",
          right: 3,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 8,
          lineHeight: 1,
          opacity: isDark ? 0.4 : 0.9,
          transition: "opacity 0.3s ease",
          userSelect: "none",
        }}
      >
        ☀
      </span>
      {/* Thumb */}
      <span
        style={{
          position: "absolute",
          top: 2,
          left: isDark ? 2 : 16,
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;
  const isDark = theme === "dark";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: transparent
            ? "transparent"
            : "var(--bg-overlay)",
          borderBottom: transparent
            ? "1px solid transparent"
            : "1px solid var(--border)",
          backdropFilter: transparent ? "none" : "blur(14px)",
          transition:
            "background-color 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <Logo pyramidHeight={34} layout="horizontal" />

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 32 }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    color: active ? "var(--accent)" : "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    paddingBottom: 2,
                    borderBottom: active
                      ? "1px solid var(--accent-dim)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 18 }}
            className="hidden md:flex"
          >
            {/* Language switcher */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontFamily: "var(--font-body)",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>EN</span>
              <span style={{ color: "var(--border-mid)" }}>·</span>
              <span
                style={{ color: "var(--text-faint)", cursor: "default" }}
                title="Arabic — coming soon"
              >
                AR
              </span>
              <span style={{ color: "var(--border-mid)" }}>·</span>
              <span
                style={{ color: "var(--text-faint)", cursor: "default" }}
                title="Russian — coming soon"
              >
                RU
              </span>
            </div>

            {/* Day / night toggle */}
            <ThemeToggle />

            {/* CTA */}
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
                padding: "9px 18px",
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
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              width: 32,
              height: 32,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 1,
                  backgroundColor: "var(--text-primary)",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "var(--bg-overlay)",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          paddingTop: 80,
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 40,
        }}
      >
        <nav style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                color: "var(--text-primary)",
                padding: "20px 0",
                borderBottom: "1px solid var(--border)",
                display: "block",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.3s ease ${i * 0.07 + 0.1}s, transform 0.3s ease ${i * 0.07 + 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            paddingTop: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}
            >
              {isDark ? "Night mode" : "Day mode"}
            </span>
            <ThemeToggle />
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            <span>EN</span>
            <span>AR (coming soon)</span>
            <span>RU (coming soon)</span>
          </div>

          <Link
            to="/contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--bg-page)",
              backgroundColor: "var(--accent)",
              padding: "14px 24px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Speak with an Adviser
          </Link>
        </div>
      </div>
    </>
  );
}
