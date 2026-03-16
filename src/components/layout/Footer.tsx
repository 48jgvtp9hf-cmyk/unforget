import Link from "next/link";

const links = [
  { label: "Privacy", href: "#" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Device", href: "#" },
  { label: "Coming Soon", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "52px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#fff",
        }}
      >
        Un<span style={{ color: "#CEFF00" }}>forget</span>
      </div>

      <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        © 2026 Unforget
      </div>
    </footer>
  );
}
