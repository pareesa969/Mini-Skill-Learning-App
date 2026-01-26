import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="card p-3">
      <ul className="nav flex-column gap-2">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/questionnaire">Questionnaire</Link></li>
        <li><Link href="/skills">Skills</Link></li>
      </ul>
    </div>
  );
}
