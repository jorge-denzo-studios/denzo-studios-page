"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceFeatureCard from "@/components/ServiceFeatureCard";
import {
  Compass,
  Code2,
  Smartphone,
  SearchCode,
  Store,
  MousePointerClick,
  MessageSquare,
  Wrench,
  Layers,
} from "lucide-react";

const INDIGO  = "#4F46E5";
const BLUE    = "#3B82F6";
const CYAN    = "#06B6D4";

const process = [
  {
    icon: Compass,
    iconBg: "bg-[#4F46E5]/10 border-[#4F46E5]/20",
    iconColor: "text-[#4F46E5]",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your brand, goals, and audience. Through research and strategy sessions, we define your website purpose, desired features, and target user journey — ensuring the final product is goal-driven and user-focused.",
  },
  {
    icon: Layers,
    iconBg: "bg-[#3B82F6]/10 border-[#3B82F6]/20",
    iconColor: "text-[#3B82F6]",
    title: "UX/UI Design",
    description:
      "Our design team creates wireframes and mockups that are both visually stunning and intuitive to navigate. We focus on smooth user experiences with clear CTAs, clean design, and layouts that guide users exactly where you want them.",
  },
  {
    icon: Code2,
    iconBg: "bg-[#06B6D4]/10 border-[#06B6D4]/20",
    iconColor: "text-[#06B6D4]",
    title: "Custom Development & CMS",
    description:
      "From HTML/CSS and JavaScript to WordPress, Webflow, or Shopify, we tailor every build to your specific needs — fully custom-coded or CMS-integrated, ensuring scalability, flexibility, and high performance.",
  },
  {
    icon: Smartphone,
    iconBg: "bg-[#4F46E5]/10 border-[#4F46E5]/20",
    iconColor: "text-[#4F46E5]",
    title: "Mobile Optimization & Speed",
    description:
      "Every site we build is fully responsive and optimized for speed. We ensure your website looks and functions flawlessly on all devices — smartphones, tablets, and desktops — with exceptional load times.",
  },
  {
    icon: SearchCode,
    iconBg: "bg-[#3B82F6]/10 border-[#3B82F6]/20",
    iconColor: "text-[#3B82F6]",
    title: "SEO Foundation & Audit",
    description:
      "Before launch, we conduct a full SEO audit — ensuring your site is indexed correctly, loads fast, and is structured for discoverability. Key on-page SEO elements are implemented to drive strong organic visibility from day one.",
  },
  {
    icon: Store,
    iconBg: "bg-[#06B6D4]/10 border-[#06B6D4]/20",
    iconColor: "text-[#06B6D4]",
    title: "Tailored Industry Solutions",
    description:
      "From service-based startups to complex e-commerce stores, we've delivered websites across multiple industries. We understand each niche's unique requirements and design solutions that speak directly to your audience.",
  },
  {
    icon: MousePointerClick,
    iconBg: "bg-[#4F46E5]/10 border-[#4F46E5]/20",
    iconColor: "text-[#4F46E5]",
    title: "Conversion-Focused Design",
    description:
      "We build websites that do more than look good — they perform. Every page layout, form, and call-to-action is crafted with conversions in mind, turning your visitors into qualified leads and loyal customers.",
  },
  {
    icon: MessageSquare,
    iconBg: "bg-[#3B82F6]/10 border-[#3B82F6]/20",
    iconColor: "text-[#3B82F6]",
    title: "Transparent Communication",
    description:
      "We keep you in the loop throughout every development phase — ensuring the project stays on track and aligned with your vision. No surprises, no hidden changes. Just great results delivered on time.",
  },
  {
    icon: Wrench,
    iconBg: "bg-[#06B6D4]/10 border-[#06B6D4]/20",
    iconColor: "text-[#06B6D4]",
    title: "Post-Launch Support",
    description:
      "Even after launch, we've got your back. Our team offers ongoing maintenance, updates, and technical support to keep your site running smoothly, securely, and performing at its best.",
  },
];

const pillars = [
  {
    title: "High-Performance Builds",
    description:
      "Speed, scalability, and security are non-negotiable. Every site we deliver is optimized at the code level — ensuring fast load times, clean architecture, and rock-solid performance under any traffic load.",
    accent: INDIGO,
  },
  {
    title: "Strategic Digital Tool",
    description:
      "Your website isn't just a brochure — it's a strategic business asset. We build with your growth goals in mind, aligning every design and development decision to drive measurable business outcomes.",
    accent: BLUE,
  },
  {
    title: "Full-Service Expertise",
    description:
      "From branding and UX design to development, SEO, and post-launch support — we handle every phase in-house. One team, one vision, one seamless experience from concept to live site.",
    accent: CYAN,
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Extended image – LEFT side (mirrored layout) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block"
        >
          <img
            src="/hero-web-dev.png"
            alt="Web developer with code editor and modern website design"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

          {/* Floating metric pills */}
          <div className="absolute top-1/3 right-20 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5] animate-pulse shadow-[0_0_8px_#4F46E5]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">100 PageSpeed</span>
          </div>
          <div className="absolute bottom-1/3 left-10 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_8px_#06B6D4]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">Conv. +240%</span>
          </div>
        </motion.div>

        {/* Ambient glow – right side */}
        <div className="absolute top-0 right-0 w-[50vw] h-[70vh] bg-gradient-to-bl from-[#4F46E5]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Text content – RIGHT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/5 backdrop-blur-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#4F46E5] shadow-[0_0_10px_#4F46E5]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#3730a3] dark:text-[#818CF8]">
                Website Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">
                Sites That
              </span>
              <br />
              <span className="text-foreground">Perform.</span>
              <br />
              <span className="text-foreground">Convert.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-black/70 dark:text-white/50 max-w-lg font-light tracking-tight mb-10 leading-relaxed"
            >
              We don&apos;t just create websites — we craft{" "}
              <span className="font-semibold text-[#3730a3] dark:text-[#6366F1]">
                high-performing digital experiences
              </span>{" "}
              that elevate your brand, engage visitors, and convert them into loyal customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:8332002676"
                className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-full font-bold text-sm overflow-hidden md:inline-flex md:w-auto md:justify-start md:gap-4 md:px-8 md:py-4 lg:px-10 lg:py-5 md:text-lg transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(79,70,229,0.15)] hover:shadow-[0_0_50px_rgba(79,70,229,0.35)] bg-[#1c1c1e] dark:bg-black/40 backdrop-blur-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.22),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-[#4F46E5]/50 pointer-events-none" />
                <span className="relative z-10 text-white tracking-wide whitespace-nowrap">BUILD MY WEBSITE</span>
                <span className="relative z-10 shrink-0 px-3 py-1.5 rounded-full whitespace-nowrap bg-[#4F46E5]/15 text-[#818CF8] text-sm font-semibold border border-[#4F46E5]/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-pulse" />
                  833-200-2676
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO GLASS PANEL ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#4F46E5]/20 bg-[#4F46E5]/5">
              <div className="w-2 h-2 rounded-full bg-[#4F46E5] shadow-[0_0_8px_#4F46E5]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#3730a3] dark:text-[#818CF8]">
                Why It Matters
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
              Your website is your{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">
                most powerful business tool.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl text-[#3A3A3C] dark:text-white/50 font-light leading-relaxed">
              <p>
                At Denzo Studios, we don&apos;t just create websites — we craft high-performing digital
                experiences that elevate your brand and drive real business growth. Whether you need a sleek
                portfolio, a{" "}
                <span className="font-semibold text-[#3730a3] dark:text-[#6366F1]">
                  high-converting eCommerce platform,
                </span>{" "}
                or a custom-built web application, we have the expertise to bring your vision to life.
              </p>
              <p>
                Our website development process is rooted in creativity, data, and performance. With Denzo
                Studios, you don&apos;t just get a website — you get a{" "}
                <span className="font-semibold text-[#06B6D4]">strategic digital tool</span> built to grow
                your business, strengthen your brand, and support your long-term goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS GRID ──────────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#3B82F6]">
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
              Our Development{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">
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
              A proven, structured approach from discovery to post-launch — every step designed to deliver a
              site that performs as great as it looks.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((s, i) => (
              <ServiceFeatureCard key={i} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DENZO ─────────────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#0e7490] dark:text-[#06B6D4]">
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
              Built to grow{" "}
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
                your business.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4F46E5]/15 via-[#3B82F6]/10 to-[#06B6D4]/15 border border-[#4F46E5]/20 p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(79,70,229,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/5">
                <div className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#3730a3] dark:text-[#818CF8]">
                  Ready to Build?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
                Your digital presence,{" "}
                <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">
                  engineered to grow.
                </span>
              </h2>
              <p className="text-xl text-[#3A3A3C] dark:text-white/60 font-light leading-relaxed mb-10">
                Whether you need a sleek portfolio, a high-converting eCommerce platform, or a fully custom
                web application — Denzo Studios has the expertise to bring your vision to life. Get in touch
                today and discover how our website development services can elevate your business to new heights.
              </p>
              <a
                href="tel:8332002676"
                className="w-full flex items-center justify-between px-5 py-3.5 rounded-full md:inline-flex md:w-auto md:justify-start md:gap-3 md:px-8 md:py-4 bg-[#4F46E5] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#4338CA] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              >
                Start Your Web Project
                <span className="opacity-60">→</span>
                <span className="shrink-0 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
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
