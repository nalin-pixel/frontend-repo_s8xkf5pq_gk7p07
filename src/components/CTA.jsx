import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Experience payments without the noise</h3>
            <p className="mt-2 text-gray-600 max-w-xl">Speak with our team to see how Finwave fits your workflows and compliance needs.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex gap-3">
            <input type="email" required placeholder="Work email" className="w-full md:w-72 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
            <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black transition-colors">
              Request demo <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
