import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unforget — Never lose a thought again",
  description:
    "A privacy-first memory assistant for your wrist. A 5-minute rolling buffer captures context as you move — one tap saves what matters, everything else disappears.",
  keywords: ["productivity", "AI", "memory", "wearable", "privacy"],
  openGraph: {
    title: "Unforget",
    description: "Stop losing your best ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
