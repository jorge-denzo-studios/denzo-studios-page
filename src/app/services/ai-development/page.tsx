"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceFeatureCard from "@/components/ServiceFeatureCard";
import {
  ClipboardList,
  Database,
  BrainCircuit,
  Plug,
  Activity,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";

const strategies = [
  {
    icon: ClipboardList,
    iconBg: "bg-[#00f0ff]/10 border-[#00f0ff]/20",
    iconColor: "text-[#0097a7] dark:text-[#00f0ff]",
    title: "Needs Assessment & Solution Mapping",
    description:
      "We start by understanding your business challenges and opportunities for AI implementation. Whether it's automating tasks, analyzing large datasets, or building customer-facing AI tools, we define the most impactful solution for your goals.",
  },
  {
    icon: Database,
    iconBg: "bg-[#007AFF]/10 border-[#007AFF]/20",
    iconColor: "text-[#007AFF]",
    title: "Data Strategy & Preparation",
    description:
      "AI is only as powerful as the data it's built on. We help collect, clean, and structure your data to train accurate, high-performance models. Don't have existing data? We help you build a strategy to gather what's needed.",
  },
  {
    icon: BrainCircuit,
    iconBg: "bg-[#BF5AF2]/10 border-[#BF5AF2]/20",
    iconColor: "text-[#BF5AF2]",
    title: "Model Development & Training",
    description:
      "Our team builds machine-learning models tailored to your needs — NLP, computer vision, recommendation engines, or predictive analytics. We test and iterate models to ensure performance, accuracy, and reliability.",
  },
  {
    icon: Plug,
    iconBg: "bg-[#FF9500]/10 border-[#FF9500]/20",
    iconColor: "text-[#FF9500]",
    title: "System Integration & Deployment",
    description:
      "We integrate AI capabilities into your existing platforms or build end-to-end solutions — chatbots, internal automation tools, or customer-facing apps. Seamless, secure, and scalable deployment every time.",
  },
  {
    icon: Activity,
    iconBg: "bg-[#34C759]/10 border-[#34C759]/20",
    iconColor: "text-[#34C759]",
    title: "Monitoring & Optimization",
    description:
      "Systems evolve — and so do we. We continuously monitor, fine-tune, and retrain models to ensure your AI keeps learning, improving, and delivering real value over time as your business grows.",
  },
];

const pillars = [
  {
    title: "Business-Driven Technology",
    description:
      "We don't build AI for its own sake. Every solution is designed around a clear business objective — whether that's reducing costs, accelerating workflows, or unlocking new revenue streams.",
    accent: "#00f0ff",
  },
  {
    title: "Cross-Industry Expertise",
    description:
      "From e-commerce and healthcare to finance and professional services, our team brings deep domain knowledge that translates AI capabilities into industry-specific wins.",
    accent: "#007AFF",
  },
  {
    title: "Agile Development",
    description:
      "We follow an iterative, agile approach that delivers working AI features fast and adapts continuously to your feedback — so you're never waiting months for results.",
    accent: "#BF5AF2",
  },
  {
    title: "Ethical AI Standards",
    description:
      "We build AI that is transparent, fair, and responsible. Our models are designed with bias detection, explainability, and data privacy baked in from the start.",
    accent: "#34C759",
  },
];

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Extended image – right half, bleeds to edge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block"
        >
          <img
            src="/hero-ai-dev.png"
            alt="AI development dashboard with neural network visualization"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

          {/* Floating metric pills */}
          <div className="absolute top-1/3 left-16 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_8px_#00f0ff]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">
              AI Accuracy 98.7%
            </span>
          </div>
          <div className="absolute bottom-1/3 right-10 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#BF5AF2] animate-pulse shadow-[0_0_8px_#BF5AF2]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">
              Ops Automated 3×
            </span>
          </div>
        </motion.div>

        {/* Ambient glow behind text */}
        <div className="absolute top-0 left-0 w-[50vw] h-[70vh] bg-gradient-to-br from-[#00f0ff]/10 via-[#007AFF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 backdrop-blur-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0097a7] dark:text-[#00f0ff]">
                AI Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#007AFF] to-[#BF5AF2] text-transparent bg-clip-text">
                Intelligent
              </span>
              <br />
              <span className="text-foreground">Solutions.</span>
              <br />
              <span className="text-foreground">Real Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-black/70 dark:text-white/50 max-w-lg font-light tracking-tight mb-10 leading-relaxed"
            >
              Custom AI solutions that{" "}
              <span className="font-semibold text-[#0097a7] dark:text-[#00f0ff]">
                automate processes, enhance experiences,
              </span>{" "}
              and unlock powerful insights — designed specifically around your business goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:8332002676"
                className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-full font-bold text-sm overflow-hidden md:inline-flex md:w-auto md:justify-start md:gap-4 md:px-8 md:py-4 lg:px-10 lg:py-5 md:text-lg transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(0,240,255,0.15)] hover:shadow-[0_0_50px_rgba(0,240,255,0.35)] bg-[#1c1c1e] dark:bg-black/40 backdrop-blur-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,240,255,0.2),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-[#00f0ff]/50 pointer-events-none" />
                <span className="relative z-10 text-white tracking-wide whitespace-nowrap">BUILD YOUR AI SOLUTION</span>
                <span className="relative z-10 shrink-0 px-3 py-1.5 rounded-full whitespace-nowrap bg-[#00f0ff]/15 text-[#0097a7] dark:text-[#00f0ff] text-sm font-semibold border border-[#00f0ff]/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                  833-200-2676
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY AI ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#0097a7] dark:text-[#00f0ff]">
                Why Invest in AI?
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
              AI is reshaping{" "}
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#BF5AF2] text-transparent bg-clip-text">
                every industry.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl text-[#3A3A3C] dark:text-white/50 font-light leading-relaxed">
              <p>
                Artificial Intelligence is no longer a futuristic concept — it&apos;s a{" "}
                <span className="font-semibold text-[#0097a7] dark:text-[#00f0ff]">game-changer</span> reshaping industries
                today. From customer service automation and personalized marketing to operational efficiency
                and smart data analysis, AI enables faster, smarter, and more cost-effective business
                operations.
              </p>
              <p>
                With custom AI solutions, your business can streamline workflows, reduce human error, and
                deliver real-time value at scale. At Denzo Studios, we approach AI not just as a technology,
                but as a{" "}
                <span className="font-semibold text-[#BF5AF2]">business enabler</span> — focused on solving
                real-world problems with scalable, intelligent solutions.
              </p>
            </div>
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
              <div className="w-2 h-2 rounded-full bg-[#007AFF] shadow-[0_0_8px_#007AFF]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#007AFF]">
                Our Process
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              Our AI Development{" "}
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#007AFF] to-[#BF5AF2] text-transparent bg-clip-text">
                Strategy.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#3A3A3C] dark:text-white/40 font-light tracking-tight leading-relaxed max-w-2xl"
            >
              Our AI development process is fully customized, focused on solving real-world problems with
              scalable, intelligent solutions — from concept to deployment and beyond.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* First 3 cards in a row */}
            {strategies.slice(0, 3).map((s, i) => (
              <ServiceFeatureCard key={i} {...s} delay={i * 0.08} />
            ))}
            {/* Last 2 cards centered */}
            {strategies.slice(3).map((s, i) => (
              <ServiceFeatureCard key={i + 3} {...s} delay={(i + 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DENZO FOR AI ──────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#BF5AF2] shadow-[0_0_8px_#BF5AF2]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#BF5AF2]">
                Why Denzo
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              The AI partner built{" "}
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#BF5AF2] text-transparent bg-clip-text">
                for your business.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-10 group cursor-default hover:bg-[#EAEAEF] dark:hover:bg-white/[0.05] transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 dark:via-white/5 to-transparent -translate-y-[200%] group-hover:animate-scan opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div
                    className="w-1 h-8 rounded-full mb-6"
                    style={{ backgroundColor: p.accent, boxShadow: `0 0 12px ${p.accent}` }}
                  />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#1C1C1E] dark:text-white">
                    {p.title}
                  </h3>
                  <p className="text-[#3A3A3C] dark:text-white/40 font-normal leading-relaxed text-[15px]">
                    {p.description}
                  </p>
                </div>
              </motion.div>
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00f0ff]/15 via-[#007AFF]/10 to-[#BF5AF2]/15 border border-[#00f0ff]/20 p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,240,255,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(191,90,242,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#0097a7] dark:text-[#00f0ff]">
                  Power Your Business
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
                Turn Data into{" "}
                <span className="bg-gradient-to-r from-[#00f0ff] to-[#BF5AF2] text-transparent bg-clip-text">
                  Decisions.
                </span>
              </h2>
              <p className="text-xl text-[#3A3A3C] dark:text-white/60 font-light leading-relaxed mb-10">
                Denzo Studios delivers impactful AI solutions by focusing on business-driven technology,
                cross-industry expertise, agile development, and strict ethical standards — empowering your
                business to automate, scale, and make data-informed decisions for future growth.
              </p>
              <a
                href="tel:8332002676"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#007AFF] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0066d6] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(0,122,255,0.4)]"
              >
                Start Your AI Project
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
