import { Link } from "react-router-dom";
import logoUrl from "../assets/logo.svg";
import { useTheme } from "../context/ThemeContext";

interface LogoProps {
  layout?: "horizontal" | "vertical";
  /** Total logo height in px. Kept name for backwards compatibility. */
  pyramidHeight?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  layout = "horizontal",
  pyramidHeight = 38,
  height,
  className,
}: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const logoHeight = height ?? pyramidHeight;

  // The new .svg uses dark-navy artwork, which disappears on the dark
  // theme. Render it monochrome-white in dark mode, full colour in light.
  const filter = isDark ? "brightness(0) invert(1)" : "none";

  if (layout === "vertical") {
    return (
      <Link
        to="/"
        aria-label="Paramount Egypt — home"
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={logoUrl}
          alt="Paramount Egypt"
          height={logoHeight}
          className={className}
          style={{
            height: logoHeight,
            width: "auto",
            display: "block",
            filter,
            transition: "filter 0.35s ease",
          }}
        />
      </Link>
    );
  }

  // Horizontal layout (nav default)
  return (
    <Link
      to="/"
      aria-label="Paramount Egypt — home"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <img
        src={logoUrl}
        alt="Paramount Egypt"
        height={logoHeight}
        className={className}
        style={{
          height: logoHeight,
          width: "auto",
          display: "block",
          filter,
          transition: "filter 0.35s ease",
        }}
      />
    </Link>
  );
}
