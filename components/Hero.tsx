"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { SITE, TYPING_ROLES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import TypingText from "./TypingText";

const socials = [
  { icon: Github, href: SITE.socials.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
  { icon: Phone, href: `tel:${SITE.phoneRaw}`, label: "Phone" },
].filter((s) => s.href);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute -top-32 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-brand-600/30 blur-3xl animate-blob" />
      <div className="absolute top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-3xl animate-blob [animation-delay:-8s]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:px-20">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.span variants={fadeInUp} className="chip w-fit">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text inline-block">Satish</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex min-h-[1.25em] items-baseline text-2xl font-bold leading-[1.25] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            <span className="text-fg/80">—&nbsp;a&nbsp;</span>
            <span className="whitespace-nowrap">
              <TypingText words={TYPING_ROLES} />
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base text-fg/70 md:text-lg"
          >
            Frontend Developer with 3+ years at{" "}
            <span className="font-semibold text-fg">Accenture</span>,
            building scalable, secure web apps in React.js &amp; Next.js —
            including AI-powered enterprise applications with SSO across Web
            and Microsoft Teams.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={SITE.resumeUrl} download className="btn-ghost">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-2 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group grid h-11 w-11 place-items-center rounded-full border border-fg/10 bg-fg/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/10"
              >
                <Icon className="h-[18px] w-[18px] text-fg/70 transition-colors group-hover:text-fg" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden h-[440px] w-[440px] lg:block"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-brand-500/40 via-fuchsia-500/30 to-accent-500/40 blur-2xl" />
          <div className="absolute inset-6 rounded-full border border-fg/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-2xl shadow-glow" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-10 overflow-hidden rounded-full ring-1 ring-fg/15 shadow-glow"
          >
            <Image
              src="/avatar.jpg"
              alt={SITE.name}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 320px"
              className="object-cover object-[50%_30%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-6 pb-6 pt-12 text-center">
              <div className="text-sm font-semibold tracking-wide text-white">
                {SITE.role}
              </div>
              <div className="mt-0.5 text-xs text-white/70">
                Building delightful interfaces
              </div>
            </div>
          </motion.div>

          {/* Floating chips */}
          {[
            { label: "⚛ React", className: "left-0 top-10" },
            { label: "▲ Next.js", className: "right-0 top-24" },
            { label: "TS", className: "right-4 bottom-16" },
            { label: "🎨 Tailwind", className: "left-2 bottom-12" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className={`absolute ${c.className} rounded-full border border-fg/10 bg-bg/60 px-3 py-1 text-xs backdrop-blur-md`}
            >
              {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="h-9 w-5 rounded-full border border-fg/20 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-full rounded-full bg-fg/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
