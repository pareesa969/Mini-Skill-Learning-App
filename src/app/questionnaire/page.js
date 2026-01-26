import AppLayout from '@/components/layout/AppLayout';
import QuestionnaireFlow from '@/components/questionnaire/QuestionnaireFlow';

export default function QuestionnairePage() {
  return (
    <AppLayout>
      <h2 className="mb-4">Questionnaire</h2>
      <QuestionnaireFlow />
    </AppLayout>
  );
}
