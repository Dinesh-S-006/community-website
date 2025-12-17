"use client";

import NarrativeBlock from "./NarrativeBlock";
import TerminalBlock from "./TerminalBlock";
import { aboutData } from "../data/aboutData";

export default function AboutSection() {
  return (
    <section className="col-span-1 md:col-span-4 bento-card w-full overflow-hidden rounded-bento bg-dark-card border border-dark-border p-6 md:p-10 relative group">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* LEFT COLUMN: Narrative */}
        <NarrativeBlock data={aboutData} />

        {/* RIGHT COLUMN: Interactive Terminal */}
        <TerminalBlock script={aboutData.terminalScript} />
      </div>
    </section>
  );
}
