import "@/css/globals.css"
import { Inter } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/Provider/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "GBF Beginners",
    description: "Specially designed for GBF Beginners",
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="min-h-screen flex flex-col bg-foreground">
                        {children}
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
