"use client";

import { useState } from "react";

export default function QuestionnaireStep({ question, onNext }) {
  const [value, setValue] = useState(
    question?.type === "multi" ? [] : ""
  );

  if (!question) return null;

  const handleSubmit = () => {
    onNext({ id: question.id, answer: value });
  };

  return (
    <div className="card p-4">
      <h5>{question.text}</h5>

      {(question.type === "single" ||
        question.type === "multi") &&
        question.options.map((opt) => (
          <button
            key={opt}
            className={`btn ${
              value.includes?.(opt)
                ? "btn-primary"
                : "btn-outline-light"
            } d-block mt-2`}
            onClick={() =>
              question.type === "single"
                ? setValue(opt)
                : setValue((prev) =>
                    prev.includes(opt)
                      ? prev.filter((v) => v !== opt)
                      : [...prev, opt]
                  )
            }
          >
            {opt}
          </button>
        ))}

      {question.type === "text" && (
        <textarea
          className="form-control mt-3"
          rows={2}
          placeholder={question.placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      <button
        className="btn btn-primary mt-4"
        onClick={handleSubmit}
        disabled={!value && !question.optional}
      >
        Continue
      </button>
    </div>
  );
}
