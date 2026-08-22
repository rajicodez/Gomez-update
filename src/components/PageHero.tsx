import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative pt-16 lg:pt-20 pb-16 lg:pb-20 bg-gradient-to-br from-primary via-primary to-[#0d3055] text-white overflow-hidden">
      <div className="absolute inset-0 medical-pattern opacity-30" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && (
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-base lg:text-lg">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
