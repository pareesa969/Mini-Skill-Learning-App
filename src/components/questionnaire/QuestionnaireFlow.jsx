"use client";

import { useState } from "react";
import { questions } from "@/data/questionnaire.data";
import QuestionnaireStep from "./QuestionnaireStep";

export default function QuestionnaireFlow() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [aiSummary, setAiSummary] = useState(null);

  const handleNext = async (answer) => {
    const updated = [...answers, answer];
    setAnswers(updated);

    if (index < questions.length - 1) {
      setIndex(index + 1);
      return;
    }

    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: updated }),
    });

    if (!res.ok) {
      console.error("Profile API failed:", await res.text());
      return;
    }

    const data = await res.json();
    setAiSummary(data.aiSummary);
  };

  if (aiSummary) {
    return (
      <div className="card p-4">
        <h4>Your AI Summary</h4>
        <pre>{aiSummary}</pre>
      </div>
    );
  }

  return (
    <QuestionnaireStep
      question={questions[index]}
      onNext={handleNext}
    />
  );
}
