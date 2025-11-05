import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$1,900",
    cadence: "/project",
    highlight: "Best for early-stage launches",
    features: [
      "1 landing page",
      "Brand starter kit",
      "Basic animations",
      "Next.js or Webflow build",
      "GA4 + Search Console",
      "1 revision round",
    ],
    cta: "Start now",
  },
  {
    name: "Growth",
    price: "$4,900",
    cadence: "/project",
    highlight: "Most popular for funded teams",
    featured: true,
    features: [
      "Up to 5 pages",
      "Refined brand system",
      "Advanced interactions",
      "Component library",
      "Express API hooks",
      "GA4 + Search Console setup",
      "2 revision rounds",
    ],
    cta: "Book a slot",
  },
  {
    name: "Partner",
    price: "$3,500",
    cadence: "/month",
    highlight: "On-demand design support",
    features: [
      "Async design requests",
      "Weekly drops",
      "Priority support",
      "Quarterly SEO & analytics review",
      "Cancel anytime",
    ],
    cta: "Join waitlist",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Pick the model that fits your stage. No surprises, just great work.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.featured ? 'ring-2 ring-gray-900' : 'ring-1 ring-gray-200'} rounded-2xl bg-white p-6 shadow-sm flex flex-col`}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <span className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">{tier.highlight}</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <div className="text-3xl font-semibold text-gray-900">{tier.price}</div>
                  <div className="text-gray-500">{tier.cadence}</div>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className={`${tier.featured ? 'bg-gray-900 text-white hover:bg-black' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} mt-8 inline-flex h-11 items-center justify-center rounded-lg font-medium transition`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-sm text-gray-600">Questions or a unique scope? Email us — we respond within a day.</p>
          <a href="mailto:hello@flarestudio.design" className="mt-3 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">hello@flarestudio.design</a>
        </div>
      </div>
    </section>
  );
}
