import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteGithubPostAction } from "../../lib/action";
import { getGithubPost } from "../../lib/github";

type Props = { params: Promise<{ id: string }> };

function linkifyContent(content: string) {
  return content.split(/(https?:\/\/[^\s]+)/gi).map((segment, index) => {
    if (!/^https?:\/\//i.test(segment)) {
      return segment;
    }

    const url = segment.replace(/[.,!?;:)\]}]+$/, "");
    const punctuation = segment.slice(url.length);

    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
        return segment;
      }
    } catch {
      return segment;
    }

    return (
      <span key={index}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 underline decoration-indigo-300/50 underline-offset-4 hover:text-indigo-200"
        >
          {url}
        </a>
        {punctuation}
      </span>
    );
  });
}

async function GithubPostDetail({ params }: Props) {
  const { id } = await params;
  const post = await getGithubPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <article className="flex w-full max-w-5xl flex-col gap-8">
        <section
          aria-labelledby="github-post-title"
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
            id="github-post-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-400">{post.createdAt}</p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 sm:p-8">
          <p className="whitespace-pre-wrap leading-8 text-slate-200">
            {linkifyContent(post.content)}
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/github/${post.id}/edit`}
            className="rounded-full bg-indigo-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            수정하기
          </Link>
          <form action={deleteGithubPostAction.bind(null, post.id)}>
            <button
              type="submit"
              className="rounded-full border border-rose-300/40 px-6 py-3 font-semibold text-rose-200 transition hover:border-rose-300/70 hover:bg-rose-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              삭제하기
            </button>
          </form>
          <Link
            href="/github"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </article>
    </main>
  );
}

function GithubPostDetailFallback() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-white sm:px-12">
      <p className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-slate-300">
        게시글을 불러오는 중입니다...
      </p>
    </main>
  );
}

export default function GithubPostPage({ params }: Props) {
  return (
    <Suspense fallback={<GithubPostDetailFallback />}>
      <GithubPostDetail params={params} />
    </Suspense>
  );
}