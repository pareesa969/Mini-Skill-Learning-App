import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";
import { getOrCreateUserId } from "@/utils/getUserId";
import { getProfileSummary } from "@/services/ai.service";

export async function POST(req) {
  const { answers } = await req.json();

  await connectDB();
  const userId = getOrCreateUserId();

  const aiSummary = await getProfileSummary(answers);

  await Profile.create({
    userId,
    answers,
    aiSummary,
  });

  return NextResponse.json({ aiSummary });
}
