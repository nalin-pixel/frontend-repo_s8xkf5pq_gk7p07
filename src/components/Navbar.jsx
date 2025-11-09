import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Customers', href: '#customers' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-semibold">F</div>
            <span className="font-semibold tracking-tight text-gray-900">Finwave</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black transition-colors">Get Started</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block px-2 py-2 rounded-md hover:bg-gray-50 text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block px-2 py-2 rounded-md bg-gray-900 text-white text-center">Get Started</a>
          </div>
        )}
      </div>
    </header>
  )
}
