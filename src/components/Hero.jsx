import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Designer-led, conversion-focused
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Modern websites that feel crafted and perform like SaaS
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
              We’re a web design studio for founders and brands who want a premium look, clear storytelling, and measurable results. Strategy, design, and build — all in one.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-900 px-6 text-white font-medium hover:bg-black">View pricing</a>
              <a href="#work" className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-200 px-6 text-gray-900 font-medium hover:bg-gray-50">See our work</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-semibold text-gray-900">120+</div>
                <div>projects shipped</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">3.2x</div>
                <div>avg. ROI for clients</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">14d</div>
                <div>typical timeline</div>
              </div>
            </div>
          </div>
          <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-gray-200/70 bg-white">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
