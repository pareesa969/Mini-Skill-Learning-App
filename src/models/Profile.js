import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true },
    answers: { type: Array },
    aiSummary: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
