"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            Tools I work with <span className="gradient-text">every day</span>
          </>
        }
        subtitle="A curated stack across the frontend, backend, and developer-tools space."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {SKILLS.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeInUp}
            className="card-glow group relative p-6"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--mx",
                `${e.clientX - r.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--my",
                `${e.clientY - r.top}px`,
              );
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <span className="chip">{group.items.length} skills</span>
            </div>

            <ul className="space-y-4">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-brand-300" />
                        {skill.name}
                      </span>
                      <span className="text-fg/50">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-fg/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 1.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-accent-400"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap items-center justify-center gap-2"
      >
        {SKILLS.flatMap((g) => g.items).map((s) => (
          <span key={s.name} className="chip transition-transform hover:-translate-y-0.5">
            <s.icon className="h-3.5 w-3.5 text-brand-300" />
            {s.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
