"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { PROJECTS, type Project } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const FILTERS = ["All", "Web", "App", "UI"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ p }: { p: Project }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(useTransform(ry, [-50, 50], [8, -8]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(rx, [-50, 50], [-8, 8]), { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rx.set(e.clientX - rect.left - rect.width / 2);
    ry.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      variants={fadeInUp}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative h-full"
    >
      <div className="card-glow relative h-full overflow-hidden p-6">
        {/* Gradient header */}
        <div
          className={`relative -m-6 mb-6 h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl border border-fg/20 bg-fg/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md">
              {p.title}
            </div>
          </div>
          <span className="absolute right-3 top-3 chip bg-black/30 text-white">
            {p.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold transition-colors group-hover:text-brand-300">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-fg/65 line-clamp-3">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-4 !py-2 text-sm"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>

        {/* Glow border */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-500/40 via-fuchsia-500/40 to-accent-500/40 blur-md" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve <span className="gradient-text">shipped</span>
          </>
        }
        subtitle="A selection of personal and professional projects."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f ? "text-white" : "text-fg/60 hover:text-fg"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 shadow-glow"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
