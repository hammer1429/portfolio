import { io } from "next/cache";
import { Types } from "mongoose";
import { githubModel } from "../models/github";
import { connectDB } from "./mongodb";

export type GithubPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export function getGithubPostUrl(content: string): string | undefined {
  for (const match of content.matchAll(/https?:\/\/[^\s]+/gi)) {
    const url = match[0].replace(/[.,!?;:)\]}]+$/, "");

    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
        return url;
      }
    } catch {
      continue;
    }
  }

  return undefined;
}

type GithubPostDocLike = {
  _id: unknown;
  title: string;
  content: string;
  createdAt?: Date;
};

function toGithubPost(doc: GithubPostDocLike): GithubPost {
  return {
    id: String(doc._id),
    title: doc.title,
    content: doc.content,
    createdAt: doc.createdAt?.toISOString().slice(0, 10) ?? "날짜 없음",
  };
}

export async function getGithubPosts(): Promise<GithubPost[]> {
  await io();
  await connectDB();
  const docs = await githubModel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => toGithubPost(doc as GithubPostDocLike));
}

export async function getGithubPost(
  id: string,
): Promise<GithubPost | undefined> {
  if (!Types.ObjectId.isValid(id)) {
    return undefined;
  }

  await io();
  await connectDB();
  const doc = await githubModel.findById(id).lean();
  return doc ? toGithubPost(doc as GithubPostDocLike) : undefined;
}

export async function createGithubPost(input: {
  title: string;
  content: string;
}): Promise<GithubPost> {
  await connectDB();
  const doc = await githubModel.create(input);
  return toGithubPost(doc);
}

export async function updateGithubPost(
  id: string,
  input: { title: string; content: string },
): Promise<GithubPost | undefined> {
  if (!Types.ObjectId.isValid(id)) {
    return undefined;
  }

  await connectDB();
  const doc = await githubModel
    .findByIdAndUpdate(id, input, { new: true, runValidators: true })
    .lean();
  return doc ? toGithubPost(doc as GithubPostDocLike) : undefined;
}

export async function deleteGithubPost(id: string): Promise<boolean> {
  if (!Types.ObjectId.isValid(id)) {
    return false;
  }

  await connectDB();
  const result = await githubModel.deleteOne({ _id: id });
  return result.deletedCount === 1;
}