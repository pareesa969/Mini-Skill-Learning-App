"use client";

import { useEffect, useState } from "react";

export default function Recommendations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/recommendations")
      .then((res) => res.json())
      .then((res) => setData(res.recommendations));
  }, []);

  if (!data.length) return null;

  return (
    <div className="card p-4 mt-4">
      <h4>Recommended For You</h4>

      {data.map((item) => (
        <div key={item.skill} className="mt-3">
          <h6>{item.skill}</h6>
          <ul>
            {item.resources.map((r) => (
              <li key={r.title}>
                <a href={r.link} target="_blank">
                  {r.title} ({r.type})
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
