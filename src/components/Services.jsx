import { Palette, Brush, Code, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Visual Identity",
    desc: "Timeless logos, color systems, and typography that scale across web and product.",
  },
  {
    icon: Brush,
    title: "UX/UI Design",
    desc: "Conversion-focused interfaces with thoughtful motion and delightful details.",
  },
  {
    icon: Code,
    title: "Webflow & React Build",
    desc: "From design to pixel-perfect build with best-in-class performance.",
  },
  {
    icon: Sparkles,
    title: "Ongoing Design Partner",
    desc: "Monthly design support to ship faster and keep quality consistently high.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Designer-first services for ambitious teams</h2>
          <p className="mt-4 text-gray-600">We combine taste with systems thinking — so your site looks incredible and works even better.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />
              <div className="mt-4 text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition">What you get →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
