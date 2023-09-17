"use client";
import { useEffect, useState } from "react";

interface CTFdScoreboardUserTeam {
  account_id: number;
  account_type: string;
  name: string;
  pos: number;
}

interface ScoreboardProps {
  ctfd_url: string;
  matched: boolean;
  limit?: number;
}

export default function Scoreboard(data: ScoreboardProps) {
  const { ctfd_url, matched, limit } = data;
  const [scoreboard, setScoreboard] = useState<CTFdScoreboardUserTeam[]>([]);
  // Initialize split scoreboard from the CTFd API
  useEffect(() => {
    async function fetchScoreboard() {
      const endpoint_scoreboard = new URL("api/v1/split_scores", ctfd_url);
      const response = await fetch(endpoint_scoreboard, { redirect: "follow", cache: "reload" });
      if (!response.ok) return;
      const data = await response.json();
      if (!data.success || !data.data || !data.data.matched || !data.data.unmatched) return;
      console.log(data.data)
      // Get first 5 users from the matched or unmatched scoreboard, or all if limit is not set
      const scoreboard = matched ? data.data.matched : data.data.unmatched;
      const scoreboard_limit = limit ? limit : scoreboard.length;
      setScoreboard(scoreboard.slice(0, scoreboard_limit));
    }
    fetchScoreboard();
  }, []);
  return (
    <div className="flex flex-col">
      {scoreboard.length != 0 ? (
        <>
          {scoreboard.map((user, idx) => (
            <div key={idx} className="flex flex-row">
              <span className="flex flex-col w-[5ch] font-medium font-mono text-[3rem] leading-none">
                {idx + 1}
              </span>
              <span className="flex flex-col font-medium font-mono text-[3rem] leading-none">
                {user.name}
              </span>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-row">
          <span className="font-medium text-[3rem] leading-none">
            Scoreboard is currently hidden
          </span>
        </div>
      )}
    </div>
  );
}