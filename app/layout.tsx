import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Font Pairing Tool",
  description: "Discover perfect font combinations for your web projects",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Load Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&family=Arvo:wght@400;700&family=Barlow:wght@400;500;600&family=Bitter:wght@400;500;700&family=Cardo:wght@400;700&family=Cormorant+Garamond:wght@400;500;600&family=Crimson+Text:wght@400;600&family=Domine:wght@400;500;700&family=Eczar:wght@400;500;600&family=Fira+Sans:wght@400;500;700&family=Inter:wght@400;500;600&family=Josefin+Sans:wght@400;500;700&family=Karla:wght@400;500;700&family=Lato:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Lora:wght@400;500;600&family=Merriweather:wght@400;700&family=Montserrat:wght@400;500;600&family=Mulish:wght@400;500;700&family=Noto+Sans:wght@400;500;600&family=Noto+Serif:wght@400;600&family=Nunito:wght@400;600;700&family=Open+Sans:wght@400;600&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:wght@400;500;600&family=Poppins:wght@400;500;600&family=Quicksand:wght@400;500;700&family=Raleway:wght@400;500;600&family=Roboto+Slab:wght@400;500;600&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;700&family=Source+Sans+Pro:wght@400;600&family=Source+Serif+Pro:wght@400;600&family=Spectral:wght@400;500;600&family=Urbanist:wght@400;500;700&family=Vollkorn:wght@400;500;700&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-gradient-to-br from-slate-950 to-slate-900 min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
