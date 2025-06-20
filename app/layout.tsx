import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Álifi Ralph | AWS Cloud Engineer & Solutions Architect",
  description:
    "Portfolio of Álifi Ralph, AWS Certified Solutions Architect Associate with expertise in cloud engineering and data solutions.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
