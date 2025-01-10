import Link from 'next/link';
import './globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Add any head elements here */}
      </head>
      <body>
        <header>
          {/* Add header content here */}
          <nav className="flex justify-between items-center gap-3 border border-white rounded-lg m-5 p-2">
            <h3 className="text-2xl">LOGO</h3>
            <ul className="flex items-center gap-5 px-10 text-lg font-semibold tracking-wider">
              <li>amit</li>
              <li>ramat</li>
              <li>aayush</li>
              <li>aman</li>
            </ul>
          </nav>
        </header>
        <body className='grid grid-cols-12'>
          <aside className='col-span-2 mx-5 p-2 border border-white h-[90vh]'>
            {/* Add sidebar content here */}
            <ul className='flex flex-col gap-3'>
              <Link href={'/'}>dashboard</Link>
              <Link href={'/profile'}>profile</Link>
              <Link href={'/setting'}>settings</Link>
              <Link href={'/users'}>Users</Link>
              <Link href={'/logout'}>logout</Link>
            </ul>
          </aside>
          <main className='col-span-10 mx-5 p-2 border border-white h-[90vh] min-h-screen overflow-y-auto'>

            {children}
          </main>
        </body>
        <footer>
          {/* Add footer content here */}
        </footer>
      </body>
    </html>
  )
}