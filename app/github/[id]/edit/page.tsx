import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updateGithubPostAction } from "../../../lib/action";
import { getGithubPost } from "../../../lib/github";

type Props = {
  params: Promise<{ id: string }>;
};

async function EditGithubPost({ params }: Props) {
  const { id } = await params;
  const post = await getGithubPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-10">
        <section
          aria-labelledby="edit-github-title"
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
            CODE &amp; PROJECTS
          </p>
          <h1
            id="edit-github-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            GitHub 글 수정
          </h1>
          <p className="mt-3 leading-7 text-slate-300">
            기존 게시글의 제목과 내용을 수정합니다.
          </p>
        </section>

        <form
          action={updateGithubPostAction.bind(null, post.id)}
          className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-semibold text-white">
              제목
            </label>
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={post.title}
              required
              className="rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-indigo-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="content"
              className="text-sm font-semibold text-white"
            >
              내용
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              defaultValue={post.content}
              required
              className="resize-y rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-indigo-300"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-full bg-indigo-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              수정하기
            </button>
            <Link
              href={`/github/${post.id}`}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              게시글로 돌아가기
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

function EditGithubPostFallback() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <p className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-slate-300">
        게시글을 불러오는 중입니다...
      </p>
    </main>
  );
}

export default function EditGithubPostPage({ params }: Props) {
  return (
    <Suspense fallback={<EditGithubPostFallback />}>
      <EditGithubPost params={params} />
    </Suspense>
  );
}