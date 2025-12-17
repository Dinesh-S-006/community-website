import { Terminal, Cpu, Users, ArrowRight } from "lucide-react";

interface Tag {
  id: number;
  label: string;
  iconType: string;
}

interface NarrativeProps {
  data: {
    badge: string;
    title: {
      start: string;
      highlight1: string;
      middle: string;
      highlight2: string;
    };
    description: string;
    quote: string;
    cta: string;
    tags: Tag[];
  };
}

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Terminal: Terminal,
  Users: Users,
};

export default function NarrativeBlock({ data }: NarrativeProps) {
  return (
    <div className="space-y-6 relative z-10">
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-[0_0_10px_rgba(0,74,173,0.2)]">
          {data.badge}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold font-sans">
        {data.title.start}{" "}
        <span className="text-gradient">{data.title.highlight1}</span>{" "}
        {data.title.middle}{" "}
        <span className="text-gradient">{data.title.highlight2}</span>
      </h2>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        {data.description}{" "}
        <span className="text-[var(--color-text)] font-semibold italic">
          {data.quote}
        </span>
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        {data.tags.map((tag) => {
          const Icon = iconMap[tag.iconType];
          return (
            <div
              key={tag.id}
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]"
            >
              {Icon && (
                <Icon className="w-4 h-4 text-[var(--color-secondary)]" />
              )}
              <span>{tag.label}</span>
            </div>
          );
        })}
      </div>

      <button className="mt-4 group/btn flex items-center gap-2 text-sm font-bold text-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors">
        {data.cta}
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
}
