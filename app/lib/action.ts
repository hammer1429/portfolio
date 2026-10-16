"use server";

import { redirect } from "next/navigation";
import { createGithubPost, deleteGithubPost, updateGithubPost } from "./github";
import { createvercell, deletevercell, updatevercell } from "./vercell";

export async function createGithubPostAction(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();
  if (!trimmedTitle || !trimmedContent) {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  await createGithubPost({ title: trimmedTitle, content: trimmedContent });
  redirect("/github");
}

export async function updateGithubPostAction(id: string, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();
  if (!trimmedTitle || !trimmedContent) {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const post = await updateGithubPost(id, {
    title: trimmedTitle,
    content: trimmedContent,
  });

  if (!post) {
    throw new Error("수정할 게시글을 찾을 수 없습니다.");
  }

  redirect(`/github/${post.id}`);
}

export async function deleteGithubPostAction(id: string) {
  const deleted = await deleteGithubPost(id);

  if (!deleted) {
    throw new Error("삭제할 게시글을 찾을 수 없습니다.");
  }

  redirect("/github");
}

export async function createVercellAction(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();
  if (!trimmedTitle || !trimmedContent) {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  await createvercell({ title: trimmedTitle, content: trimmedContent });
  redirect("/vercel");
}

export async function updateVercellAction(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");

  if (
    typeof id !== "string" ||
    typeof title !== "string" ||
    typeof content !== "string"
  ) {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const trimmedTitle = title.trim();
  const trimmedContent = content.trim();
  if (!trimmedTitle || !trimmedContent) {
    throw new Error("제목과 내용을 입력해 주세요.");
  }

  const post = await updatevercell(id, {
    title: trimmedTitle,
    content: trimmedContent,
  });

  if (!post) {
    throw new Error("수정할 게시글을 찾을 수 없습니다.");
  }

  redirect(`/vercel/${post.id}`);
}

export async function deleteVercellAction(id: string) {
  const deleted = await deletevercell(id);

  if (!deleted) {
    throw new Error("삭제할 게시글을 찾을 수 없습니다.");
  }

  redirect("/vercel");
}