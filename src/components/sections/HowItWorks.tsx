"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    icon: "🌊",
    title: "The Stream rolls",
    body: "Unforget runs silently in the background, holding the last 5 minutes of context in a private on-device buffer. No cloud. No recording. Just a rolling window — always ready.",
  },
  {
    num: "02",
    icon: "📌",
    title: "You pin what matters",
    body: "One tap on your device. The moment is saved — everything before it fades as it should. You decide what's worth keeping. The algorithm never does.",
  },
  {
    num: "03",
    icon: "✦",
    title: "The Drop arrives",
    body: "Your phone receives a clean, processed to-do. Formatted. Contextualised. Ready to act on. From scattered thought to clear task in seconds.",
  },
];

export default function HowItWorks() {
  const { ref } = useReveal();

  return (
    <div id="how-it-works" style={{ padding: "120px 60px", maxWidth: 1300, margin: "0 auto" }}>
      <span
        ref={ref as any}
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
        How it works
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
        Three steps.
        <br />
        One tap.
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: "rgba(255,255,255,0.5)",
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 72,
        }}
      >
        From fleeting thought to finished task in under 10 seconds — without breaking your flow.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
        {steps.map((step, i) => (
          <StepCard key={step.num} step={step} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}

function StepCard({ step, delay }: { step: (typeof steps)[0]; delay: number }) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#1A1A1A";
        el.style.borderColor = "rgba(206,255,0,0.2)";
        const bar = el.querySelector(".step-bar") as HTMLElement;
        if (bar) bar.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#141414";
        el.style.borderColor = "rgba(255,255,255,0.08)";
        const bar = el.querySelector(".step-bar") as HTMLElement;
        if (bar) bar.style.transform = "scaleX(0)";
      }}
    >
      <div
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s",
          cursor: "default",
          height: "100%",
        }}
      >
        {/* Top accent bar */}
        <div
          className="step-bar"
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 3,
            background: "#CEFF00",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#CEFF00",
            marginBottom: 24,
            display: "block",
          }}
        >
          {step.num}
        </span>

        <div
          style={{
            width: 52,
            height: 52,
            background: "rgba(206,255,0,0.08)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            marginBottom: 24,
          }}
        >
          {step.icon}
        </div>

        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: 14,
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </div>

        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
          }}
        >
          {step.body}
        </div>
      </div>
    </div>
  );
}
