"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { ACHIEVEMENTS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconMap = {
  trophy: Trophy,
  graduation: GraduationCap,
  award: Award,
} as const;

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <SectionHeading
        eyebrow="Achievements"
        title={
          <>
            Wins along the <span className="gradient-text">way</span>
          </>
        }
        subtitle="Awards, certifications, and milestones that have shaped my path."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {ACHIEVEMENTS.map((a) => {
          const Icon = iconMap[a.icon as keyof typeof iconMap] ?? Award;
          return (
            <motion.div
              key={a.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="card-glow group relative p-6"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-accent-500/30 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-brand-200" />
              </div>
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-fg/65">{a.description}</p>
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {[
          { label: "Awards", value: 1 },
          { label: "Certifications", value: 5 },
          { label: "Hackathons", value: 3 },
          { label: "Tech Talks", value: 2 },
        ].map((m) => (
          <motion.div
            key={m.label}
            variants={fadeInUp}
            className="card-glow p-5 text-center"
          >
            <div className="bg-gradient-to-br from-brand-300 to-accent-400 bg-clip-text text-3xl font-bold text-transparent">
              <AnimatedCounter value={m.value} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-fg/60">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
