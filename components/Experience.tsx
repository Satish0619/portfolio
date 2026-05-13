"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve been <span className="gradient-text">building</span>
          </>
        }
        subtitle="A snapshot of my professional journey so far."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500/60 via-fg/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {EXPERIENCE.map((item, idx) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative mb-10 flex flex-col gap-4 md:flex-row md:items-start ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <span className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-brand-500 shadow-glow md:left-1/2" />

            <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
              <div className="card-glow p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-fg/60">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {item.location}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                <div className="mt-1 inline-flex items-center gap-2 text-sm text-brand-300">
                  <Briefcase className="h-4 w-4" />
                  {item.company}
                </div>

                <div className="mt-6 space-y-5">
                  {item.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-fg/80">
                        {group.title}
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-fg/70">
                        {group.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
