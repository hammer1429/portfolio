import { Schema, model, models } from "mongoose";

const githubSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const githubModel =
  models.GithubPost || model("GithubPost", githubSchema);