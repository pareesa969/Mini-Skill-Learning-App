import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Analysis from "@/models/Analysis";
import { getOrCreateUserId } from "@/utils/getUserId";
import { extractSkillsFromText } from "@/utils/insightParser";
import PDFDocument from "pdfkit";

export async function GET() {
  await connectDB();
  const userId = getOrCreateUserId();
  const analyses = await Analysis.find({ userId });

  const skillMap = {};
  analyses.forEach((a) => {
    extractSkillsFromText(a.aiResult).forEach((s) => {
      skillMap[s] = (skillMap[s] || 0) + 1;
    });
  });

  const doc = new PDFDocument();
  const buffers = [];

  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => {});

  doc.fontSize(18).text("Learning Insights Report");
  doc.moveDown();
  doc.text(`Total Documents: ${analyses.length}`);
  doc.moveDown();

  Object.entries(skillMap).forEach(([skill, count]) => {
    doc.text(`${skill}: ${count}`);
  });

  doc.end();

  return new NextResponse(Buffer.concat(buffers), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=learning-insights.pdf",
    },
  });
}
