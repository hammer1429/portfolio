import Link from "next/link";

const frameworks = [
  {
    name: "Next.js",
    category: "웹 프레임워크",
    mark: "N",
    accent: "text-white",
  },
  {
    name: "React",
    category: "UI 라이브러리",
    mark: "R",
    accent: "text-sky-200",
  },
  {
    name: "Tailwind CSS",
    category: "스타일링 프레임워크",
    mark: "T",
    accent: "text-cyan-200",
  },
];

const tools = [
  { name: "Git", mark: "G", accent: "text-orange-200" },
  { name: "GitHub", mark: "GH", accent: "text-white" },
  { name: "VS Code", mark: "VS", accent: "text-sky-200" },
  { name: "Unity", mark: "U", accent: "text-white" },
  { name: "Unreal Engine", mark: "UE", accent: "text-blue-200" },
  { name: "Linux", mark: "L", accent: "text-yellow-200" },
  { name: "Vercel", mark: "V", accent: "text-white" },
  { name: "MongoDB", mark: "M", accent: "text-green-200" },
  { name: "PyCharm", mark: "PC", accent: "text-emerald-200" },
  { name: "MySQL", mark: "SQL", accent: "text-sky-200" },
  { name: "DB Browser", mark: "DB", accent: "text-amber-200" },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-10">
        <section
          aria-labelledby="about-title"
          className="relative isolate flex min-h-[55vh] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950/35 px-7 py-14 shadow-2xl shadow-indigo-950/30 sm:px-12 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-300/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-indigo-200">
              ABOUT ME
            </p>
            <h1
              id="about-title"
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              김용현
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              핵심 분야 : 정보보안, 게임제작
              <br></br>
              연락처 : 010-9394-2539
              <br></br>
              이메일 : devil10121146@gmail.com
            </p>

            <section>
              <p className=""></p>
            </section>

          </div>
        </section>

        <section
          aria-labelledby="frameworks-title"
          className="rounded-3xl border border-white/10 bg-slate-950/35 p-7 shadow-2xl shadow-indigo-950/20 sm:p-10"
        >
          <div className="mb-7">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-300">
              MY TOOLKIT
            </p>
            <h2
              id="frameworks-title"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              개발 가능한 프레임워크
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              웹 인터페이스를 만들고 스타일을 구현할 때 사용하는 기술입니다.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {frameworks.map(({ name, category, mark, accent }) => (
              <li
                key={name}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.07]"
              >
                <span
                  aria-hidden="true"
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-900 text-lg font-bold ${accent}`}
                >
                  {mark}
                </span>
                <span>
                  <span className="block font-semibold text-white">{name}</span>
                  <span className="mt-1 block text-xs text-slate-400">
                    {category}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="tools-title"
          className="rounded-3xl border border-white/10 bg-slate-950/35 p-7 shadow-2xl shadow-indigo-950/20 sm:p-10"
        >
          <div className="mb-7">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-300">
              TOOLS & PLATFORMS
            </p>
            <h2
              id="tools-title"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              사용 가능한 도구
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ name, mark, accent }) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.07]"
              >
                <span
                  aria-hidden="true"
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-900 text-lg font-bold ${accent}`}
                >
                  {mark}
                </span>
                <span className="font-semibold text-white">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <div>
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
