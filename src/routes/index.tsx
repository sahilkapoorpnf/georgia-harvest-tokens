import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, CartesianGrid, LineChart, Line,
} from "recharts";
import {
  Sprout, Globe2, Coins, ShieldCheck, TrendingUp, Truck, BarChart3, Wallet,
  Smartphone, Users, KeyRound, Satellite, Cpu, Languages, CreditCard, MapPin,
  Network, FileCheck2, Cloud, AlertTriangle, Banknote, Layers, Calculator,
  ArrowRight, CheckCircle2, Sparkles, Building2, Leaf, BadgeCheck,
} from "lucide-react";
import { useState } from "react";

import heroFarm from "@/assets/hero-almond-farm.jpg";
import pista from "@/assets/pista-farm.jpg";
import georgia from "@/assets/georgia-land.jpg";
import blockchainFarm from "@/assets/blockchain-farm.jpg";
import dashboard from "@/assets/dashboard-mockup.jpg";
import exportImg from "@/assets/export-logistics.jpg";
import security from "@/assets/security-audit.jpg";
import smartFarm from "@/assets/smart-farming.jpg";
import farmTourism from "@/assets/farm-tourism.jpg";

import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { Reveal, Counter } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const GREEN = "#16a34a";
const GREEN_DARK = "#065f46";
const GREEN_LIGHT = "#86efac";

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0">
        <img
          src={heroFarm}
          alt="Aerial drone view of Georgian almond farm at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* floating chips */}
      <FloatingChips />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Agriculture · RWA · Blockchain · Georgia
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-emerald-950">
            Transforming{" "}
            <span className="text-gradient-green">Georgian Agriculture</span>{" "}
            into a Global Investment Opportunity
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-emerald-900/80">
            Blockchain-Powered Agriculture Asset Tokenization Platform
          </p>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-emerald-900/70">
            Tokenize almond farms, pista farms, agricultural land, crop revenues
            and export businesses to unlock global investment and recurring profits.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-emerald-700 transition"
            >
              Start Partnership <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-white transition"
            >
              Request Demo
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-white transition"
            >
              Investor Access
            </a>
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {[
              { k: "Farm Acreage", v: 250, suf: "+ acres" },
              { k: "Asset Valuation", v: 5, pre: "$", suf: "M" },
              { k: "Annual Yield", v: 800, pre: "$", suf: "K" },
              { k: "Token Holders", v: 10000, suf: "+" },
            ].map((s, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="glass rounded-2xl px-4 py-4">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-800">
                    <Counter to={s.v} prefix={s.pre ?? ""} suffix={s.suf ?? ""} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-emerald-700/70">{s.k}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChips() {
  const chips = [
    { top: "12%", left: "62%", label: "ALM Token", val: "$10.42", trend: "+4.1%" },
    { top: "30%", left: "78%", label: "PST Token", val: "$12.18", trend: "+7.6%" },
    { top: "60%", left: "70%", label: "LAND-G", val: "$8.90", trend: "+2.3%" },
  ];
  return (
    <div className="absolute inset-0 hidden lg:block pointer-events-none">
      {chips.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
          style={{ top: c.top, left: c.left }}
          className="absolute"
        >
          <div className="glass animate-float rounded-2xl px-4 py-3 shadow-glow">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                {c.label[0]}
              </div>
              <div>
                <div className="text-xs text-emerald-700/70">{c.label}</div>
                <div className="text-sm font-bold text-emerald-900">{c.val}</div>
              </div>
              <div className="text-xs font-semibold text-emerald-600">{c.trend}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------- SECTION HELPERS -------------------- */
function SectionHeader({
  tag, title, sub, light = false,
}: { tag: string; title: React.ReactNode; sub?: string; light?: boolean }) {
  return (
    <Reveal>
      <div className="mb-12 max-w-3xl">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
          light ? "border-emerald-300/30 bg-white/10 text-emerald-200" : "border-emerald-200 bg-emerald-50 text-emerald-700"
        }`}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {tag}
        </div>
        <h2 className={`mt-4 text-3xl sm:text-5xl font-bold leading-tight ${light ? "text-white" : "text-emerald-950"}`}>
          {title}
        </h2>
        {sub && (
          <p className={`mt-4 text-base sm:text-lg ${light ? "text-emerald-100/80" : "text-emerald-900/70"}`}>{sub}</p>
        )}
      </div>
    </Reveal>
  );
}

/* -------------------- PROBLEM -------------------- */
function Problem() {
  const items = [
    { icon: Banknote, t: "Limited Funding", d: "Banks rarely finance long-cycle agriculture without heavy collateral." },
    { icon: TrendingUp, t: "Slow Expansion", d: "Plantation growth is constrained by capex bottlenecks." },
    { icon: Globe2, t: "No Global Investors", d: "Geographic and legal friction blocks international capital." },
    { icon: MapPin, t: "Hard Land Monetization", d: "Agricultural land is illiquid and impossible to fractionalize." },
    { icon: AlertTriangle, t: "Seasonal Cash Flow", d: "Income concentrates around harvests, creating volatility." },
    { icon: Layers, t: "Zero Liquidity", d: "Once invested, exit options are extremely limited." },
  ];
  return (
    <section id="problem" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="The Problem"
          title={<>Agriculture is the world's <span className="text-gradient-green">most valuable</span> asset class — and the least accessible.</>}
          sub="Traditional farming faces structural barriers that block capital, growth and global participation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-emerald-100 bg-white p-7 transition hover:shadow-glow hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-emerald-950">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900/70">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SOLUTION -------------------- */
function Solution() {
  const flow = ["Farm Land", "Legal Verification", "Smart Contract", "Tokens", "Global Investors", "Profit Distribution"];
  return (
    <section id="solution" className="relative py-24 sm:py-32 bg-gradient-to-b from-emerald-50/70 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="The Solution"
          title={<>Agriculture <span className="text-gradient-green">RWA Tokenization</span> Platform</>}
          sub="Farms and agriculture businesses become blockchain-based digital assets. Anyone, anywhere can own a fraction — and earn from crop sales, land appreciation, exports and marketplace trading."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 shadow-glow">
              <img src={blockchainFarm} alt="Blockchain network over farmland" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { i: Leaf, t: "Crop Sales", d: "Direct share of annual almond & pista revenue." },
                { i: TrendingUp, t: "Land Appreciation", d: "Token value rises with farm valuation." },
                { i: Truck, t: "Export Revenue", d: "Recurring income from UAE, EU and global markets." },
                { i: Coins, t: "Marketplace Trading", d: "Liquidity for investors via on-chain order book." },
              ].map((x, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-5">
                  <div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <x.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-950">{x.t}</div>
                    <div className="text-sm text-emerald-900/70">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Flow */}
        <Reveal>
          <div className="mt-16 rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-6">Tokenization Flow</div>
            <div className="flex flex-wrap items-center gap-3">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-3 text-white text-sm font-semibold shadow-glow">
                    <span className="opacity-70 mr-2">0{i + 1}</span>{step}
                  </div>
                  {i < flow.length - 1 && <ArrowRight className="h-4 w-4 text-emerald-500" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- BUSINESS MODEL + CALCULATOR -------------------- */
function BusinessModel() {
  const [acres, setAcres] = useState(250);
  const [perAcre, setPerAcre] = useState(20000);
  const [tokenPrice, setTokenPrice] = useState(10);
  const farmValue = acres * perAcre;
  const tokens = Math.round(farmValue / tokenPrice);

  return (
    <section id="model" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Business Model"
          title={<>How <span className="text-gradient-green">Tokenization Math</span> Works</>}
          sub="Example: Almond + Pista Farm Tokenization. Each token represents fractional ownership of the agricultural project."
        />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Static example card */}
          <Reveal>
            <div className="h-full rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8">
              <div className="text-xs uppercase tracking-wider font-semibold text-emerald-700">Example Project</div>
              <div className="mt-2 text-3xl font-bold text-emerald-950">Almond + Pista Farm</div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["Farm Size", "250 Acres"],
                  ["Farm Value", "$5,000,000"],
                  ["Token Price", "$10"],
                  ["Total Tokens", "500,000"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-white border border-emerald-100 p-4">
                    <div className="text-xs uppercase tracking-wider text-emerald-700/70">{k}</div>
                    <div className="mt-1 text-xl font-bold text-emerald-900">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-900 text-white p-5 font-mono text-sm">
                <span className="opacity-70">Total Tokens =</span> Farm Value ÷ Token Price<br />
                <span className="opacity-70">$5,000,000 ÷ $10 =</span>{" "}
                <span className="font-bold text-emerald-300">500,000 Tokens</span>
              </div>
            </div>
          </Reveal>

          {/* Interactive calculator */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-emerald-200 bg-emerald-950 text-white p-8 shadow-glow">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-emerald-300" />
                <div className="text-xs uppercase tracking-wider font-semibold text-emerald-300">Live Token Calculator</div>
              </div>
              <div className="mt-6 space-y-5">
                <Slider label="Farm Size (Acres)" value={acres} min={50} max={1000} step={10} onChange={setAcres} format={(v)=>`${v} acres`}/>
                <Slider label="Land Value per Acre" value={perAcre} min={5000} max={50000} step={1000} onChange={setPerAcre} format={(v)=>`$${v.toLocaleString()}`}/>
                <Slider label="Token Price" value={tokenPrice} min={1} max={100} step={1} onChange={setTokenPrice} format={(v)=>`$${v}`}/>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Stat label="Farm Valuation" value={`$${farmValue.toLocaleString()}`} />
                <Stat label="Total Tokens" value={tokens.toLocaleString()} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Slider({ label, value, min, max, step, onChange, format }:{
  label:string; value:number; min:number; max:number; step:number; onChange:(v:number)=>void; format:(v:number)=>string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-emerald-200">{label}</span>
        <span className="font-semibold text-white">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e)=>onChange(parseInt(e.target.value))}
        className="mt-2 w-full accent-emerald-400"/>
    </div>
  );
}
function Stat({label,value}:{label:string;value:string}) {
  return (
    <div className="rounded-2xl border border-emerald-700/60 bg-emerald-900/60 p-4">
      <div className="text-[11px] uppercase tracking-wider text-emerald-300/80">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

/* -------------------- REVENUE STREAMS -------------------- */
function RevenueStreams() {
  return (
    <section id="revenue" className="relative py-24 sm:py-32 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          light
          tag="Client kaise paise kamaayega?"
          title={<>6 Powerful <span className="text-emerald-300">Revenue Streams</span> for the Farm Owner</>}
          sub="Upfront liquidity, recurring crop income, land appreciation, exports, marketplace fees and management revenue — all unlocked through tokenization."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <RevTokenSales />
          <RevCropSales />
          <RevAppreciation />
          <RevExport />
          <RevFarmTourism />
          <RevMarketplace />
          <RevManagement />
        </div>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-emerald-700/50 bg-emerald-900/40 backdrop-blur p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-300">Owner Outcome (Year 1 Example)</div>
              <div className="text-2xl sm:text-3xl font-bold mt-1">$3.5M upfront + $200K+ recurring profit + 30% retained ownership</div>
            </div>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 hover:bg-emerald-300 transition">
              Model My Farm <ArrowRight className="h-4 w-4"/>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RevCard({ idx, title, kicker, children }:{idx:string;title:string;kicker:string;children:React.ReactNode}) {
  return (
    <Reveal>
      <div className="glass-dark rounded-3xl p-7 h-full">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">{kicker}</div>
          <div className="text-emerald-300/60 font-mono text-sm">{idx}</div>
        </div>
        <h3 className="mt-2 text-2xl font-bold">{title}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </Reveal>
  );
}

function RevTokenSales() {
  const data = [
    { name: "Tokens Sold (70%)", value: 70 },
    { name: "Owner Retained (30%)", value: 30 },
  ];
  return (
    <RevCard idx="01" kicker="Revenue Stream" title="Token Sales — Upfront Capital">
      <div className="grid sm:grid-cols-2 gap-4 items-center">
        <div className="h-52">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                <Cell fill={GREEN_LIGHT}/>
                <Cell fill={GREEN}/>
              </Pie>
              <Tooltip contentStyle={{background:"#064e3b",border:"none",borderRadius:12,color:"#fff"}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-2 text-sm">
          <Li>Sell 70% tokens = <b>350,000</b></Li>
          <Li>Price <b>$10</b> each</Li>
          <Li>Funds raised <b className="text-emerald-300">$3.5M</b></Li>
          <Li>Retain <b>30%</b> ownership</Li>
        </ul>
      </div>
      <p className="mt-4 text-sm text-emerald-100/70">Massive upfront capital without selling the entire farm.</p>
    </RevCard>
  );
}

function RevCropSales() {
  const data = [
    { y: "Almond", revenue: 500 },
    { y: "Pista", revenue: 300 },
  ];
  return (
    <RevCard idx="02" kicker="Revenue Stream" title="Crop Sales — Annual Income">
      <div className="h-44">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#064e3b" strokeDasharray="3 3"/>
            <XAxis dataKey="y" stroke="#a7f3d0"/>
            <YAxis stroke="#a7f3d0" tickFormatter={(v)=>`$${v}K`}/>
            <Tooltip contentStyle={{background:"#064e3b",border:"none",borderRadius:12,color:"#fff"}} formatter={(v:number)=>[`$${v}K`,"Revenue"]}/>
            <Bar dataKey="revenue" fill={GREEN} radius={[10,10,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <Mini label="Total Rev" value="$800K"/>
        <Mini label="Net Profit" value="$400K"/>
        <Mini label="Investor Yield" value="~8%"/>
      </div>
    </RevCard>
  );
}

function RevAppreciation() {
  const data = Array.from({length:6}).map((_,i)=>({
    year:`Y${i}`, value: 5 + (3*i/5), token: 10 + (6*i/5),
  }));
  return (
    <RevCard idx="03" kicker="Revenue Stream" title="Land Value Appreciation">
      <div className="h-48">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GREEN_LIGHT} stopOpacity={0.9}/>
                <stop offset="100%" stopColor={GREEN} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#064e3b" strokeDasharray="3 3"/>
            <XAxis dataKey="year" stroke="#a7f3d0"/>
            <YAxis stroke="#a7f3d0" tickFormatter={(v)=>`$${v}M`}/>
            <Tooltip contentStyle={{background:"#064e3b",border:"none",borderRadius:12,color:"#fff"}} formatter={(v:number)=>[`$${v.toFixed(1)}M`,"Farm Value"]}/>
            <Area type="monotone" dataKey="value" stroke={GREEN_LIGHT} fill="url(#g1)" strokeWidth={3}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 text-sm text-emerald-100/80">
        Farm: <b>$5M → $8M</b> · Token: <b>$10 → $16</b> · Investor profit <b className="text-emerald-300">+60%</b>
      </div>
    </RevCard>
  );
}

function RevExport() {
  return (
    <RevCard idx="04" kicker="Revenue Stream" title="Export Business">
      <div className="rounded-2xl overflow-hidden border border-emerald-700/50">
        <img src={exportImg} alt="Export logistics ships at port" loading="lazy" width={1280} height={720} className="w-full h-40 object-cover"/>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
        {["Georgia","UAE","Europe","Global"].map((c,i,a)=>(
          <span key={c} className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1">{c}</span>
            {i<a.length-1 && <ArrowRight className="h-3 w-3 text-emerald-300"/>}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-emerald-100/70">Recurring international demand for almond and pista creates a hard-currency export engine.</p>
    </RevCard>
  );
}

function RevFarmTourism() {
  const features = [
    { icon: Building2, label: "Luxury Farm Stays" },
    { icon: Leaf, label: "Organic Tourism" },
    { icon: Users, label: "Experience Farming" },
    { icon: MapPin, label: "Horse Riding" },
    { icon: Sprout, label: "Vineyard Style" },
  ];
  return (
    <RevCard idx="05" kicker="Revenue Stream" title="Agro Tourism — Luxury Farm Stay">
      <div className="rounded-2xl overflow-hidden border border-emerald-700/50">
        <img src={farmTourism} alt="Luxury farm stay and agro tourism in Georgia" loading="lazy" width={1280} height={720} className="w-full h-40 object-cover"/>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 px-3 py-2 text-xs font-semibold">
            <f.icon className="h-3.5 w-3.5 text-emerald-300"/>
            {f.label}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 p-4">
        <div className="text-xs uppercase tracking-wider text-emerald-300">Estimated Recurring</div>
        <div className="text-2xl font-bold mt-1">$150K – $400K / year</div>
      </div>
      <p className="mt-3 text-sm text-emerald-100/70">Additional recurring income from eco-tourism, farm experiences and vineyard-style hospitality.</p>
    </RevCard>
  );
}

function RevMarketplace() {
  const data = Array.from({length:14}).map((_,i)=>({
    t:i, p: 10 + Math.sin(i/2)*1.2 + i*0.18,
  }));
  return (
    <RevCard idx="06" kicker="Revenue Stream" title="Marketplace Fees">
      <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/60 p-4">
        <div className="flex justify-between text-xs text-emerald-200">
          <div>ALM/USDT</div><div className="text-emerald-300">+5.4%</div>
        </div>
        <div className="h-36 mt-2">
          <ResponsiveContainer>
            <LineChart data={data}>
              <Line type="monotone" dataKey="p" stroke={GREEN_LIGHT} strokeWidth={2.5} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center mt-2">
          {["Buy 10.42","Sell 10.46","Vol 1.2M"].map(x=>(
            <div key={x} className="rounded-lg bg-emerald-800/60 py-1.5 text-xs font-mono">{x}</div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-emerald-100/70">Platform earns <b className="text-emerald-300">1–2%</b> on every secondary trade — perpetual revenue.</p>
    </RevCard>
  );
}

function RevManagement() {
  const items = [
    "Investor management fees",
    "Farm operations fees",
    "Annual maintenance",
    "Smart contract maintenance",
    "Compliance & reporting",
  ];
  return (
    <RevCard idx="07" kicker="Revenue Stream" title="Farm Management Fees">
      <ul className="space-y-2 text-sm">
        {items.map(i=>(<Li key={i}>{i}</Li>))}
      </ul>
      <div className="mt-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 p-4">
        <div className="text-xs uppercase tracking-wider text-emerald-300">Estimated Recurring</div>
        <div className="text-2xl font-bold mt-1">$100K – $500K / year</div>
      </div>
    </RevCard>
  );
}

function Li({children}:{children:React.ReactNode}) {
  return <li className="flex items-start gap-2 text-emerald-100/85"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0"/><span>{children}</span></li>;
}
function Mini({label,value}:{label:string;value:string}) {
  return (
    <div className="rounded-xl bg-emerald-800/40 border border-emerald-700/40 py-2">
      <div className="text-[10px] uppercase tracking-wider text-emerald-300">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}

/* -------------------- WHY INVESTORS -------------------- */
function WhyInvestors() {
  const reasons = [
    { i: ShieldCheck, t: "Real Asset-Backed" }, { i: Banknote, t: "Passive Income" },
    { i: Leaf, t: "Agriculture Stability" }, { i: Globe2, t: "Global Food Demand" },
    { i: Layers, t: "Fractional Ownership" }, { i: Network, t: "Blockchain Transparency" },
    { i: Wallet, t: "Low Entry" }, { i: TrendingUp, t: "High ROI" }, { i: Truck, t: "Export Driven" },
  ];
  const personas = [
    { t: "Dubai Investors", d: "Hard-asset diversification with USD/AED settlement.", emoji: "🇦🇪" },
    { t: "European Investors", d: "ESG-aligned agriculture exposure with EU compliance.", emoji: "🇪🇺" },
    { t: "Crypto Investors", d: "RWA yield uncorrelated with crypto volatility.", emoji: "₿" },
    { t: "Institutional", d: "Sovereign funds & family offices seeking ag exposure.", emoji: "🏛️" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Why Investors Will Invest"
          title={<>An <span className="text-gradient-green">irresistible</span> investment thesis.</>}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
          {reasons.map((r,i)=>(
            <Reveal key={r.t} delay={i*0.04}>
              <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-5 hover:shadow-glow transition">
                <r.i className="h-6 w-6 text-emerald-600"/>
                <div className="mt-3 font-semibold text-emerald-950">{r.t}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((p,i)=>(
            <Reveal key={p.t} delay={i*0.05}>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-950 text-white p-6 h-full">
                <div className="text-3xl">{p.emoji}</div>
                <div className="mt-3 text-lg font-bold">{p.t}</div>
                <div className="mt-1 text-sm text-emerald-100/70">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */
function Features() {
  const feats = [
    { i: BarChart3, t: "Investor Dashboard", d: "Real-time portfolio, yield & farm telemetry." },
    { i: Wallet, t: "Agriculture Token Wallet", d: "Custody, transfer and stake tokens." },
    { i: KeyRound, t: "KYC / AML", d: "Global compliance & accredited investor flows." },
    { i: FileCheck2, t: "Smart Contracts", d: "Audited ERC-3643 / ERC-20 RWA modules." },
    { i: Coins, t: "Revenue Distribution", d: "Automated profit streaming to holders." },
    { i: Network, t: "Investor Marketplace", d: "On-chain order book for secondary trading." },
    { i: Smartphone, t: "Mobile App", d: "iOS + Android portfolio companion." },
    { i: Users, t: "Admin Dashboard", d: "Operator console for farm & compliance." },
    { i: Satellite, t: "Satellite Monitoring", d: "Plot-level imagery & change detection." },
    { i: Cpu, t: "AI Crop Analytics", d: "Yield prediction & disease detection." },
    { i: Calculator, t: "ROI Calculator", d: "Scenario modeling for investors." },
    { i: Cloud, t: "Weather Analytics", d: "Hyperlocal climate & risk dashboards." },
    { i: Languages, t: "Multi-Language", d: "EN / KA / RU / AR / ES out of the box." },
    { i: CreditCard, t: "Crypto + Fiat", d: "Stablecoin, card and bank rail payments." },
    { i: Truck, t: "Export Tracking", d: "Container, lot and invoice traceability." },
    { i: MapPin, t: "Land Verification", d: "Cadastre integration & legal title proofs." },
  ];
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Platform Features"
          title={<>An end-to-end <span className="text-gradient-green">agritech + blockchain</span> operating system.</>}
        />
        <div className="grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-emerald-100 shadow-glow h-full">
              <img src={dashboard} alt="Investor dashboard mockup" loading="lazy" width={1280} height={896} className="w-full h-full object-cover"/>
            </div>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {feats.map((f,i)=>(
              <Reveal key={f.t} delay={i*0.02}>
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 hover:shadow-glow transition h-full">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <f.i className="h-5 w-5"/>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-950 text-sm">{f.t}</div>
                      <div className="text-xs text-emerald-900/70 mt-0.5">{f.d}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECURITY -------------------- */
function Security() {
  const checks = [
    "Smart contract static analysis",
    "Formal verification of token math",
    "Penetration testing of API & dashboards",
    "Bug bounty & responsible disclosure",
    "Compliance review (KYC/AML/MiCA)",
    "Continuous monitoring & alerting",
  ];
  return (
    <section id="security" className="relative py-24 sm:py-32 bg-emerald-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={security} alt="Cybersecurity shield over blockchain" loading="lazy" className="h-full w-full object-cover" width={1280} height={896}/>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/70 to-transparent"/>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          light
          tag="Security Audit"
          title={<>Institutional-grade <span className="text-emerald-300">security</span> is non-negotiable.</>}
          sub="Audited platforms attract institutional and international investors faster. We protect funds, prevent exploits and build durable trust."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-dark rounded-3xl p-7">
              <div className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Why audit matters</div>
              <ul className="mt-5 space-y-3 text-emerald-100/90 text-sm">
                <Li>Protect investor funds & reputation</Li>
                <Li>Prevent smart contract hacks</Li>
                <Li>Build investor trust & faster fundraising</Li>
                <Li>Ensure blockchain & infrastructure security</Li>
                <Li>Eliminate logical & economic vulnerabilities</Li>
                <Li>Improve regulatory compliance posture</Li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-dark rounded-3xl p-7">
              <div className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Audit Flow</div>
              <ol className="mt-5 space-y-3">
                {checks.map((c,i)=>(
                  <li key={c} className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-xs">
                      {String(i+1).padStart(2,"0")}
                    </div>
                    <span className="text-emerald-100/90 text-sm">{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  const plans = [
    {
      name: "Basic Platform",
      price: "$40K – $60K",
      tag: "Without Audit",
      time: "3–4 Months",
      features: ["Agriculture tokenization platform","Investor dashboard","Basic smart contracts","Admin panel","Web platform"],
    },
    {
      name: "Advanced Platform",
      price: "$80K – $120K",
      tag: "Most Popular",
      time: "5–7 Months",
      featured: true,
      features: ["Marketplace","Mobile app","AI analytics","Multi-chain support","Revenue distribution","KYC/AML","Export module"],
    },
    {
      name: "Enterprise Platform",
      price: "$150K – $250K",
      tag: "With Security Audit",
      time: "6–9 Months",
      features: ["Full enterprise ecosystem","Audited smart contracts","Penetration testing","AI-powered analytics","Investor marketplace","Export management","Advanced compliance","Dedicated support"],
    },
  ];
  const audits = [
    { name: "Basic Audit", price: "$8K – $15K" },
    { name: "Advanced Audit", price: "$20K – $40K" },
    { name: "Enterprise Audit", price: "$50K – $100K+" },
  ];
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Engagement & Pricing"
          title={<>Software Development <span className="text-gradient-green">Pricing</span></>}
          sub="Transparent, milestone-based delivery. Choose the scope that matches your stage."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p)=>(
            <Reveal key={p.name}>
              <div className={`relative h-full rounded-3xl p-8 border ${
                p.featured
                  ? "bg-emerald-950 text-white border-emerald-700 shadow-glow"
                  : "bg-white border-emerald-100"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-8 rounded-full bg-emerald-400 text-emerald-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    {p.tag}
                  </div>
                )}
                <div className={`text-xs uppercase tracking-wider font-semibold ${p.featured?"text-emerald-300":"text-emerald-700"}`}>
                  {p.featured ? "Recommended" : p.tag}
                </div>
                <div className="mt-2 text-2xl font-bold">{p.name}</div>
                <div className={`mt-4 text-3xl font-extrabold ${p.featured?"text-emerald-300":"text-emerald-700"}`}>{p.price}</div>
                <div className={`text-sm ${p.featured?"text-emerald-200/80":"text-emerald-900/60"}`}>Timeline: {p.time}</div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map(f=>(
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 ${p.featured?"text-emerald-300":"text-emerald-600"}`}/>
                      <span className={p.featured?"text-emerald-100/90":"text-emerald-900/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                  p.featured ? "bg-emerald-400 text-emerald-950 hover:bg-emerald-300" : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}>Request Proposal</a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-emerald-700">Security Audit Cost</div>
                <h3 className="mt-1 text-2xl font-bold text-emerald-950">Independent audits, priced by complexity</h3>
              </div>
              <div className="text-sm text-emerald-900/70 max-w-md">
                Security audit pricing depends on smart contract complexity and blockchain infrastructure.
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {audits.map(a=>(
                <div key={a.name} className="rounded-2xl bg-white border border-emerald-100 p-5">
                  <div className="text-sm text-emerald-700 font-semibold">{a.name}</div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-950">{a.price}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- FUTURE -------------------- */
function Future() {
  const items = [
    { i: Leaf, t: "Carbon Credit Tokenization" },
    { i: Sprout, t: "Organic Farming Investments" },
    { i: Cloud, t: "Water Resource Tokenization" },
    { i: Banknote, t: "Agriculture Lending" },
    { i: ShieldCheck, t: "Crop Insurance Integration" },
    { i: Globe2, t: "Global Agriculture Marketplace" },
  ];
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={smartFarm} alt="Smart farming with drones" className="h-full w-full object-cover" loading="lazy" width={1920} height={1080}/>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white"/>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Future Expansion"
          title={<>The roadmap to a <span className="text-gradient-green">$10B agritech ecosystem</span>.</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((x,i)=>(
            <Reveal key={x.t} delay={i*0.05}>
              <div className="rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur p-6 hover:shadow-glow transition">
                <x.i className="h-7 w-7 text-emerald-600"/>
                <div className="mt-3 text-lg font-semibold text-emerald-950">{x.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- RECURRING REVENUE -------------------- */
function Recurring() {
  const data = Array.from({length:12}).map((_,i)=>{
    const m = i+1;
    return { m: `M${m}`, rev: Math.round(80 + Math.pow(m,1.6)*9) };
  });
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="Recurring Revenue Model"
          title={<>Projected platform revenue: <span className="text-gradient-green">$1M – $10M+</span> annually.</>}
          sub="Marketplace trading fees, token issuance, annual maintenance, investor subscriptions, asset onboarding and export commissions — compounding monthly."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 h-full">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-emerald-700">Monthly Platform Revenue (Projected)</div>
                <div className="text-xs text-emerald-900/60">USD, thousands</div>
              </div>
              <div className="h-72 mt-4">
                <ResponsiveContainer>
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={GREEN} stopOpacity={0.7}/>
                        <stop offset="100%" stopColor={GREEN} stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#d1fae5" strokeDasharray="3 3"/>
                    <XAxis dataKey="m" stroke="#065f46"/>
                    <YAxis stroke="#065f46" tickFormatter={(v)=>`$${v}K`}/>
                    <Tooltip formatter={(v:number)=>[`$${v}K`,"Revenue"]}/>
                    <Area type="monotone" dataKey="rev" stroke={GREEN_DARK} strokeWidth={3} fill="url(#rg)"/>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-950 text-white p-7 h-full">
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Revenue Mix</div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Marketplace trading fees","32%"],
                  ["Token issuance fees","22%"],
                  ["Annual maintenance","14%"],
                  ["Investor subscriptions","12%"],
                  ["Asset onboarding","10%"],
                  ["Export commissions","10%"],
                ].map(([n,p])=>(
                  <li key={n}>
                    <div className="flex justify-between"><span className="text-emerald-100/80">{n}</span><span className="font-bold">{p}</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-emerald-900 overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{width:p}}/>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={pista} alt="Pistachio close up" className="h-full w-full object-cover" loading="lazy" width={1280} height={896}/>
        <div className="absolute inset-0 bg-emerald-950/85"/>
        <div className="absolute inset-0 bg-grid opacity-10"/>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200">
          <BadgeCheck className="h-3.5 w-3.5"/> Investor-Ready Proposal
        </div>
        <h2 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
          Build the Future of <span className="text-emerald-300">Agriculture Investment</span> in Georgia
        </h2>
        <p className="mt-5 text-emerald-100/80 text-lg max-w-2xl mx-auto">
          Partner with bitdecentro to launch a regulated, audited and globally accessible Agriculture RWA Tokenization Platform.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-6 py-3 text-sm font-bold hover:bg-emerald-300 transition">
            Start Partnership <ArrowRight className="h-4 w-4"/>
          </a>
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
            Schedule Meeting
          </a>
          <a href="mailto:partnerships@bitdecentro.com" className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition">
            Request Proposal
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Logo className="h-9"/>
          <p className="mt-4 text-sm text-emerald-900/70 max-w-xs">
            Tokenizing real-world agricultural assets in Georgia and beyond.
          </p>
        </div>
        {[
          { t: "Platform", l: ["Investor Dashboard","Marketplace","Mobile App","Smart Contracts"] },
          { t: "Company", l: ["About","Partnerships","Compliance","Contact"] },
          { t: "Resources", l: ["Whitepaper","Audit Reports","Tokenomics","Roadmap"] },
        ].map(c=>(
          <div key={c.t}>
            <div className="text-sm font-bold text-emerald-950">{c.t}</div>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900/70">
              {c.l.map(x=><li key={x}><a className="hover:text-emerald-700" href="#cta">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-900/60">
          <div>© {new Date().getFullYear()} bitdecentro. All rights reserved.</div>
          <div className="flex items-center gap-2"><Building2 className="h-3.5 w-3.5"/> Tbilisi · Dubai · Global</div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- PAGE -------------------- */
function Index() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <BusinessModel />
        <RevenueStreams />
        <WhyInvestors />
        <Features />
        <Security />
        <Pricing />
        <Future />
        <Recurring />
        <FinalCTA />
        {/* Georgia land visual band */}
        <section aria-hidden="true" className="relative h-64 overflow-hidden">
          <img src={georgia} alt="Georgian agricultural land" loading="lazy" className="h-full w-full object-cover" width={1280} height={896}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
