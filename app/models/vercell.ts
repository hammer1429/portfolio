import { Schema } from "mongoose";
import { model, models } from "mongoose";

export const vercellSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const vercell = models.vercell || model("vercell", vercellSchema);
