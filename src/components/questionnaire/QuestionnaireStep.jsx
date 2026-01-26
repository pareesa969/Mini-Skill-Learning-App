export default function QuestionnaireStep({ question, onSelect }) {
  return (
    <div className="card p-4">
      <h5>{question.text}</h5>
      <div className="d-grid gap-3 mt-3">
        {question.options.map((opt) => (
          <button
            key={opt}
            className="btn btn-outline-light"
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
