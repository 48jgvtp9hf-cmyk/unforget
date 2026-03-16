"use client";

export default function Features() {
  return (
    <div id="features" style={{ padding: "120px 60px", maxWidth: 1300, margin: "0 auto" }}>
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
        Features
      </span>

      <h2
        className="reveal"
        style={{
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#fff",
          marginBottom: 20,
        }}
      >
        Built for people
        <br />
        who can&apos;t afford to forget.
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.5)",
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 72,
        }}
      >
        Every decision was made with one person in mind — the founder in back-to-back meetings
        who loses three good ideas before lunch.
      </p>

      {/* Bento grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 16,
        }}
      >
        <BentoCard span={7} tag="On-device AI" title="Processing that never leaves your pocket">
          Your context is processed locally on your phone and device. Nothing touches a server
          until you explicitly choose to sync. Privacy isn&apos;t a setting — it&apos;s the
          foundation every line of code is built on.
        </BentoCard>

        <BentoCard span={5} center>
          <div
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#CEFF00",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            5 min
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            Self-deleting buffer.
            <br />
            Always rolling, never storing.
          </div>
        </BentoCard>

        <BentoCard span={4} center>
          <div
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#CEFF00",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            0
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            Cloud recordings.
            <br />
            By default, ever.
          </div>
        </BentoCard>

        <BentoCard span={8} tag="The Drift" title="Your end-of-day debrief, automated">
          At the close of every day, Unforget surfaces a quiet summary of what you pinned, what
          became a task, and what you followed through on. The kind of clarity that used to
          require a good EA — delivered to your device at whatever time suits you.
        </BentoCard>
      </div>
    </div>
  );
}

function BentoCard({
  span,
  tag,
  title,
  center,
  children,
}: {
  span: number;
  tag?: string;
  title?: string;
  center?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="reveal"
      style={{ gridColumn: `span ${span}` }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(206,255,0,0.2)";
        el.style.boxShadow = "0 4px 24px rgba(206,255,0,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 40,
          height: "100%",
          display: center ? "flex" : "block",
          flexDirection: center ? "column" : undefined,
          justifyContent: center ? "center" : undefined,
          transition: "all 0.3s",
          cursor: "default",
        }}
      >
        {tag && (
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(206,255,0,0.12)",
              borderRadius: 100,
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#CEFF00",
              marginBottom: 20,
            }}
          >
            {tag}
          </div>
        )}
        {title && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
        )}
        {typeof children === "string" ? (
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
