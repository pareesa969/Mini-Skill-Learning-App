import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";
import { extractFocusSkills } from "@/services/ai.service";
import { buildRecommendations } from "@/utils/recommendationEngine";
import { getOrCreateUserId } from "@/utils/getUserId";

export async function GET() {
  try {
    await connectDB();
    const userId = getOrCreateUserId();

    const profile = await Profile.findOne({ userId }).sort({
      createdAt: -1,
    });

    if (!profile) {
      return NextResponse.json({ recommendations: [] });
    }

    const skills = await extractFocusSkills(profile.aiSummary);
    const recommendations = buildRecommendations(skills);

    return NextResponse.json({ recommendations });
  } catch (err) {
    console.error("RECOMMENDATION ERROR:", err);
    return NextResponse.json(
      { recommendations: [] },
      { status: 500 }
    );
  }
}
