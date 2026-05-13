"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { SITE, STATS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            A bit about <span className="gradient-text">my journey</span>
          </>
        }
        subtitle="Crafting clean, performant interfaces with a focus on user experience and accessibility."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid items-center gap-10 lg:grid-cols-5"
      >
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <div className="card-glow group relative overflow-hidden p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 opacity-60" />
            <div className="rounded-2xl bg-bg/40 p-8 text-center">
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-2 ring-brand-500/40 shadow-glow">
                <Image
                  src="/avatar.jpg"
                  alt={SITE.name}
                  fill
                  sizes="144px"
                  className="object-cover object-[50%_30%]"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{SITE.name}</h3>
              <p className="mt-1 text-sm text-fg/60">{SITE.role}</p>
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-fg/50">
                <Sparkles className="h-3.5 w-3.5 text-brand-300" />
                Based in {SITE.location}
              </div>
              <a
                href={SITE.resumeUrl}
                download
                className="btn-primary mt-6 w-full"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="lg:col-span-3">
          <div className="space-y-5 text-fg/75">
            <p>
              I&apos;m a Frontend Developer with{" "}
              <span className="font-semibold text-fg">3+ years</span> of
              experience at{" "}
              <span className="font-semibold text-fg">Accenture</span>,
              specializing in building scalable and secure web applications with
              React.js and Next.js.
            </p>
            <p>
              Most recently I&apos;ve led frontend development on an AI-powered
              enterprise agent application deployed across{" "}
              <span className="font-semibold text-fg">Web and Microsoft Teams</span>
              , implementing{" "}
              <span className="font-semibold text-fg">SSO with OAuth</span>{" "}
              for secure, seamless cross-platform access and integrating
              real-time, AI-driven APIs end-to-end.
            </p>
            <p>
              I care deeply about performance, usability, and enterprise-grade
              security — and I love crafting responsive UI, clean component
              architecture, and the kinds of micro-interactions that make
              software feel alive. Quick to adapt and{" "}
              <span className="font-semibold text-fg">
                available for immediate project allocation
              </span>
              .
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="card-glow group relative p-5 text-center"
              >
                <div className="bg-gradient-to-br from-brand-300 to-accent-400 bg-clip-text text-3xl font-bold text-transparent">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-fg/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
