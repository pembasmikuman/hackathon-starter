export const dynamic = "force-dynamic";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell min-h-screen">
      <div className="container-page grid min-h-screen items-center gap-10 py-10 lg:grid-cols-[1fr_0.9fr]">
        <section>
          <Link href="/" className="mb-10 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              H
            </span>
            <span className="text-sm font-semibold">Hackathon AI</span>
          </Link>
          <span className="badge badge-dark">404</span>
          <h1 className="hero-title mt-6 max-w-3xl">
            This surface has not been deployed.
          </h1>
          <p className="body-lead mt-6 max-w-xl">
            The route you requested is outside the current starter console.
            Return to the launch surface and keep building from there.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="button-primary">
              Back Home
            </Link>
            <Link href="/dashboard" className="button-secondary">
              Open Dashboard
            </Link>
          </div>
        </section>

        <aside className="product-card product-card-magenta flex min-h-[420px] flex-col justify-between">
          <span className="badge bg-white/15 text-white">Missing route</span>
          <div>
            <p className="text-sm text-white/75">Status</p>
            <p className="mt-2 text-6xl font-semibold tracking-[-0.02em]">
              404
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
