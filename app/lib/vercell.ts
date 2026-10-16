import { connectDB } from "./mongodb";
import { vercell as vercellmodel } from "../models/vercell";
import { io } from "next/cache";

export type vercell = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type vercellDocLike = {
  _id: unknown;
  title: string;
  content: string;
  createdAt?: Date;
};

function tovercell(doc: vercellDocLike): vercell {
  return {
    id: String(doc._id),
    title: doc.title,
    content: doc.content,
    createdAt: doc.createdAt?.toISOString().slice(0, 10) ?? "날짜 없음",
  };
}

export async function getvercells(): Promise<vercell[]> {
  await io();
  await connectDB();
  const docs = await vercellmodel.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) => tovercell(doc as vercellDocLike));
}

export async function getvercell(id: string): Promise<vercell | undefined> {
  await io();
  await connectDB();
  const doc = await vercellmodel.findById(id).lean();
  return doc ? tovercell(doc as vercellDocLike) : undefined;
}

export async function createvercell(input: {
  title: string;
  content: string;
}): Promise<vercell> {
  await connectDB();
  const doc = await vercellmodel.create(input);
  return tovercell(doc);
}
