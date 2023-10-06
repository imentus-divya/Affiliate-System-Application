"use client"
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Nav from "@/components/Nav";
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  console.log("🚀 ~ file: layout.tsx:23 ~ router:", pathname)



  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== '/dashboard'

          ? (<Nav></Nav>)
          : ''}
        {children}
        <Toaster />
      </body>
    </html>
  )
}
