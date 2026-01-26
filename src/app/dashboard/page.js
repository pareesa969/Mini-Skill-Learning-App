import AppLayout from '@/components/layout/AppLayout';
import DashboardGrid from '@/components/dashboard/DashboardGrid';

export default function DashboardPage() {
  return (
    <AppLayout>
      <h2 className="mb-4">Dashboard</h2>
      <DashboardGrid />
    </AppLayout>
  );
}
