"use server";

import { redirect } from "next/navigation";
import { createGithubPost } from "./github";
import { createvercell } from "./vercell";

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