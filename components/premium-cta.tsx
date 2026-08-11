import React from 'react'

export function PremiumCTA() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-400/5 to-teal-400/5 px-5 py-6 text-center sm:px-8 sm:py-8">

        {/* Tagline */}
        <p className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:mb-6 sm:text-lg md:text-xl">
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
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span className="text-sm text-gray-400">Want a portfolio like this?</span>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-teal-400 px-4 py-2 text-sm font-semibold text-black transition-transform hover:translate-x-1 sm:px-5 sm:py-2.5"
          >
            Let&apos;s build yours <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PremiumCTA