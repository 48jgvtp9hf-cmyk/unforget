"use client";

const testimonials = [
  {
    quote:
      "I used to lose 3 or 4 good ideas every single meeting. Unforget turned that into zero. It's the quietest, most useful productivity tool I've ever bought.",
    name: "Sarah M.",
    role: "Founder · Series A SaaS",
    initial: "S",
    bg: "#CEFF00",
    color: "#0A0A0A",
  },
  {
    quote:
      "I was sceptical of another AI app. But Unforget doesn't feel like AI — it feels like a very discreet, very capable assistant living on my device.",
    name: "James K.",
    role: "Engineering Manager · Fintech",
    initial: "J",
    bg: "#333",
    color: "#fff",
  },
  {
    quote:
      "The privacy angle sold me first. Then I realised I was capturing things I'd been losing for years. It's non-negotiable now — I won't take a meeting without it.",
    name: "Priya R.",
    role: "COO · Growth Stage Startup",
    initial: "P",
    bg: "#AACC00",
    color: "#0A0A0A",
  },
];

export default function Testimonials() {
  return (
    <div style={{ padding: "120px 60px", maxWidth: 1300, margin: "0 auto" }}>
      <span
        className="reveal"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#CEFF00",
          marginBottom: 20,
          display: "inline-block",
        }}
      >
        What people say
      </span>

      <h2
        className="reveal"
        style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#fff",
          marginBottom: 72,
        }}
      >
        Founders don&apos;t forget
        <br />
        anymore.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`reveal${i > 0 ? ` reveal-d${i}` : ""}`}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(206,255,0,0.2)";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 8px 32px rgba(206,255,0,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                padding: 40,
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transition: "all 0.3s",
                cursor: "default",
                height: "100%",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array(5).fill(null).map((_, j) => (
                  <span key={j} style={{ color: "#CEFF00", fontSize: 14 }}>★</span>
                ))}
              </div>

              <p
                style={{
                  fontSize: 15,
                  color: "#fff",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: t.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
