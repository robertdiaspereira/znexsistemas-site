import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Znex ERP - Gestao de Assistencia Tecnica e Varejo",
  description:
    "Sistema ERP completo para assistencia tecnica de celulares e comercio geral. Checklist digital, controle financeiro, estoque de pecas e PDV integrado.",
  keywords: [
    "ERP",
    "assistencia tecnica",
    "gestao empresarial",
    "sistema para celulares",
    "PDV",
    "controle financeiro",
    "estoque",
  ],
}

export const viewport: Viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
