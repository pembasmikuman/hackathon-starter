import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
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
          <span className="badge badge-dark">Create workspace</span>
          <h1 className="display-title mt-6 max-w-2xl">
            Open a launch-ready AI product foundation.
          </h1>
          <p className="body-lead mt-6 max-w-xl">
            Create an account, land in the protected dashboard, and start
            replacing starter copy with your product logic.
          </p>
          <div className="product-card product-card-coral mt-10 hidden min-h-[260px] md:flex md:flex-col md:justify-between">
            <span className="badge bg-white/15 text-white">New build</span>
            <p className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.01em]">
              Black-pill CTAs, vibrant release cards, and a clean data plane.
            </p>
          </div>
        </section>

        <section className="order-1 flex justify-center lg:order-2">
          <div className="auth-panel w-full max-w-[480px] p-3">
            <SignUp />
          </div>
        </section>
      </div>
    </main>
  );
}
