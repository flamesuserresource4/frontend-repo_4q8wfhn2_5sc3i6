import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nova Commerce",
    summary: "Conversion-centered storefront redesign with a headless Next.js stack and Express API layer.",
    tags: ["Next.js", "Express", "GA4", "Search Console"],
    href: "#",
    metric: "+38% CVR",
  },
  {
    title: "Orbit SaaS Platform",
    summary: "Product marketing site with Spline hero, docs hub, and analytics instrumentation end-to-end.",
    tags: ["Next.js", "React", "Spline", "Analytics"],
    href: "#",
    metric: "-32% Bounce",
  },
  {
    title: "Atlas Data Studio",
    summary: "Portfolio and blog system with MDX, Express webhooks, and technical SEO improvements.",
    tags: ["Next.js", "Express", "MDX", "SEO"],
    href: "#",
    metric: "+71% Organic",
  },
];

export default function PastProjects() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Recent work</h2>
          <p className="mt-4 text-gray-600">A few case studies from our team — shipped with modern stacks and measurable outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
                </div>
                <span className="inline-flex h-9 items-center gap-1 rounded-full bg-gray-900 px-3 text-xs font-medium text-white">
                  <ArrowUpRight className="h-4 w-4" />
                  {p.metric}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                View case study
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
