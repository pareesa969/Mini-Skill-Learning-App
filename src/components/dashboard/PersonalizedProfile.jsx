"use client";

import { useEffect, useState } from "react";

export default function PersonalizedProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/api/profile/latest")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return null;

  return (
    <div className="card p-4 mt-4">
      <h4>Your Personalized Overview</h4>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {profile.aiSummary}
      </pre>
    </div>
  );
}
