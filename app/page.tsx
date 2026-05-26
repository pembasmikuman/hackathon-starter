import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

const models = [
  {
    name: "M2.7 Reasoning",
    label: "Text Core",
    className: "product-card-coral",
    copy: "Server components, authenticated sessions, and Prisma-backed persistence ready for the first sprint.",
  },
  {
    name: "Music 2.6",
    label: "Creative Layer",
    className: "product-card-magenta",
    copy: "A polished interface foundation with expressive gradients, dense cards, and crisp interaction states.",
  },
  {
    name: "Hailuo Video",
    label: "Realtime Media",
    className: "product-card-blue",
    copy: "Supabase helpers are pre-wired for teams that want storage, realtime feeds, or media workflows.",
  },
  {
    name: "Speech 2.8",
    label: "Agent Surface",
    className: "product-card-purple",
    copy: "A dashboard pattern for operational AI tools: status, onboarding, and quick-start guidance in one view.",
  },
];

const features = [
  ["Clerk Auth", "Protected routes, hosted sign-in, and account controls are already connected."],
  ["Supabase Postgres", "A production-friendly database target with pooled runtime connections."],
  ["Prisma ORM", "Typed schema, migrations, and a single app-side data access path."],
  ["Next.js 15", "App Router, server components, and dynamic Clerk-aware rendering."],
];

export default async function Home() {
  const { userId } = await auth();
  const primaryHref = userId ? "/dashboard" : "/sign-in";
  const primaryLabel = userId ? "Open Dashboard" : "Start Building";

  return (
    <main className="page-shell">
      <section className="container-page flex min-h-screen flex-col justify-between gap-16 py-8 md:py-10">
        <header className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              H
            </span>
            <span className="text-sm font-semibold tracking-normal">
              Hackathon AI
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[var(--steel)] md:flex">
            <a href="#models" className="hover:text-[var(--ink)]">
              Models
            </a>
            <a href="#stack" className="hover:text-[var(--ink)]">
              Stack
            </a>
            <a href="#launch" className="hover:text-[var(--ink)]">
              Launch
            </a>
          </nav>
          <Link href={primaryHref} className="button-primary">
            {primaryLabel}
          </Link>
        </header>

        <div className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <span className="badge badge-dark mb-8">AI infrastructure starter</span>
            <h1 className="hero-title max-w-5xl">
              Build a premium AI product before the weekend clock runs out.
            </h1>
            <p className="body-lead mt-8 max-w-2xl">
              A Next.js launch surface with Clerk auth, Supabase Postgres, and
              Prisma data access already wired into a MiniMax-inspired product
              system.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={primaryHref} className="button-primary">
                {primaryLabel}
              </Link>
              <Link href="/sign-up" className="button-secondary">
                Create Account
              </Link>
            </div>
          </div>

          <aside className="quiet-card p-5 md:p-6">
            <div className="rounded-[24px] bg-[var(--primary)] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <span className="badge bg-white/15 text-white">Live stack</span>
                <span className="text-xs text-white/70">v0.1</span>
              </div>
              <div className="mt-16">
                <p className="text-sm text-white/70">Runtime matrix</p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-[-0.015em]">
                  Auth, database, and interface in one controlled surface.
                </h2>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="models" className="container-page py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-[var(--steel)]">
              Product matrix
            </p>
            <h2 className="section-title mt-3">Distinct surfaces for fast teams.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--slate)]">
            Each card borrows the vibrant release identity pattern from the
            design system while mapping it to starter-kit capabilities.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {models.map((model) => (
            <article
              key={model.name}
              className={`product-card ${model.className} flex flex-col justify-between`}
            >
              <div>
                <span className="badge bg-white/15 text-white">{model.label}</span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug">
                  {model.name}
                </h3>
              </div>
              <p className="mt-16 text-sm leading-6 text-white/82">{model.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="container-page py-16 md:py-20">
        <div className="rounded-[32px] bg-[var(--surface)] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map(([title, copy]) => (
              <article key={title} className="feature-card p-6">
                <h3 className="text-xl font-semibold leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--slate)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="launch" className="container-page pb-20 md:pb-24">
        <div className="product-card product-card-coral min-h-0">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-white/75">Launch lane</p>
              <h2 className="display-title mt-4 max-w-3xl">
                Ship the thing people can touch, then deepen the model layer.
              </h2>
            </div>
            <Link href={primaryHref} className="button-primary bg-white text-black hover:bg-white/90">
              {primaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
