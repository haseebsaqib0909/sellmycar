import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, we couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
        404 error
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
        Page not found
      </h1>
      <p className="text-lg text-slate-500 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors duration-200"
      >
        Back to home
      </Link>
    </section>
  );
}
