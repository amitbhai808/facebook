import Link from 'next/link';
import './globals.css';
import { SessionProvider } from 'next-auth/react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Add any head elements here */}
      </head>
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>




      </body>
    </html>
  )
}