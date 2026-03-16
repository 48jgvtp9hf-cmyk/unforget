"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const notifications = [
  {
    icon: "📌",
    label: "Pinned · 2 min ago",
    title: "Follow up with Marcus re: Q3 budget",
    body: "Mentioned during standup — needs decision by Friday",
    time: "09:41",
    delay: "1.0s",
  },
  {
    icon: "✦",
    label: "Task created",
    title: "Draft proposal for new onboarding flow",
    body: "From your 10am — add to Linear sprint",
    time: "10:14",
    delay: "1.4s",
  },
  {
    icon: "💡",
    label: "Captured idea",
    title: "Pricing page A/B test — try anchoring high",
    body: "Jot this before your 2pm call",
    time: "11:32",
    delay: "1.8s",
  },
  {
    icon: "🌊",
    label: "Stream · Active",
    title: "Buffer rolling · 4:48 remaining",
    body: "On-device · Private · Tap to pin",
    time: "Now",
    delay: "2.2s",
  },
];

const barHeights = [8, 14, 10, 18, 12];

export default function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "148px 60px 100px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1300,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* LEFT */}
      <div>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px 6px 8px",
            background: "rgba(206,255,0,0.12)",
            borderRadius: 100,
            marginBottom: 32,
            opacity: 0,
            animation: "fadeUp 0.7s 0.1s forwards",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#CEFF00",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#CEFF00", letterSpacing: "0.02em" }}>
            Now accepting early access
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(52px, 5.5vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#fff",
            marginBottom: 28,
            opacity: 0,
            animation: "fadeUp 0.7s 0.2s forwards",
          }}
        >
          Stop losing
          <br />
          your <span style={{ color: "#CEFF00" }}>best</span>
          <br />
          ideas.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: 460,
            marginBottom: 44,
            opacity: 0,
            animation: "fadeUp 0.7s 0.3s forwards",
          }}
        >
          Unforget turns your device into a{" "}
          <strong style={{ color: "#fff", fontWeight: 600 }}>private second brain</strong>.
          A 5-minute rolling buffer captures context as you move — one tap saves what matters,
          everything else disappears.
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 56,
            opacity: 0,
            animation: "fadeUp 0.7s 0.4s forwards",
          }}
        >
          <Link
            href="#waitlist"
            style={{
              padding: "15px 32px",
              fontSize: 15,
              fontWeight: 700,
              color: "#0A0A0A",
              background: "#CEFF00",
              border: "none",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
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
            Get early access →
          </Link>
          <Link
            href="#how-it-works"
            style={{
              padding: "15px 28px",
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.15)",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See how it works
          </Link>
        </div>

        {/* Social proof */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: 0,
            animation: "fadeUp 0.7s 0.5s forwards",
          }}
        >
          <div style={{ display: "flex" }}>
            {["#CEFF00", "#333", "#AACC00", "#555"].map((bg, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "2px solid #0A0A0A",
                  marginLeft: i === 0 ? 0 : -8,
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#0A0A0A",
                }}
              >
                {["S", "J", "P", "M"][i]}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
            <strong style={{ color: "#fff" }}>840+ founders</strong> on the waitlist
          </span>
        </div>
      </div>

      {/* RIGHT — Product Card */}
      <div style={{ opacity: 0, animation: "fadeIn 1s 0.5s forwards" }}>
        <div
          style={{
            background: "#141414",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 1px 2px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.5), 0 24px 64px rgba(0,0,0,0.6)",
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#111",
            }}
          >
            {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              Unforget · The Drop
            </div>
          </div>

          {/* Notifications */}
          <div style={{ padding: 32 }}>
            {notifications.map((n, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  marginBottom: i < notifications.length - 1 ? 12 : 0,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  opacity: 0,
                  animation: `slideIn 0.5s ease ${n.delay} forwards`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(206,255,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {n.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#CEFF00",
                      marginBottom: 4,
                    }}
                  >
                    {n.label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2, lineHeight: 1.3 }}>
                    {n.title}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                    {n.body}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    color: "rgba(255,255,255,0.25)",
                    paddingTop: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {n.time}
                </div>
              </div>
            ))}
          </div>

          {/* Card footer */}
          <div
            style={{
              padding: "20px 32px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#CEFF00",
                  animation: "blink 1.5s ease-in-out infinite",
                }}
              />
              Stream active
            </div>
            <div style={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: h,
                    background: "rgba(206,255,0,0.12)",
                    borderRadius: 2,
                    animation: `barPulse 1.5s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
