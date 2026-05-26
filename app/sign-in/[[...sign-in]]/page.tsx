import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="page-shell min-h-screen">
      <div className="container-page grid min-h-screen items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr]">
        <section className="order-2 lg:order-1">
          <Link href="/" className="mb-10 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
              H
            </span>
            <span className="text-sm font-semibold">Hackathon AI</span>
          </Link>
          <span className="badge badge-dark">Secure access</span>
          <h1 className="display-title mt-6 max-w-2xl">
            Sign in to your AI infrastructure console.
          </h1>
          <p className="body-lead mt-6 max-w-xl">
            Continue into the protected workspace where Clerk, Prisma, and
            Supabase are already connected for product teams.
          </p>
          <div className="product-card product-card-purple mt-10 hidden min-h-[260px] md:flex md:flex-col md:justify-between">
            <span className="badge bg-white/15 text-white">Auth surface</span>
            <p className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.01em]">
              Hosted identity, styled to match the product canvas.
            </p>
          </div>
        </section>

        <section className="order-1 flex justify-center lg:order-2">
          <div className="auth-panel w-full max-w-[480px] p-3">
            <SignIn />
          </div>
        </section>
      </div>
    </main>
  );
}
