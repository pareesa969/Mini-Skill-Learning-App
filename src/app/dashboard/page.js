import AppLayout from "@/components/layout/AppLayout";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import PersonalizedProfile from "@/components/dashboard/PersonalizedProfile";
import Recommendations from "@/components/dashboard/Recommendations";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h2 className="mb-4">Dashboard</h2>

      {/* Existing dashboard widgets */}
      <DashboardGrid />

      {/* Personalized AI summary from questionnaire */}
      <PersonalizedProfile />

      {/* Skill & resource recommendations */}
      <Recommendations />
    </AppLayout>
  );
}
