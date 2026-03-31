"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceFeatureCard from "@/components/ServiceFeatureCard";
import {
  Route,
  BookOpen,
  MessageSquareHeart,
  LayoutGrid,
  Users,
  HeartHandshake,
  Clock,
  BarChart2,
  Wallet,
} from "lucide-react";

// Brand colors: orange #FF6B35, coral #FF2D55, warm amber #FF9500
const ORANGE = "#FF6B35";
const CORAL  = "#FF2D55";
const AMBER  = "#FF9500";

const strategies = [
  {
    icon: Route,
    iconBg: `bg-[${ORANGE}]/10 border-[${ORANGE}]/20`,
    iconColor: `text-[${ORANGE}]`,
    title: "Customer Journey Optimization",
    description:
      "We analyze common support touchpoints and FAQs to optimize your customer service flow — reducing resolution time and increasing satisfaction with every interaction.",
  },
  {
    icon: BookOpen,
    iconBg: "bg-[#FF9500]/10 border-[#FF9500]/20",
    iconColor: "text-[#FF9500]",
    title: "Onboarding & Brand Training",
    description:
      "We immerse our specialists in your brand voice, policies, and product knowledge. From tone of voice to escalation protocols, our team represents your business as if it were their own.",
  },
  {
    icon: MessageSquareHeart,
    iconBg: "bg-[#FF2D55]/10 border-[#FF2D55]/20",
    iconColor: "text-[#FF2D55]",
    title: "Feedback & Sentiment Analysis",
    description:
      "We don't just resolve problems — we learn from them. Through real-time feedback and sentiment tracking, we help you continuously improve customer experience and product offerings.",
  },
  {
    icon: LayoutGrid,
    iconBg: "bg-[#BF5AF2]/10 border-[#BF5AF2]/20",
    iconColor: "text-[#BF5AF2]",
    title: "Multichannel Support Integration",
    description:
      "We support your customers wherever they are — phone, email, live chat, or social media. We build and manage unified support systems that offer seamless, real-time assistance across all platforms.",
  },
  {
    icon: Users,
    iconBg: "bg-[#007AFF]/10 border-[#007AFF]/20",
    iconColor: "text-[#007AFF]",
    title: "Scalable Workforce Solutions",
    description:
      "Need a small team or a full outsourced department? Our support solutions scale with your business — whether you're a startup or an enterprise with global operations.",
  },
  {
    icon: HeartHandshake,
    iconBg: "bg-[#FF6B35]/10 border-[#FF6B35]/20",
    iconColor: "text-[#FF6B35]",
    title: "Human-Centered Professionals",
    description:
      "Our specialists are trained in active listening, conflict resolution, and positive communication — blending professionalism with empathy to make every interaction respectful and productive.",
  },
  {
    icon: Clock,
    iconBg: "bg-[#FF9500]/10 border-[#FF9500]/20",
    iconColor: "text-[#FF9500]",
    title: "24/7 Global Coverage",
    description:
      "Customers don't work 9 to 5 — and neither do we. With global support capabilities, we provide round-the-clock service that ensures your customers are always taken care of, in any time zone.",
  },
  {
    icon: BarChart2,
    iconBg: "bg-[#FF2D55]/10 border-[#FF2D55]/20",
    iconColor: "text-[#FF2D55]",
    title: "Data-Driven Service Optimization",
    description:
      "We monitor KPIs like response time, CSAT scores, and first-call resolution to fine-tune performance and continuously improve your customer service quality.",
  },
  {
    icon: Wallet,
    iconBg: "bg-[#34C759]/10 border-[#34C759]/20",
    iconColor: "text-[#34C759]",
    title: "Cost-Efficient Outsourcing",
    description:
      "Get expert-level support without the overhead. Our specialists deliver premium customer experiences at competitive rates — freeing you to focus on growth while we handle your front lines.",
  },
];

const differentiators = [
  {
    title: "True Brand Partnership",
    description:
      "We don't just answer calls — we become an extension of your brand. Our team integrates seamlessly with your operations, acting and speaking as if they were part of your own company.",
    accent: "#FF6B35",
  },
  {
    title: "Bilingual English & Spanish",
    description:
      "We bridge the gap between English-speaking and Spanish-speaking customers, ensuring your brand can reach and serve a broader audience while maintaining exceptional service quality across borders.",
    accent: "#FF2D55",
  },
  {
    title: "Cost-Effective & Scalable",
    description:
      "From inbound calls to outbound campaigns, our flexible solutions are customized to fit your marketing goals and operational needs — delivering reliability and expertise at every scale.",
    accent: "#FF9500",
  },
];

export default function CallCenterPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Extended image – LEFT side, bleeds to edge (mirrored layout) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block"
        >
          <img
            src="/hero-call-center.png"
            alt="Professional customer service agent at a modern support workstation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />

          {/* Floating metric pills */}
          <div className="absolute top-1/3 right-20 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] animate-pulse shadow-[0_0_8px_#FF6B35]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">CSAT 89%</span>
          </div>
          <div className="absolute bottom-1/3 left-10 glass-panel !bg-white/90 dark:!bg-black/70 px-4 py-3 flex items-center gap-3 !rounded-2xl shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF2D55] animate-pulse shadow-[0_0_8px_#FF2D55]" />
            <span className="text-xs font-bold text-[#1C1C1E] dark:text-white tracking-widest uppercase">FCR 94%</span>
          </div>
        </motion.div>

        {/* Ambient glow behind text (right side) */}
        <div className="absolute top-0 right-0 w-[50vw] h-[70vh] bg-gradient-to-bl from-[#FF6B35]/10 via-[#FF2D55]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Text content – RIGHT side */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/5 backdrop-blur-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_10px_#FF6B35]" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#b84a22] dark:text-[#FF6B35]">
                Call Center Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF9500] to-[#FF2D55] text-transparent bg-clip-text">
                Exceptional
              </span>
              <br />
              <span className="text-foreground">Experiences.</span>
              <br />
              <span className="text-foreground">Every Call.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-black/70 dark:text-white/50 max-w-lg font-light tracking-tight mb-10 leading-relaxed"
            >
              Customer service is your{" "}
              <span className="font-semibold text-[#b84a22] dark:text-[#FF6B35]">
                brand identity
              </span>{" "}
              — not just a support function. Our specialists engage, resolve, and elevate every customer touchpoint into a brand-building moment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="tel:8332002676"
                className="group/btn relative w-full flex items-center justify-between px-5 py-3.5 rounded-full font-bold text-sm overflow-hidden md:inline-flex md:w-auto md:justify-start md:gap-4 md:px-8 md:py-4 lg:px-10 lg:py-5 md:text-lg transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,107,53,0.15)] hover:shadow-[0_0_50px_rgba(255,107,53,0.35)] bg-[#1c1c1e] dark:bg-black/40 backdrop-blur-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.22),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-[#FF6B35]/50 pointer-events-none" />
                <span className="relative z-10 text-white tracking-wide whitespace-nowrap">GET A FREE DEMO</span>
                <span className="relative z-10 shrink-0 px-3 py-1.5 rounded-full whitespace-nowrap bg-[#FF6B35]/15 text-[#b84a22] dark:text-[#FF6B35] text-sm font-semibold border border-[#FF6B35]/30 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                  833-200-2676
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CUSTOMER SERVICE ──────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-12 md:p-20"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b84a22] dark:text-[#FF6B35]">
                Why It Matters
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
              Customer service is your{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF2D55] text-transparent bg-clip-text">
                brand identity.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl text-[#3A3A3C] dark:text-white/50 font-light leading-relaxed">
              <p>
                In a world where customers expect instant, helpful, and personalized responses, your support
                experience can make or break loyalty. Exceptional service leads to{" "}
                <span className="font-semibold text-[#b84a22] dark:text-[#FF6B35]">
                  higher retention, stronger word-of-mouth,
                </span>{" "}
                and a reputation that sets you apart from the competition.
              </p>
              <p>
                At Denzo Studios, we believe exceptional customer experiences are the foundation of successful
                brands. Our solutions help you create lasting relationships, resolve issues efficiently, and
                turn every customer touchpoint into a{" "}
                <span className="font-semibold text-[#FF2D55]">brand-building moment.</span>
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
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b84a22] dark:text-[#FF6B35]">
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
              Customer Service{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF9500] to-[#FF2D55] text-transparent bg-clip-text">
                Built for You.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#3A3A3C] dark:text-white/40 font-light tracking-tight leading-relaxed max-w-2xl"
            >
              We don&apos;t believe in one-size-fits-all solutions. Our strategies are tailored to your business
              model, audience expectations, and growth goals — ensuring every customer feels heard, valued, and cared for.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strategies.map((s, i) => (
              <ServiceFeatureCard key={i} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ───────────────────────────────────── */}
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
              <div className="w-2 h-2 rounded-full bg-[#FF2D55] shadow-[0_0_8px_#FF2D55]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#FF2D55]">
                Why Denzo Studios
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1C1C1E] dark:text-white"
            >
              More than a call center —{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF2D55] text-transparent bg-clip-text">
                a true partner.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
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
                    style={{ backgroundColor: d.accent, boxShadow: `0 0 12px ${d.accent}` }}
                  />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-[#1C1C1E] dark:text-white">
                    {d.title}
                  </h3>
                  <p className="text-[#3A3A3C] dark:text-white/40 font-normal leading-relaxed text-[15px]">
                    {d.description}
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6B35]/15 via-[#FF9500]/10 to-[#FF2D55]/15 border border-[#FF6B35]/20 p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.18),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,45,85,0.12),transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/5">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b84a22] dark:text-[#FF6B35]">
                  Let&apos;s Get Started
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1C1C1E] dark:text-white">
                Unforgettable Customer{" "}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF2D55] text-transparent bg-clip-text">
                  Experiences.
                </span>
              </h2>
              <p className="text-xl text-[#3A3A3C] dark:text-white/60 font-light leading-relaxed mb-10">
                Ready to scale your support and exceed customer expectations? Contact Denzo Studios today. With
                Denzo, your customers aren&apos;t just handled — they&apos;re heard, valued, and remembered. Let us
                demonstrate how our scalable, cost-effective solutions can be tailored to your specific needs.
              </p>
              <a
                href="tel:8332002676"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6B35] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#e85a27] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,107,53,0.4)]"
              >
                Elevate Your Customer Service
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
