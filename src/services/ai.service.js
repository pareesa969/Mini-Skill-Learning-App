import openai from "@/lib/openai";

export async function getProfileSummary(answers) {
  const prompt = `
You are an assistant helping caregivers.

Summarize this profile and identify:
- Main role
- Top challenges
- Primary focus areas

Profile Answers:
${JSON.stringify(answers, null, 2)}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
}

export async function extractFocusSkills(profileSummary) {
  const prompt = `
From the following profile summary, extract 3–5 focus skill areas.
Return ONLY a JSON array of strings.

Profile Summary:
${profileSummary}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return JSON.parse(res.choices[0].message.content);
}
