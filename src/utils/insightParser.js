export function extractSkillsFromText(text = "") {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node",
    "HTML",
    "CSS",
    "Python",
    "AI",
    "Machine Learning",
    "Data Analysis",
  ];

  return skills.filter((skill) =>
    text.toLowerCase().includes(skill.toLowerCase())
  );
}
