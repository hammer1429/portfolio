import { Suspense } from "react";
import Link from "next/link";
import { getvercells } from "../lib/vercell";

async function VercellList() {
  const vercells = await getvercells();

  return (
    <section aria-label="Vercel 게시글">
      {vercells.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {vercells.map((item) => (
            <li key={item.id}>
              <Link
                href={`/vercel/${item.id}`}
                className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <h2 className="text-lg font-semibold text-white transition group-hover:text-indigo-200">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-slate-400">{item.createdAt}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-slate-300">
          아직 작성된 글이 없습니다.
        </p>
      )}
    </section>
  );
}

function VercellListFallback() {
  return (
    <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-slate-300">
      게시글을 불러오는 중입니다...
    </p>
  );
}

export default function VercellPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-10">
        <section
          aria-labelledby="vercell-title"
          className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 px-7 py-10 shadow-2xl shadow-indigo-950/30 sm:px-12 sm:py-12"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-300/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-indigo-200">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-indigo-300"
            />
            DEPLOYMENT
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1
                id="vercell-title"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Vercel
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                배포 기록과 웹 프로젝트의 소식을 확인할 수 있습니다.
              </p>
            </div>
            <Link
              href="/vercel/new"
              className="inline-flex self-start rounded-full bg-indigo-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:self-auto"
            >
              + 새 글 작성
            </Link>
          </div>
        </section>

        <Suspense fallback={<VercellListFallback />}>
          <VercellList />
        </Suspense>

        <Link
          href="/"
          className="self-start rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
