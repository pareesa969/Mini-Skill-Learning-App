"use client";

import { useEffect, useState } from "react";

export default function DashboardInsights() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard/insights")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="card p-4 mt-4">
      <h5>Total Documents Analyzed</h5>
      <h2>{data.totalAnalyses}</h2>

      <h6 className="mt-3">Top Skills</h6>
      <ul>
        {data.topSkills.map((s) => (
          <li key={s.skill}>
            {s.skill} ({s.count})
          </li>
        ))}
      </ul>
    </div>
  );
}
