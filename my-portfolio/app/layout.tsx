import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lotus Portfolio | UI/UX Designer",
    template: "%s | Lotus Portfolio",
  },
  description:
    "Personal portfolio website for a UI/UX designer, featuring case studies, process, and design thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://www.figma.com" crossOrigin="" />
        <link rel="preconnect" href="https://figma.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.figma.com" />
        <link rel="dns-prefetch" href="https://figma.com" />
      </head>
      <body className="min-h-full bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
