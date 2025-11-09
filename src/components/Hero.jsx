import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 bg-white" id="home">
      <div className="absolute inset-0 h-[680px]">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* colorful light overlay without blocking spline interactions */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/40 blur-3xl" />
          <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 pt-44 pb-28">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500">Berwarna & Berani</span>
              <br />
              Wujudkan Profil Perusahaan yang Menarik
            </h1>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Tampilkan identitas brand dengan sentuhan warna-warni, animasi halus, dan visual 3D interaktif.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-white bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 hover:brightness-110 transition-all shadow-md">
                Lihat Fitur
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-3 bg-white text-gray-900 shadow hover:shadow-md">
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  )
}
