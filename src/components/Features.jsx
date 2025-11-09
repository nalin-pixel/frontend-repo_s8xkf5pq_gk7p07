import { Shield, CreditCard, Sparkles, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption and advanced fraud detection keep your money safe at every step.',
  },
  {
    icon: CreditCard,
    title: 'Unified cards',
    desc: 'Virtual and physical cards with granular controls, limits, and real-time notifications.',
  },
  {
    icon: Smartphone,
    title: 'Anywhere access',
    desc: 'Manage balances, invoices, and payouts with a clean mobile-first experience.',
  },
  {
    icon: Sparkles,
    title: 'Minimal by design',
    desc: 'A calm interface that speeds up your day without getting in the way.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Designed for modern finance</h2>
          <p className="mt-3 text-gray-600">Tools that feel simple, behave smart, and scale with you.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow bg-white">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
