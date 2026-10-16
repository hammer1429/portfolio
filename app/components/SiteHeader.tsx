import Link from "next/link";

const navigationLinks = [
  { href: "/#github", label: "GitHub" },
  { href: "/#vercel", label: "Vercel" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
      <nav
        aria-label="주요 메뉴"
        className="mx-auto flex min-h-[76px] w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3 sm:px-8"
      >
        <Link
          href="/"
          aria-label="포트폴리오 홈"
          className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-300/30 bg-indigo-300/10 text-sm font-bold tracking-tight text-indigo-200 shadow-inner shadow-indigo-300/10 transition group-hover:border-indigo-200/60 group-hover:bg-indigo-300/15"
          >
            S
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.12em] text-white">
              PORTFOLIO
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] text-slate-400">
              SECURITY · GAME
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm font-medium text-slate-300">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:px-4"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/about"
            className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-2 font-semibold text-indigo-100 transition hover:border-indigo-200/50 hover:bg-indigo-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:px-4"
          >
            자기소개
          </Link>
        </div>
      </nav>
    </header>
  );
}
