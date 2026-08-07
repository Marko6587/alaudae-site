import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alaudae — Corporate & Cyber Security Consulting",
    template: "%s | Alaudae",
  },
  description:
    "Alaudae delivers cyber security, corporate security, security audits, staff training, loss prevention and anti-fraud programmes for European businesses.",
  keywords: [
    "cyber security consulting",
    "corporate security",
    "security audit",
    "penetration testing",
    "loss prevention",
    "anti-fraud systems",
    "security awareness training",
  ],
  generator: "v0.dev",
  openGraph: {
    title: "Alaudae — Corporate & Cyber Security Consulting",
    description:
      "Cyber defence, corporate security, audits, loss prevention, anti-fraud systems and staff training in one programme.",
    siteName: "Alaudae",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} bg-white text-black`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
