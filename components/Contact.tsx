"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Fallback: open mail client with prefilled message
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  };

  return (
    <section id="contact" className="section-padding">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="gradient-text">build something</span>
          </>
        }
        subtitle="Have a project, an opportunity, or just want to say hi? My inbox is always open."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-8 lg:grid-cols-5"
      >
        <motion.div variants={fadeInUp} className="space-y-4 lg:col-span-2">
          <div className="card-glow p-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-fg/65">
              Reach me directly through any of the channels below — I usually
              respond within a day.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/5 p-3 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/30">
                    <Mail className="h-4 w-4 text-brand-200" />
                  </span>
                  <span>
                    <div className="text-xs text-fg/50">Email</div>
                    <div className="font-medium">{SITE.email}</div>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="group flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/5 p-3 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/30">
                    <Phone className="h-4 w-4 text-brand-200" />
                  </span>
                  <span>
                    <div className="text-xs text-fg/50">Phone</div>
                    <div className="font-medium">{SITE.phone}</div>
                  </span>
                </a>
              </li>
              {SITE.socials.linkedin && (
                <li>
                  <a
                    href={SITE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/5 p-3 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/30">
                      <Linkedin className="h-4 w-4 text-brand-200" />
                    </span>
                    <span>
                      <div className="text-xs text-fg/50">LinkedIn</div>
                      <div className="font-medium">{SITE.socials.linkedinHandle}</div>
                    </span>
                  </a>
                </li>
              )}
              {SITE.socials.github && (
                <li>
                  <a
                    href={SITE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/5 p-3 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/30">
                      <Github className="h-4 w-4 text-brand-200" />
                    </span>
                    <span>
                      <div className="text-xs text-fg/50">GitHub</div>
                      <div className="font-medium">{SITE.socials.githubHandle}</div>
                    </span>
                  </a>
                </li>
              )}
              <li className="flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/5 p-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/30">
                  <MapPin className="h-4 w-4 text-brand-200" />
                </span>
                <span>
                  <div className="text-xs text-fg/50">Location</div>
                  <div className="font-medium">{SITE.location}</div>
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          onSubmit={onSubmit}
          className="card-glow space-y-4 p-6 lg:col-span-3"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="group">
              <label className="mb-1.5 block text-xs text-fg/60">
                Your name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400/60 focus:bg-fg/10 focus:shadow-glow"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-fg/60">
                Your email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400/60 focus:bg-fg/10 focus:shadow-glow"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs text-fg/60">
              Your message
            </label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the project, role, or just say hi…"
              className="w-full resize-none rounded-xl border border-fg/10 bg-fg/5 px-4 py-3 text-sm outline-none transition-all focus:border-brand-400/60 focus:bg-fg/10 focus:shadow-glow"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-fg/50">
              Submitting opens your mail client with the message pre-filled.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Sent!"
                  : "Send Message"}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
