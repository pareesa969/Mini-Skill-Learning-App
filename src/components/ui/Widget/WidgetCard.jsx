import AppCard from '../Card/AppCard';

export default function WidgetCard({ title, value, footer }) {
  return (
    <AppCard className="gradient-border h-100">
      <h6 className="text-muted">{title}</h6>
      <h3>{value}</h3>
      {footer && <small className="text-secondary">{footer}</small>}
    </AppCard>
  );
}
