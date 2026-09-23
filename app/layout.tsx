import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RADAR — Contratación pública, sin ruido",
  description:
    "Detecta licitaciones que encajan con tu empresa antes de que se conviertan en oportunidades perdidas.",
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
