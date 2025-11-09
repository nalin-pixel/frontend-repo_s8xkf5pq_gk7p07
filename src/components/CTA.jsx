export default function CTA() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 p-10 sm:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-pink-400/40 blur-3xl" />
            <div className="absolute -bottom-8 right-10 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl" />
            <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/40 blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500">
              Siap tampil lebih berwarna?
            </h3>
            <p className="mt-2 text-gray-700 max-w-xl">Kirim pesan Anda — kami bantu wujudkan landing page yang cerah, ceria, dan berkarakter.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Email Anda"
                className="w-full sm:w-72 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
              />
              <button
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-white bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 hover:brightness-110 transition-all shadow-md">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
