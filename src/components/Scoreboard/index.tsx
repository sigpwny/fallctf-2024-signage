"use client";
import { useEffect, useState } from "react";

interface CTFdScoreboardUser {
  account_id: number;
  name: string;
  pos: number;
}

export default function Scoreboard({ ctfd_url }: { ctfd_url: string }) {
  const [scoreboard, setScoreboard] = useState<CTFdScoreboardUser[]>([]);
  function updateScoreboard(scoreboard_data: CTFdScoreboardUser[]) {
    // Sort by position
    scoreboard_data.sort((a, b) => a.pos - b.pos);
    // Update scoreboard
    setScoreboard(scoreboard_data);
  }
  // Initialize scoreboard from the CTFd API
  useEffect(() => {
    async function fetchScoreboard() {
      const endpoint = new URL("api/v1/scoreboard", ctfd_url);
      const response = await fetch(endpoint, { redirect: "follow", cache: "reload" });
      if (!response.ok) return;
      const data = await response.json();
      updateScoreboard(data.data as CTFdScoreboardUser[]);
      console.log(data.data);
    }
    fetchScoreboard();
  }, []);
  return (
    <div className="flex flex-col">
      {scoreboard.map((user, idx) => (
        <div key={idx} className="flex flex-row">
          <span className="flex flex-col w-[5ch] font-medium font-mono text-[3rem] leading-none">
            {user.pos}
          </span>
          <span className="flex flex-col font-medium font-mono text-[3rem] leading-none">
            {user.name}
          </span>
        </div>
      ))}
    </div>
  );
}