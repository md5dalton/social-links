import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Social links profile",
  description: "Frontend Mentor - Social links profile",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-off-black">
      <body className={inter.className}>
        <main className="text-[14px] text-white h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
