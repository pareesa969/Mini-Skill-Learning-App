import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";
import { getOrCreateUserId } from "@/utils/getUserId";

export async function GET() {
  await connectDB();
  const userId = getOrCreateUserId();

  const profile = await Profile.findOne({ userId }).sort({
    createdAt: -1,
  });

  return NextResponse.json(profile);
}
