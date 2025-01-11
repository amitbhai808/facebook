import Link from 'next/link';
import './globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Add any head elements here */}
      </head>
      <body>
        <div >

          {children}
        </div>

      </body>
    </html>
  )
}