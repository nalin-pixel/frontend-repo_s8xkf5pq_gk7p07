export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Finwave. Dibuat dengan penuh warna.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-900">Fitur</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
            <a href="#home" className="hover:text-gray-900">Beranda</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
