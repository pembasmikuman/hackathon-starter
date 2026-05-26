export const dynamic = "force-dynamic";

import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ensureUserInDB } from "@/lib/actions/user";

const overview = [
  ["Auth", "Clerk", "Protected"],
  ["Database", "Supabase Postgres", "Connected"],
  ["ORM", "Prisma", "Typed"],
  ["Runtime", "Next.js 15", "Dynamic"],
];

const quickStarts = [
  ["Create protected workflow", "Add a new route under the protected surface and call Clerk server helpers."],
  ["Model your product data", "Extend prisma/schema.prisma, migrate, then query through the shared Prisma client."],
  ["Add media or realtime", "Use the Supabase helpers for storage buckets, uploads, or live product events."],
];

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  await ensureUserInDB();
  const email = user.emailAddresses[0]?.emailAddress ?? "No email available";

  return (
    <main className="page-shell min-h-screen">
      <div className="container-page py-8 md:py-10">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--hairline)] pb-6">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              H
            </span>
            <div>
              <p className="text-sm font-semibold">Hackathon AI Console</p>
              <p className="text-xs text-[var(--steel)]">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="badge badge-success">Session active</span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div>
            <span className="badge badge-dark">Dashboard</span>
            <h1 className="display-title mt-6 max-w-3xl">
              Your starter stack is ready for product work.
            </h1>
            <p className="body-lead mt-6 max-w-2xl">
              The authenticated user is synced into Prisma on load. From here,
              teams can add domain models, product flows, and AI-facing tools
              without re-solving the foundation.
            </p>
          </div>

          <div className="product-card product-card-blue flex min-h-[360px] flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <span className="badge bg-white/15 text-white">Control plane</span>
              <span className="text-xs text-white/70">Ready</span>
            </div>
            <div>
              <p className="text-sm text-white/75">Current user</p>
              <h2 className="mt-2 break-words text-3xl font-semibold leading-tight tracking-[-0.015em]">
                {email}
              </h2>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overview.map(([label, value, state]) => (
            <article key={label} className="quiet-card p-6">
              <p className="text-sm text-[var(--steel)]">{label}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.01em]">
                {value}
              </h2>
              <span className="badge badge-light mt-6">{state}</span>
            </article>
          ))}
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div className="rounded-[32px] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="section-title">Quick-start matrix</h2>
            <div className="mt-8 grid gap-4">
              {quickStarts.map(([title, copy], index) => (
                <article key={title} className="feature-card p-5">
                  <div className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--slate)]">
                        {copy}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="quiet-card overflow-hidden p-5 md:p-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[var(--steel)]">
                  System status
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.01em]">
                  Core services
                </h2>
              </div>
              <span className="badge badge-success">Operational</span>
            </div>
            <div className="overflow-x-auto">
              <table className="status-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Provider</th>
                    <th>Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Authentication</td>
                    <td>Clerk</td>
                    <td>Middleware protects /dashboard.</td>
                  </tr>
                  <tr>
                    <td>User sync</td>
                    <td>Server action</td>
                    <td>Dashboard load upserts the Clerk profile.</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>Prisma + Supabase</td>
                    <td>Runtime queries use the pooled DATABASE_URL.</td>
                  </tr>
                  <tr>
                    <td>Interface</td>
                    <td>Tailwind CSS v4</td>
                    <td>Design tokens drive the route surfaces.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
