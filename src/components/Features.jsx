import { Rocket, Star, Palette, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Palet Warna Cerah',
    desc: 'Komposisi gradien yang dinamis untuk tampil beda dan tetap elegan.',
  },
  {
    icon: Rocket,
    title: 'Performa Kencang',
    desc: 'Dibangun di atas Vite + React untuk pengalaman super responsif.',
  },
  {
    icon: Smartphone,
    title: 'Responsif',
    desc: 'Tampilan rapi di perangkat apa pun — ponsel hingga desktop.',
  },
  {
    icon: Star,
    title: 'Animasi Halus',
    desc: 'Detail mikro-interaksi yang membuat brand terasa hidup.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500">Kenapa Pilih Kami?</span>
          </h2>
          <p className="mt-3 text-gray-700">Fokus pada visual yang berwarna-warni dan menyenangkan tanpa jargon.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl text-white grid place-items-center bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-400">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
