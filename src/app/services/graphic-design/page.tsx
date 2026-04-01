"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceFeatureCard from "@/components/ServiceFeatureCard";
import {
  Palette,
  Layers,
  Sparkles,
  MonitorSmartphone,
  Stamp,
  BookImage,
  Wand2,
  Share2,
} from "lucide-react";

const MAGENTA = "#FF2D9B";
const VIOLET  = "#7C3AED";
const GOLD    = "#F59E0B";

const services = [
  {
    icon: Stamp,
    iconBg: "bg-[#FF2D9B]/10 border-[#FF2D9B]/20",
    iconColor: "text-[#FF2D9B]",
    title: "Logo & Brand Identity",
    description:
      "We craft powerful brand identities that reflect your company's values and resonate with your audience. Logos, style guides, typography, and color palettes — every element designed to tell your brand's story.",
  },
  {
    icon: BookImage,
    iconBg: "bg-[#7C3AED]/10 border-[#7C3AED]/20",
    iconColor: "text-[#7C3AED]",
    title: "Print & Traditional Design",
    description:
      "From brochures and business cards to flyers and advertisements, we use industry-standard tools (Adobe Illustrator, Photoshop, InDesign) to create compelling print materials that establish a solid, professional brand image.",
  },
  {
    icon: Wand2,
    iconBg: "bg-[#F59E0B]/10 border-[#F59E0B]/20",
    iconColor: "text-[#F59E0B]",
    title: "AI-Powered Design",
    description:
      "We embrace the future of design with cutting-edge AI tools — generating innovative visual concepts, personalized designs, and efficient solutions that push creative boundaries beyond what traditional methods allow.",
  },
  {
    icon: Share2,
    iconBg: "bg-[#FF2D9B]/10 border-[#FF2D9B]/20",
    iconColor: "text-[#FF2D9B]",
    title: "Social Media & Digital Design",
    description:
      "Eye-catching social media graphics, dynamic website banners, and email campaign visuals — all optimized for digital platforms and crafted to capture attention and drive meaningful engagement and conversions.",
  },
  {
    icon: Layers,
    iconBg: "bg-[#7C3AED]/10 border-[#7C3AED]/20",
    iconColor: "text-[#7C3AED]",
    title: "Marketing Collateral",
    description:
      "Promotional materials, packaging, presentations, and advertising — cohesive visual assets that reinforce your brand across every touchpoint and communicate your message clearly to your target audience.",
  },
  {
    icon: MonitorSmartphone,
    iconBg: "bg-[#F59E0B]/10 border-[#F59E0B]/20",
    iconColor: "text-[#F59E0B]",
    title: "UI/UX & Web Graphics",
    description:
      "Custom graphics and design assets for your website and digital products — ensuring your online presence is as visually compelling as your brand identity, tailored for every screen and user experience.",
  },
];

const impacts = [
  {
    title: "Brand Recognition",
    description:
      "A strong visual identity makes your business instantly recognizable across all marketing channels — building familiarity, trust, and loyalty with every customer touchpoint.",
    accent: MAGENTA,
  },
  {
    title: "Competitive Differentiation",
    description:
      "We create distinctive designs that set you apart from competitors — communicating your unique value proposition through visual storytelling that resonates with your target audience.",
    accent: VIOLET,
  },
  {
    title: "Increased Conversions",
    description:
      "Well-designed marketing materials drive action. From social media posts to digital ads, the right design significantly boosts engagement, click-through rates, and conversions.",
    accent: GOLD,
  },
  {
    title: "Future-Proof Creativity",
    description:
      "By blending traditional design expertise with AI-powered tools, we reduce design time while ensuring high-quality, innovative results that keep your brand on the cutting edge of visual trends.",
    accent: MAGENTA,
  },
];

export default function GraphicDesignPage() {
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
            src="/hero-graphic-design.png"
            alt="Graphic designer with brand identity and creative studio setup"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

          {/* Floating metric pills */}
          <div className="absolute top-1/3 left-16 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF2D9B] animate-pulse shadow-[0_0_8px_#FF2D9B]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">Brand Identity</span>
          </div>
          <div className="absolute bottom-1/3 right-10 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse shadow-[0_0_8px_#7C3AED]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">AI-Powered Design</span>
          </div>
        </motion.div>

        {/* Ambient glow behind text */}
        <div className="absolute top-0 left-0 w-[50vw] h-[70vh] bg-gradient-to-br from-[#FF2D9B]/10 via-[#7C3AED]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF2D9B]/30 bg-[#FF2D9B]/5 backdrop-blur-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF2D9B] shadow-[0_0_10px_#FF2D9B]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#b51e6a] dark:text-[#FF2D9B]">
                Graphic Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="bg-gradient-to-r from-[#FF2D9B] via-[#7C3AED] to-[#F59E0B] text-transparent bg-clip-text">
                Design That
              </span>
              <br />
              <span className="text-foreground">Speaks.</span>
              <br />
              <span className="text-foreground">Converts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-black/70 dark:text-white/50 max-w-lg font-light tracking-tight mb-10 leading-relaxed"
            >
              Great design is more than aesthetics — it&apos;s your brand&apos;s{" "}
              <span className="font-semibold text-[#b51e6a] dark:text-[#FF2D9B]">
                visual language
              </span>
              . We craft identities, materials, and digital visuals that communicate your vision and make your business unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:8332002676"
                className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-full font-bold text-sm overflow-hidden md:inline-flex md:w-auto md:justify-start md:gap-4 md:px-8 md:py-4 lg:px-10 lg:py-5 md:text-lg transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,45,155,0.15)] hover:shadow-[0_0_50px_rgba(255,45,155,0.35)] bg-[#1c1c1e] dark:bg-black/40 backdrop-blur-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,45,155,0.22),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-[#FF2D9B]/50 pointer-events-none" />
                <span className="relative z-10 text-white tracking-wide whitespace-nowrap">START YOUR DESIGN PROJECT</span>
                <span className="relative z-10 shrink-0 px-3 py-1.5 rounded-full whitespace-nowrap bg-[#FF2D9B]/15 text-[#b51e6a] dark:text-[#FF2D9B] text-sm font-semibold border border-[#FF2D9B]/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D9B] animate-pulse" />
                  833-200-2676
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF2D9B]/20 bg-[#FF2D9B]/5">
              <div className="w-2 h-2 rounded-full bg-[#FF2D9B] shadow-[0_0_8px_#FF2D9B]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b51e6a] dark:text-[#FF2D9B]">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
              Design communicates{" "}
              <span className="bg-gradient-to-r from-[#FF2D9B] via-[#7C3AED] to-[#F59E0B] text-transparent bg-clip-text">
                your brand&apos;s essence.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl text-[#3A3A3C] dark:text-white/50 font-light leading-relaxed">
              <p>
                At Denzo Studios, we believe the power of design lies in its ability to create a visual
                language that communicates your brand&apos;s vision, personality, and message. Whether you need a
                complete rebrand or specific design solutions, we help you{" "}
                <span className="font-semibold text-[#b51e6a] dark:text-[#FF2D9B]">
                  connect with your audience
                </span>{" "}
                at a deeper level.
              </p>
              <p>
                From traditional methods to cutting-edge AI techniques, we offer a full spectrum of graphic
                design services tailored to your branding and marketing needs — ensuring every design project
                is a complete reflection of your business&apos;s mission. Let&apos;s make your brand{" "}
                <span className="font-semibold text-[#7C3AED]">unforgettable.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#7C3AED]">
                What We Create
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-[#FF2D9B] via-[#7C3AED] to-[#F59E0B] text-transparent bg-clip-text">
                Design Services.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#3A3A3C] dark:text-white/40 font-light tracking-tight leading-relaxed max-w-2xl"
            >
              From logos to social media assets, from print to AI-enhanced visuals — we cover every design
              need your business has, with creativity and precision at every step.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceFeatureCard key={i} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS IMPACT ───────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b07800] dark:text-[#F59E0B]">
                Business Impact
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              How design drives{" "}
              <span className="bg-gradient-to-r from-[#FF2D9B] to-[#7C3AED] text-transparent bg-clip-text">
                real results.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {impacts.map((item, i) => (
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
                    style={{ backgroundColor: item.accent, boxShadow: `0 0 12px ${item.accent}` }}
                  />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#1C1C1E] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[#3A3A3C] dark:text-white/40 font-normal leading-relaxed text-[15px]">
                    {item.description}
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF2D9B]/15 via-[#7C3AED]/10 to-[#F59E0B]/15 border border-[#FF2D9B]/20 p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,45,155,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF2D9B]/30 bg-[#FF2D9B]/5">
                <div className="w-2 h-2 rounded-full bg-[#FF2D9B] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b51e6a] dark:text-[#FF2D9B]">
                  Make Your Brand Unforgettable
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
                Elevate your brand with{" "}
                <span className="bg-gradient-to-r from-[#FF2D9B] via-[#7C3AED] to-[#F59E0B] text-transparent bg-clip-text">
                  design that converts.
                </span>
              </h2>
              <p className="text-xl text-[#3A3A3C] dark:text-white/60 font-light leading-relaxed mb-10">
                From traditional methods to AI-powered innovation, Denzo Studios offers a full spectrum of
                graphic design services built for your brand. Whether you&apos;re a startup establishing your
                identity or an established company modernizing your look — our team creates visuals that leave
                a lasting impression and drive measurable results.
              </p>
              <a
                href="tel:8332002676"
                className="w-full flex items-center justify-between px-5 py-3.5 rounded-full md:inline-flex md:w-auto md:justify-start md:gap-3 md:px-8 md:py-4 bg-[#FF2D9B] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#d42485] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,45,155,0.4)]"
              >
                Let&apos;s Design Your Brand
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
