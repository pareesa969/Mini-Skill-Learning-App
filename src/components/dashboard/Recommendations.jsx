"use client";

import { useEffect, useState } from "react";

export default function Recommendations() {
  const [items, setItems] = useState([]);

  useEffect(() => {
  fetch("/api/recommendations")
    .then((res) => res.json())
    .then((data) => {
      if (!data?.recommendations?.length) {
        console.info("No recommendations yet");
        return;
      }
      setItems(data.recommendations);
    })
    .catch((err) => {
      console.error("Recommendations fetch failed", err);
    });
}, []);


  if (!items.length) return null;

  return (
    <div className="card p-4 mt-4">
      <h4>Recommended For You</h4>

      {items.map((item) => (
        <div key={item.skill}>
          <h6>{item.skill}</h6>
          <ul>
            {item.resources.map((r) => (
              <li key={r.title}>{r.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
