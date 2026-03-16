const logos = ["Acme Corp", "Horizon", "Veritas AI", "Stackwise", "Foundry", "Meridian"];

export default function LogosStrip() {
  return (
    <div
      style={{
        padding: "48px 60px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#141414",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            whiteSpace: "nowrap",
            marginRight: 48,
            flexShrink: 0,
          }}
        >
          Used by teams at
        </span>
        <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          {logos.map((logo) => (
            <span
              key={logo}
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "-0.02em",
                transition: "color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
