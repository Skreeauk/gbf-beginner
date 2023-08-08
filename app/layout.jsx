import "@/css/globals.css"
import { Inter } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"

import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "GBF Beginners",
    description: "Specially designed for GBF Beginners",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    {children}
                </div>
                <Analytics />
            </body>
        </html>
    )
}
