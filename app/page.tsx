import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <section
          aria-labelledby="intro-title"
          className="relative isolate flex min-h-[65vh] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 px-7 py-14 shadow-2xl shadow-indigo-950/30 sm:px-12 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-300/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-indigo-200">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-indigo-300"
              />
              SECURITY PORTFOLIO
            </p>
            <h1
              id="intro-title"
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              중요한 데이터는 지키고,
              <span className="mt-2 block text-indigo-300">
                서비스의 신뢰는 단단하게.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              데이터와 서비스를 안전하게 지키는 보안 전문가입니다.
              <br></br>
              문제를 꼼꼼히 살피고 더 신뢰할 수 있는 환경을 만드는 데 관심이
              있습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-indigo-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                자기소개 보기
              </Link>
              <Link
                href="#github"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                프로젝트 둘러보기
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-6">
          <Link
            href="/vercel"
            id="vercel"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <section
              aria-labelledby="vercel-title"
              className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/20 transition group-hover:-translate-y-1 group-hover:border-indigo-300/30 group-hover:bg-white/[0.07]"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Deployment
              </p>
              <h2 id="vercel-title" className="text-2xl font-semibold">
                Vercel
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                웹 프로젝트를 배포하고 서비스 결과를 확인하는 공간입니다.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-indigo-200">
                자세히 보기 <span aria-hidden="true" className="ml-2">→</span>
              </span>
            </section>
          </Link>

          <Link
            href="/github"
            id="github"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          >
            <section
              aria-labelledby="github-title"
              className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-slate-950/20 transition group-hover:-translate-y-1 group-hover:border-indigo-300/30 group-hover:bg-white/[0.07]"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
                Code
              </p>
              <h2 id="github-title" className="text-2xl font-semibold">
                GitHub
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                프로젝트 소스 코드와 개발 기록을 정리하는 공간입니다.
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-indigo-200">
                자세히 보기 <span aria-hidden="true" className="ml-2">→</span>
              </span>
            </section>
          </Link>
        </div>
      </div>
    </main>
  );
}
