import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Analysis from "@/models/Analysis";
import { getOrCreateUserId } from "@/utils/getUserId";
import { extractSkillsFromText } from "@/utils/insightParser";

export async function GET() {
  await connectDB();
  const userId = getOrCreateUserId();

  const analyses = await Analysis.find({ userId });

  const skillMap = {};
  analyses.forEach((item) => {
    extractSkillsFromText(item.aiResult).forEach((skill) => {
      skillMap[skill] = (skillMap[skill] || 0) + 1;
    });
  });

  return NextResponse.json({
    totalAnalyses: analyses.length,
    topSkills: Object.entries(skillMap).map(([skill, count]) => ({
      skill,
      count,
    })),
  });
}
