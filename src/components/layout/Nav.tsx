"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 60px",
        height: "68px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", textDecoration: "none" }}>
        Un<span style={{ color: "#CEFF00" }}>forget</span>
      </Link>

      <ul style={{ display: "flex", gap: 36, listStyle: "none" }}>
        {["How it works", "Features", "Privacy"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link
          href="#"
          style={{ padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
        >
          Sign in
        </Link>
        <Link
          href="#waitlist"
          style={{
            padding: "9px 22px",
            fontSize: 13,
            fontWeight: 700,
            color: "#0A0A0A",
            background: "#CEFF00",
            border: "none",
            borderRadius: 8,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#DAFF40";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(206,255,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#CEFF00";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Join waitlist
        </Link>
      </div>
    </nav>
  );
}
