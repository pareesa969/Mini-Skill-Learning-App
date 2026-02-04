import openai from "@/lib/openai";

export async function getProfileSummary(answers) {
  const prompt = `
You are an assistant helping caregivers.

Summarize the following questionnaire clearly.
Focus on:
- Who the caregiver is
- Main challenges
- Priority support needs

Return plain readable text only.

Questionnaire:
${JSON.stringify(answers, null, 2)}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content.trim();
}

export async function extractFocusSkills(summary) {
  const prompt = `
You are extracting focus skill areas for a learning support app.

IMPORTANT RULES:
- Return ONLY a valid JSON array
- Use ONLY the exact skill names below
- If none apply, return []

Allowed skill names:
- "Emotional Regulation"
- "Homework Support"
- "Sensory Management"
- "Communication Skills"

Profile Summary:
${summary}
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const content = res.choices[0].message.content.trim();

  try {
    const parsed = JSON.parse(content);

    // Ensure array of strings only
    if (Array.isArray(parsed)) {
      return parsed.filter((s) => typeof s === "string");
    }

    return [];
  } catch {
    console.error("extractFocusSkills JSON parse failed:", content);
    return [];
  }
}
