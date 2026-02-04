import { SKILL_RESOURCES } from "@/data/recommendations.data";

export function buildRecommendations(skills = []) {
  return skills.map((skill) => ({
    skill,
    resources: SKILL_RESOURCES[skill] || [],
  }));
}
