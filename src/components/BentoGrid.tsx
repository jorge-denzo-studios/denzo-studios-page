"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Network, Sparkles, Database, Code2, Search, Palette, PhoneCall, Truck, Check } from "lucide-react";

const features = [
  {
    id: "ai",
    title: "AI Development",
    description: "At the core of what we do. We combine predictive analytics, NLP, computer vision, and automation to deliver scalable systems tailored to business needs. Leveraging MCP (Model Context Protocol).",
    iconBg: "bg-[#007AFF]/10 border-[#007AFF]/20",
    iconColor: "text-[#007AFF]",
    icon: <BrainCircuit />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "ads",
    title: "Google & Meta Ads",
    description: "Boost your business by connecting with ideal customers perfectly when they're searching. We focus on master-grade ROI tracking and strategic precision reporting.",
    iconBg: "bg-[#BF5AF2]/10 border-[#BF5AF2]/20",
    iconColor: "text-[#BF5AF2]",
    icon: <Sparkles />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "seo",
    title: "SEO Excellence",
    description: "Boost your online presence and drive organic traffic with proven search engine strategies.",
    iconBg: "bg-[#8E8E93]/10 border-[#8E8E93]/20",
    iconColor: "text-[#8E8E93] dark:text-white/70",
    icon: <Search />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "web",
    title: "Website Services",
    description: "Custom, high-performance sites that strengthen your online presence and align perfectly with your business goals.",
    iconBg: "bg-[#FF9500]/10 border-[#FF9500]/20",
    iconColor: "text-[#FF9500]",
    icon: <Code2 />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: "partners",
    title: "Ad Partners",
    description: "YouTube, Amazon Ads, TikTok Ads, Bing, Google Ads.",
    iconBg: "bg-[#34C759]/10 border-[#34C759]/20",
    iconColor: "text-[#34C759]",
    icon: <Network />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "reviews",
    title: "Listings & Reviews",
    description: "Google Business, Nextdoor, Birdeye, Angi, Yelp.",
    iconBg: "bg-[#5856D6]/10 border-[#5856D6]/20",
    iconColor: "text-[#5856D6]",
    icon: <Check />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "design",
    title: "Graphic Design",
    description: "Expert design that captures your brand essence and engages audiences.",
    iconBg: "bg-[#FF2D55]/10 border-[#FF2D55]/20",
    iconColor: "text-[#FF2D55]",
    icon: <Palette />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "callcenter",
    title: "Call Center Support",
    description: "Bilingual, cost-effective support designed to enhance customer satisfaction.",
    iconBg: "bg-[#00C7BE]/10 border-[#00C7BE]/20",
    iconColor: "text-[#00C7BE]",
    icon: <PhoneCall />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  }
];

export default function BentoGrid() {
  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-16 md:mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white">
          Intelligent <span className="bg-gradient-to-r from-[#007AFF] via-[#3395FF] to-[#007AFF] text-transparent bg-clip-text drop-shadow-sm">Efficiency.</span> <br />
          <span className="text-black/90 dark:text-white/50">Seamless <span className="bg-gradient-to-r from-[#6B7280] via-[#4B5563] to-[#6B7280] dark:from-[#D1D1D6] dark:via-[#FFFFFF] dark:to-[#D1D1D6] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(156,163,175,0.4)]">Innovation.</span></span>
        </h2>
        <p className="text-xl text-[#3A3A3C] dark:text-white/40 tracking-tight font-light leading-relaxed max-w-3xl">
          We build scalable systems that strengthen existing workflows and connect AI agents with your data, APIs, and applications for smarter decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[300px]">
        {features.map((feature, i) => (
          <motion.div
            id={feature.id}
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`glass-panel p-8 flex flex-col justify-between group cursor-default hover:bg-[#EAEAEF] dark:hover:bg-white/[0.05] transition-all duration-700 ${feature.colSpan} ${feature.rowSpan}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 dark:via-white/5 to-transparent -translate-y-[200%] group-hover:animate-scan opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className={`w-12 h-12 rounded-[14px] ${feature.iconBg} border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500`}>
                {React.cloneElement(feature.icon, { className: `w-6 h-6 ${feature.iconColor}` })}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight leading-tight text-[#1C1C1E] dark:text-white">{feature.title}</h3>
                <p className="text-[#3A3A3C] dark:text-white/40 font-normal leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
