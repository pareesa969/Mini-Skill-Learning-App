import WidgetCard from '@/components/ui/Widget/WidgetCard';

export default function DashboardGrid() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <WidgetCard title="Skills Completed" value="12" footer="+2 this week" />
      </div>
      <div className="col-md-4">
        <WidgetCard title="Hours Learned" value="34h" footer="This month" />
      </div>
      <div className="col-md-4">
        <WidgetCard title="Streak" value="7 days" footer="Keep going" />
      </div>
    </div>
  );
}
