"use client";

import { Github, Heart, Linkedin, Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

const links = [
  { icon: Github, href: SITE.socials.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
  { icon: Phone, href: `tel:${SITE.phoneRaw}`, label: "Phone" },
].filter((l) => l.href);

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-fg/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:text-left md:px-10 lg:px-20">
        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
              S
            </span>
            <span className="font-semibold">
              {SITE.name.split(" ")[0]}
              <span className="gradient-text">.dev</span>
            </span>
          </div>
          <p className="mt-2 text-xs text-fg/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-fg/10 bg-fg/5 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10"
            >
              <Icon className="h-4 w-4 text-fg/70" />
            </a>
          ))}
        </div>

        <p className="text-xs text-fg/50">
          Built with{" "}
          <Heart className="mx-0.5 inline h-3 w-3 fill-fuchsia-400 text-fuchsia-400" />{" "}
          using <span className="text-fg/80">Next.js</span> &amp;{" "}
          <span className="text-fg/80">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
