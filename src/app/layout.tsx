import type { Metadata } from "next"
import { Inter, Space_Grotesk, Roboto_Mono } from "next/font/google"
import { Provider } from "@/components/ui/provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Effective | Pokémon Type Matchup Quiz",
  description:
    "Test your Pokémon type knowledge with Super Effective — a fast, mobile-friendly quiz app that teaches you what moves are resisted, effective, or super effective in battle.",
  keywords:
    "Pokémon type quiz, Pokémon type chart, super effective, Pokémon matchup trainer, Pokémon game, learn Pokémon types, battle damage quiz",
  openGraph: {
    title: "Super Effective | Pokémon Type Matchup Quiz",
    description:
      "Choose the right moves in this fast-paced Pokémon quiz game and master every type matchup. Built by Darkerzard.",
    type: "website",
    url: "https://supereffective.darkerzard.com",
    images: [
      {
        url: "https://supereffective.darkerzard.com/logo.png", // preview image
        alt: "Super Effective Pokémon Quiz App",
      }
    ]
  },
  other: {
    "google-adsense-account": "ca-pub-4516740889075256"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4516740889075256"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} ${grotesk.variable} ${mono.variable} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
