import React from 'react'

export function PremiumCTA() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-4xl mx-auto text-center rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-400/5 to-teal-400/5 py-8 px-8">

        {/* Tagline */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto mb-6">
          A simple,{' '}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent font-semibold">
            premium
          </span>{' '}
          video editing portfolio — designed and built by me to showcase creative work with{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent font-semibold">
            clarity and purpose
          </span>
          .
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-gray-400 text-sm">Want a portfolio like this?</span>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-400 to-teal-400 text-black font-semibold text-sm hover:translate-x-1 transition-transform"
          >
            Let&apos;s build yours <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PremiumCTA
