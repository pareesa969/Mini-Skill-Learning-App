export const questions = [
  {
    id: 1,
    type: "single",
    text: "Who are you using this app as?",
    options: [
      "Parent or guardian",
      "Older sibling",
      "Younger sibling",
      "Other family member",
    ],
  },
  {
    id: 2,
    type: "multi",
    text: "What kind of challenges are most common right now?",
    options: [
      "Homework or study time",
      "Emotional meltdowns or shutdowns",
      "Sensory overload (noise, crowds, textures, lights)",
      "Daily routines and transitions",
      "Communication misunderstandings",
      "Making or keeping friends",
    ],
    maxSelections: 3,
  },
  {
    id: 3,
    type: "single",
    text: "How does the child usually respond during difficult moments?",
    options: [
      "Gets quiet or withdrawn",
      "Gets upset or frustrated",
      "Gets distracted or restless",
      "Depends on the situation",
      "Not sure yet",
    ],
  },
  {
    id: 4,
    type: "text",
    text: "What’s one situation you’d like help with first?",
    placeholder: "Example: He refuses to start homework after school",
  },
  {
    id: 5,
    type: "text",
    text: "Anything important we should keep in mind?",
    optional: true,
    placeholder:
      "Noise sensitivity, strengths, triggers, preferences (optional)",
  },
];
