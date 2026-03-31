"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceFeatureCard from "@/components/ServiceFeatureCard";
import { Palette, Users, BarChart2, Target } from "lucide-react";

const strategies = [
  {
    icon: Palette,
    iconBg: "bg-[#BF5AF2]/10 border-[#BF5AF2]/20",
    iconColor: "text-[#BF5AF2]",
    title: "High-Impact Creative",
    description:
      "Compelling ad creatives that captivate your target audience across Facebook, Instagram, and Meta's entire advertising network. Every visual is crafted to stop the scroll and drive action.",
  },
  {
    icon: Users,
    iconBg: "bg-[#0668E1]/10 border-[#0668E1]/20",
    iconColor: "text-[#0668E1]",
    title: "Intelligent Audience Segmentation",
    description:
      "Using Meta's advanced targeting capabilities — demographics, interests, and lookalike audiences — we connect your message with users who demonstrate the highest propensity to engage and convert.",
  },
  {
    icon: BarChart2,
    iconBg: "bg-[#FF2D55]/10 border-[#FF2D55]/20",
    iconColor: "text-[#FF2D55]",
    title: "Strategic Budget Management",
    description:
      "Every dollar is allocated with precision. We optimize your budget distribution across campaigns, ad sets, and placements to maximize your return on ad spend (ROAS) consistently.",
  },
  {
    icon: Target,
    iconBg: "bg-[#34C759]/10 border-[#34C759]/20",
    iconColor: "text-[#34C759]",
    title: "Clear Campaign Objectives",
    description:
      "From brand awareness to conversion campaigns, we align your Meta advertising with clear, measurable business objectives — ensuring every campaign moves the needle toward real growth.",
  },
];

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Extended image – left half, bleeds to edge */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block"
        >
          <img
            src="/hero-meta-ads.png"
            alt="Meta Ads professional dashboard"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient fade into page background on right edge */}
          <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
          {/* Subtle top/bottom fade */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

          {/* Floating metric pills */}
          <div className="absolute top-1/3 right-20 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#BF5AF2] animate-pulse shadow-[0_0_8px_#BF5AF2]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">ROAS +320%</span>
          </div>
          <div className="absolute bottom-1/3 left-10 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0668E1] animate-pulse shadow-[0_0_8px_#0668E1]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">Reach +2.4M</span>
          </div>
        </motion.div>

        {/* Ambient glow behind text */}
        <div className="absolute top-0 right-0 w-[50vw] h-[70vh] bg-gradient-to-bl from-[#BF5AF2]/10 via-[#0668E1]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Text content – right side */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#BF5AF2]/30 bg-[#BF5AF2]/5 backdrop-blur-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#BF5AF2] shadow-[0_0_10px_#BF5AF2]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#BF5AF2]">
                Meta Ads
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="bg-gradient-to-r from-[#BF5AF2] via-[#0668E1] to-[#FF2D55] text-transparent bg-clip-text">
                Beyond
              </span>
              <br />
              <span className="text-foreground">Exposure.</span>
              <br />
              <span className="bg-gradient-to-r from-[#0668E1] to-[#BF5AF2] text-transparent bg-clip-text">
                Impact at Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-black/70 dark:text-white/50 max-w-lg font-light tracking-tight mb-10 leading-relaxed"
            >
              Meta&apos;s advertising system connects your ads with the people most likely to find them{" "}
              <span className="font-semibold text-[#BF5AF2]">interesting and valuable</span> — translating
              into greater relevance and better results for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:8332002676"
                className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-full font-bold text-sm overflow-hidden md:inline-flex md:w-auto md:justify-start md:gap-4 md:px-8 md:py-4 lg:px-10 lg:py-5 md:text-lg transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(191,90,242,0.15)] hover:shadow-[0_0_50px_rgba(191,90,242,0.35)] bg-[#1c1c1e] dark:bg-black/40 backdrop-blur-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(191,90,242,0.25),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-[#BF5AF2]/50 pointer-events-none" />
                <span className="relative z-10 text-white tracking-wide whitespace-nowrap">REQUEST A DEMO</span>
                <span className="relative z-10 shrink-0 px-3 py-1.5 rounded-full whitespace-nowrap bg-[#BF5AF2]/15 text-[#BF5AF2] text-sm font-semibold border border-[#BF5AF2]/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BF5AF2] animate-pulse" />
                  833-200-2676
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BEYOND EXPOSURE ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#BF5AF2]/20 bg-[#BF5AF2]/5">
              <div className="w-2 h-2 rounded-full bg-[#BF5AF2] shadow-[0_0_8px_#BF5AF2]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#BF5AF2]">
                Beyond Exposure
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
              An optimized{" "}
              <span className="bg-gradient-to-r from-[#BF5AF2] to-[#0668E1] text-transparent bg-clip-text">
                advertising experience.
              </span>
            </h2>
            <p className="text-xl text-[#3A3A3C] dark:text-white/50 font-light leading-relaxed max-w-3xl">
              At the core of Meta&apos;s advertising system lies a smart auction — but its objective goes far
              beyond simply who pays the most. Its true mission is to connect your ads with the people most
              likely to find them interesting and valuable. By prioritizing a high-quality user experience,
              Meta ensures your content isn&apos;t just seen, but well-received — translating into greater
              weight in the auction and ultimately better results for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STRATEGY GRID ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]"
            >
              <div className="w-2 h-2 rounded-full bg-[#0668E1] shadow-[0_0_8px_#0668E1]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#0668E1]">
                Our Strategy
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              Connecting with{" "}
              <span className="bg-gradient-to-r from-[#BF5AF2] via-[#0668E1] to-[#FF2D55] text-transparent bg-clip-text">
                Precision &amp; Impact.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#3A3A3C] dark:text-white/40 font-light tracking-tight leading-relaxed max-w-2xl"
            >
              Meta&apos;s advertising system represents a fundamental evolution in how brands connect with
              their audience — an intelligent matching process designed to go beyond mere exposure.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strategies.map((s, i) => (
              <ServiceFeatureCard key={i} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#BF5AF2]/20 via-[#0668E1]/10 to-[#FF2D55]/10 border border-[#BF5AF2]/20 p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,104,225,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_80%,rgba(191,90,242,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#BF5AF2]/30 bg-[#BF5AF2]/5">
                <div className="w-2 h-2 rounded-full bg-[#BF5AF2] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#BF5AF2]">
                  Maximize ROI
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
                Invest with Confidence.
              </h2>
              <p className="text-xl text-[#3A3A3C] dark:text-white/60 font-light leading-relaxed mb-10">
                Investing in advertising on Meta is conceived as an optimized strategy to maximize return on
                investment. By effectively integrating high-impact creative, intelligently segmented
                audiences, strategic budget management, and clear objectives, Meta works tirelessly to
                optimize your outcomes while maintaining a relevant and positive advertising experience.
              </p>
              <a
                href="tel:8332002676"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#BF5AF2] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#a84ad9] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(191,90,242,0.4)]"
              >
                Start Your Campaign
                <span className="opacity-60">→</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  833-200-2676
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
