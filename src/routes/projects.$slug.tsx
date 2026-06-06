import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid,
} from "recharts";
import {
  MapPin, Ruler, Coins, TrendingUp, ArrowRight, ArrowLeft, Download, Phone,
  Sprout, Building2, Factory, Leaf, ShieldCheck, Globe2, Users, BadgeCheck,
  Calendar, Wallet, Banknote, Layers, CheckCircle2, X, Sparkles, FileCheck2,
  Sun, Droplets, HeartHandshake,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal, Counter } from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — bitdecentro` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.name} — bitdecentro` },
          { property: "og:description", content: loaderData.project.description },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-emerald-950">Project not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-emerald-950">Something went wrong</h1>
        <p className="mt-2 text-emerald-900/70">{String(error?.message ?? error)}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white">Retry</button>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero project={project} />
        <Gallery project={project} />
        <Overview project={project} />
        <Revenue project={project} />
        <Roadmap />
        <FutureProjections project={project} />
        <Projections project={project} />
        <TokenizationFlow />
        <WhyInvest />
        <ESG />
        <CTA project={project} />
        <MoreProjects currentSlug={project.slug} />
      </main>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero({ project }: { project: ReturnType<typeof getProject> & {} }) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0">
        <img src={project!.cover} alt={project!.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-950/55 to-emerald-950/85" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-100/90 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5" /> Tokenized Real-World Asset
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            {project!.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-emerald-100/90">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {project!.location}</span>
            <span className="inline-flex items-center gap-1.5"><Ruler className="h-4 w-4" /> {project!.acreage}</span>
            <span className="inline-flex items-center gap-1.5"><Sprout className="h-4 w-4" /> {project!.currentBusiness}</span>
          </div>
          <p className="mt-5 text-lg text-emerald-100/85 max-w-2xl">{project!.description}</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            <HeroStat label="Current Asset Value" value={project!.currentAssetValue} />
            <HeroStat label="Target ROI" value={project!.roi.split(" ")[0]} />
            <HeroStat label="Land Size" value={project!.acreage} />
            <HeroStat label="Token Supply" value={project!.tokenSupply.split(" ")[0]} />
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-6 py-3 text-sm font-bold hover:bg-emerald-300 transition shadow-glow">
              Invest Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white/10 backdrop-blur px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
              <Download className="h-4 w-4" /> Download Prospectus
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white/10 backdrop-blur px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
              <Phone className="h-4 w-4" /> Schedule Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl glass-dark px-4 py-3">
      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-200/80">{label}</div>
      <div className="mt-1 text-xl font-extrabold text-white">{value}</div>
    </div>
  );
}

/* ---------- GALLERY ---------- */
function Gallery({ project }: { project: ReturnType<typeof getProject> & {} }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Image Gallery" title="Inside the Estate" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {project!.gallery.map((img, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl border border-emerald-100 shadow-glow w-full ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/12]" : "aspect-[4/3]"
                }`}
              >
                <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 right-3 text-left text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition">
                  {img.label}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-emerald-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition" onClick={() => setActive(null)}>
            <X className="h-5 w-5" />
          </button>
          <img
            src={project!.gallery[active].src}
            alt={project!.gallery[active].label}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* ---------- OVERVIEW DASHBOARD ---------- */
function Overview({ project }: { project: ReturnType<typeof getProject> & {} }) {
  const stats = [
    { icon: Ruler, label: "Total Acreage", value: project!.acreage },
    { icon: Sprout, label: "Crop Type", value: project!.currentBusiness },
    { icon: Banknote, label: "Current Revenue", value: project!.currentRevenue.join(", ") },
    { icon: TrendingUp, label: "Future Revenue Streams", value: `${project!.futureRevenue.length}+ Streams` },
    { icon: Coins, label: "Token Supply", value: project!.tokenSupply },
    { icon: ShieldCheck, label: "Asset Backing", value: project!.assetBacking },
    { icon: Wallet, label: "Expected Yield", value: project!.expectedYield },
  ];
  return (
    <section className="py-20 bg-radial-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Project Overview" title="Investor Dashboard" />
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.04}>
              <div className="rounded-2xl bg-white border border-emerald-100 p-5 shadow-glow h-full">
                <div className="flex items-center gap-2 text-emerald-700">
                  <s.icon className="h-4 w-4" />
                  <div className="text-[11px] font-bold uppercase tracking-wider">{s.label}</div>
                </div>
                <div className="mt-3 text-lg font-extrabold text-emerald-950 leading-tight">{s.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVENUE ---------- */
function Revenue({ project }: { project: ReturnType<typeof getProject> & {} }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Revenue Streams" title="Current & Future Revenue" />
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-7 h-full">
              <div className="flex items-center gap-2 text-emerald-700">
                <Sprout className="h-5 w-5" />
                <div className="text-xs font-bold uppercase tracking-wider">Current Revenue</div>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-emerald-950">Operational Today</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                {project!.currentRevenue.map((r) => (
                  <li key={r} className="flex items-start gap-2 rounded-xl bg-white border border-emerald-100 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span className="text-sm font-semibold text-emerald-900">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-emerald-950 text-white p-7 h-full">
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="h-5 w-5" />
                <div className="text-xs font-bold uppercase tracking-wider">Future Revenue</div>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold">Expansion Opportunities</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                {project!.futureRevenue.map((r) => (
                  <li key={r} className="flex items-start gap-2 rounded-xl bg-white/5 border border-emerald-400/20 px-3 py-2">
                    <ArrowRight className="h-4 w-4 text-emerald-300 mt-0.5" />
                    <span className="text-sm font-semibold text-emerald-50">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {project!.phases && (
          <Reveal>
            <div className="mt-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">Future Expansion Phases</div>
              <h3 className="mt-2 text-2xl font-extrabold">Vertically Integrated Roadmap</h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {project!.phases.map((ph, i) => (
                  <div key={ph.phase} className="rounded-2xl bg-white/10 border border-white/20 p-4">
                    <div className="flex items-center gap-2">
                      <div className="grid place-items-center h-7 w-7 rounded-full bg-emerald-300 text-emerald-900 font-bold text-xs">{i + 1}</div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">{ph.phase}</div>
                    </div>
                    <div className="mt-3 text-sm font-bold leading-tight">{ph.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- ROADMAP ---------- */
function Roadmap() {
  const items = [
    { year: "2026", title: "Current Agricultural Operations", icon: Sprout },
    { year: "2027", title: "Infrastructure Development", icon: Building2 },
    { year: "2028", title: "Tourism Launch", icon: Globe2 },
    { year: "2029", title: "Expansion Phase", icon: Layers },
    { year: "2030", title: "Mature Revenue Ecosystem", icon: TrendingUp },
  ];
  return (
    <section className="py-20 bg-radial-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Development Roadmap" title="The Path to Maturity" />
        </Reveal>
        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-200" />
          <div className="grid md:grid-cols-5 gap-6">
            {items.map((it, i) => (
              <Reveal key={it.year} delay={i * 0.08}>
                <div className="relative text-center">
                  <div className="mx-auto grid place-items-center h-14 w-14 rounded-full bg-emerald-600 text-white shadow-glow ring-4 ring-white">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-2xl font-extrabold text-emerald-950">{it.year}</div>
                  <div className="mt-1 text-sm font-semibold text-emerald-900/80">{it.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FUTURE PROJECTIONS (visual) ---------- */
function FutureProjections({ project }: { project: ReturnType<typeof getProject> & {} }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Future Projections" title="What This Estate Becomes" />
          <p className="mt-4 max-w-2xl text-emerald-900/70">
            Visualized concept renders of the planned developments backing this tokenized asset —
            from luxury hospitality and experience tourism to processing facilities and export infrastructure.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {project!.futureProjections.map((fp, i) => (
            <Reveal key={fp.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 shadow-glow aspect-[16/10]">
                <img src={fp.src} alt={fp.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/95 text-emerald-950 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" /> Future Vision
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xl sm:text-2xl font-extrabold">{fp.title}</div>
                  <div className="mt-1.5 text-sm text-emerald-100/90 max-w-md">{fp.caption}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTIONS ---------- */
function Projections({ project }: { project: ReturnType<typeof getProject> & {} }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Financial Projections" title="5-Year Investor Outlook" />
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Projected Asset Value Growth</div>
                  <div className="mt-1 text-xl font-extrabold text-emerald-950">USD Millions</div>
                </div>
                <Banknote className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="mt-6 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={project!.valueGrowth}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#dcfce7" />
                    <XAxis dataKey="year" stroke="#065f46" />
                    <YAxis stroke="#065f46" />
                    <Tooltip formatter={(v: number) => [`$${v}M`, "Value"]} />
                    <Area type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={3} fill="url(#g1)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-emerald-950 text-white p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">Projected Investor Yield</div>
                  <div className="mt-1 text-xl font-extrabold">% Annual APY</div>
                </div>
                <TrendingUp className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="mt-6 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={project!.yieldGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#064e3b" />
                    <XAxis dataKey="year" stroke="#a7f3d0" />
                    <YAxis stroke="#a7f3d0" />
                    <Tooltip formatter={(v: number) => [`${v}%`, "Yield"]} />
                    <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={3} dot={{ r: 5, fill: "#4ade80" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <StatTile label="Year 5 Asset Value" value={project!.valueGrowth[4].value} prefix="$" suffix="M" />
          <StatTile label="Year 5 Yield Target" value={project!.yieldGrowth[4].value} suffix="%" />
          <StatTile label="Future Revenue Streams" value={project!.futureRevenue.length} suffix="+" />
        </div>
      </div>
    </section>
  );
}

function StatTile({ label, value, prefix = "", suffix = "" }: { label: string; value: number; prefix?: string; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 text-center">
      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">{label}</div>
      <div className="mt-2 text-4xl font-extrabold text-emerald-950">
        <Counter to={value} prefix={prefix} suffix={suffix} />
      </div>
    </div>
  );
}

/* ---------- TOKENIZATION FLOW ---------- */
function TokenizationFlow() {
  const steps = [
    { t: "Agricultural Asset", icon: Sprout },
    { t: "Independent Valuation", icon: FileCheck2 },
    { t: "SPV Creation", icon: Building2 },
    { t: "Blockchain Tokenization", icon: Coins },
    { t: "Fractional Ownership", icon: Users },
    { t: "Revenue Distribution", icon: Banknote },
    { t: "Secondary Marketplace Trading", icon: Globe2 },
  ];
  return (
    <section className="py-20 bg-radial-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Tokenization Structure" title="Real Asset to Liquid Investment" />
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="relative rounded-2xl bg-white border border-emerald-100 p-5 shadow-glow h-full">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-emerald-600 text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Step {i + 1}</div>
                </div>
                <div className="mt-3 text-sm font-extrabold text-emerald-950">{s.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY INVEST ---------- */
function WhyInvest() {
  const items = [
    { icon: ShieldCheck, t: "Real Asset Backing" },
    { icon: Sprout, t: "Agricultural Revenue" },
    { icon: Globe2, t: "Tourism Revenue" },
    { icon: Factory, t: "Processing Industry Revenue" },
    { icon: TrendingUp, t: "Long-Term Land Appreciation" },
    { icon: Coins, t: "Blockchain Transparency" },
    { icon: Users, t: "Global Investor Access" },
    { icon: Layers, t: "Fractional Ownership" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Why Invest" title="Built for Long-Term Compounding" />
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.04}>
              <div className="rounded-2xl border border-emerald-100 bg-white p-5 hover:shadow-glow transition h-full">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-extrabold text-emerald-950">{i.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ESG ---------- */
function ESG() {
  const items = [
    { icon: Leaf, t: "Sustainable Farming" },
    { icon: Sun, t: "Renewable Energy Plans" },
    { icon: Droplets, t: "Water Management" },
    { icon: Users, t: "Local Employment" },
    { icon: HeartHandshake, t: "Community Development" },
  ];
  return (
    <section className="py-20 bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
            <Leaf className="h-3.5 w-3.5" /> ESG & Sustainability
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold">Investing in <span className="text-emerald-300">People & Planet</span></h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.05}>
              <div className="rounded-2xl bg-white/5 border border-emerald-400/20 p-5 h-full">
                <i.icon className="h-6 w-6 text-emerald-300" />
                <div className="mt-3 font-extrabold">{i.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA({ project }: { project: ReturnType<typeof getProject> & {} }) {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={project!.cover} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-emerald-950/85" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Invest in Georgia's <span className="text-emerald-300">Agricultural Transformation</span>
        </h2>
        <p className="mt-5 text-lg text-emerald-100/85 max-w-2xl mx-auto">
          Own a share in productive farmland, future tourism developments, and agro-industrial
          growth through blockchain-powered tokenization.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-6 py-3 text-sm font-bold hover:bg-emerald-300 transition">
            Invest Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
            <Download className="h-4 w-4" /> Download Whitepaper
          </a>
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
            <Phone className="h-4 w-4" /> Book Investor Call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- MORE PROJECTS ---------- */
function MoreProjects({ currentSlug }: { currentSlug: string }) {
  const others = projects.filter((p) => p.slug !== currentSlug);
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader kicker="Explore More" title="Other Investment Projects" />
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {others.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="group relative overflow-hidden rounded-3xl border border-emerald-100 shadow-glow aspect-[16/8]">
              <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">{p.location}</div>
                <div className="mt-1 text-2xl font-extrabold">{p.name}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald-100">View Project <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
        {kicker}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-emerald-950">{title}</h2>
    </div>
  );
}
