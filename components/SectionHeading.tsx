"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 flex flex-col items-center text-center"
    >
      <span className="chip mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm text-fg/60 md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
