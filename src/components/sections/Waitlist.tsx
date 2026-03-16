"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div
      id="waitlist"
      style={{
        padding: "160px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Volt glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 500,
          background: "radial-gradient(ellipse, rgba(206,255,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        <h2
          className="reveal"
          style={{
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            color: "#fff",
            marginBottom: 32,
          }}
        >
          Stop losing
          <br />
          what <span style={{ color: "#CEFF00" }}>matters.</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 420,
            margin: "0 auto 52px",
            lineHeight: 1.7,
          }}
        >
          Join 840+ founders and managers on the waitlist.
          First access ships to a device near you.{" "}
          <span style={{ color: "#CEFF00" }}>Device coming soon.</span>
        </p>

        {submitted ? (
          <div
            className="reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              background: "rgba(206,255,0,0.12)",
              border: "1px solid rgba(206,255,0,0.3)",
              borderRadius: 10,
              color: "#CEFF00",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            ✓ You&apos;re on the list. We&apos;ll be in touch.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal"
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              style={{
                flex: 1,
                padding: "15px 22px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                color: "#fff",
                background: "#141414",
                border: "1.5px solid rgba(255,255,255,0.15)",
                borderRadius: 10,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#CEFF00")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            />
            <button
              type="submit"
              style={{
                padding: "15px 32px",
                fontSize: 15,
                fontWeight: 700,
                color: "#0A0A0A",
                background: "#CEFF00",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#DAFF40";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(206,255,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#CEFF00";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get access
            </button>
          </form>
        )}

        <div
          className="reveal"
          style={{
            marginTop: 16,
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
          }}
        >
          No spam. No noise. We&apos;ll email you once when you&apos;re in.
        </div>
      </div>
    </div>
  );
}
