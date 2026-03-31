"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceFeatureCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceFeatureCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  delay = 0,
}: ServiceFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-8 flex flex-col gap-5 group cursor-default hover:bg-[#EAEAEF] dark:hover:bg-white/[0.05] transition-all duration-700"
    >
      {/* Scan shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 dark:via-white/5 to-transparent -translate-y-[200%] group-hover:animate-scan opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full gap-4">
        <div
          className={`w-12 h-12 rounded-[14px] ${iconBg} border flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 tracking-tight leading-tight text-[#1C1C1E] dark:text-white">
            {title}
          </h3>
          <p className="text-[#3A3A3C] dark:text-white/40 font-normal leading-relaxed text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
