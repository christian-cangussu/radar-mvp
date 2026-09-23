import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexlic.netlify.app"),
  title: "NEXLIC — Contratación pública, sin ruido",
  description:
    "Detecta licitaciones que encajan con tu empresa antes de que se conviertan en oportunidades perdidas.",
  openGraph: {
    title: "NEXLIC — Contratación pública, sin ruido",
    description:
      "Detecta, entiende y prioriza oportunidades públicas que realmente encajan con tu empresa.",
    url: "https://nexlic.netlify.app",
    siteName: "NEXLIC",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXLIC — Contratación pública, sin ruido",
    description:
      "Detecta, entiende y prioriza oportunidades públicas que realmente encajan con tu empresa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
