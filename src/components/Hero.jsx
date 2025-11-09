import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 bg-white" id="home">
      <div className="absolute inset-0 h-[620px]">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 pt-40 pb-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              Modern • Minimal • Secure
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              The elegant way to move your money
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Finwave brings together cards, accounts, and payments in one seamless platform. Simple by design, powerful under the hood.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black transition-colors">
                Get started <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50">
                Learn more
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=2" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/40?img=3" alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              <p>Trusted by 2,000+ teams</p>
            </div>
          </div>
          <div className="lg:col-span-6"></div>
        </div>
      </div>
    </section>
  )
}
