import React from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Accessible Shop</Link>
          <nav aria-label="Main navigation">
            <ul className="flex gap-4">
              <li><Link href="/">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t text-sm text-gray-600 p-4 text-center">© Demo Accessible E‑Commerce</footer>
    </div>
  )
}
