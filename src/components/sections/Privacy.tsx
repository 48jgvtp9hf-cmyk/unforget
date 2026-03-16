"use client";

const privacyPoints = [
  "5-minute rolling buffer — self-deleting by design",
  "All processing happens on your device",
  "Zero data sold, shared, or profiled",
  "You choose what syncs, always",
];

const stats = [
  { num: "5", unit: "min", label: "Buffer window" },
  { num: "0", unit: "", label: "Cloud by default" },
  { num: "1", unit: "", label: "Tap to keep" },
  { num: "∞", unit: "", label: "Peace of mind" },
];

export default function Privacy() {
  return (
    <div
      id="privacy"
      style={{ background: "#111111", padding: "120px 60px" }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 100,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="reveal">
          <span
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
            Privacy
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: 24,
            }}
          >
            Built so we&apos;d never have to ask you to{" "}
            <span style={{ color: "#CEFF00" }}>trust us.</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            No continuous cloud recording. No selling your context to advertisers.
            No profiles built from your thoughts. The buffer deletes itself.
            You control what leaves your device.
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {privacyPoints.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 15,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(206,255,0,0.12)",
                    border: "1px solid rgba(206,255,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    flexShrink: 0,
                    color: "#CEFF00",
                  }}
                >
                  ✓
                </div>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — stats */}
        <div
          className="reveal reveal-d1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: 40,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")
              }
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.num}
                {s.unit && <span style={{ color: "#CEFF00" }}>{s.unit}</span>}
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
