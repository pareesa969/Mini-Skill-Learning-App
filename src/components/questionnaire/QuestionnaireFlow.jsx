import { useState } from 'react';
import { questions } from '@/data/questionnaire.data';
import QuestionnaireStep from './QuestionnaireStep';

export default function QuestionnaireFlow() {
  const [index, setIndex] = useState(0);

  return (
    <QuestionnaireStep
      question={questions[index]}
      onSelect={() => setIndex(index + 1)}
    />
  );
}
