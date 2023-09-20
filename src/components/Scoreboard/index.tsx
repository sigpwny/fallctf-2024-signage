"use client";
import { useEffect, useState } from "react";

interface CTFdScoreboardUserTeam {
  account_id: number;
  account_type: string;
  name: string;
  score: number;
  pos: number;
}

interface ScoreboardProps {
  ctfd_url: string;
  matched: boolean;
  limit?: number;
}

export default function Scoreboard(data: ScoreboardProps) {
  const { ctfd_url, matched, limit } = data;
  // Test data
  const test_scoreboard = [
    {
      account_id: 1,
      account_type: "user",
      name: "thisisareallylongnamethatshouldntfitinthescoreboardbutitdoes",
      score: 100,
      pos: 1,
    },
    {
      account_id: 2,
      account_type: "user",
      name: "test2",
      score: 50,
      pos: 2,
    },
    {
      account_id: 3,
      account_type: "user",
      name: "test3",
      score: 25,
      pos: 3,
    },
    {
      account_id: 4,
      account_type: "user",
      name: "test4",
      score: 10,
      pos: 4,
    },
    {
      account_id: 5,
      account_type: "user",
      name: "test5",
      score: 5,
      pos: 5,
    },
    {
      account_id: 6,
      account_type: "user",
      name: "test6",
      score: 1,
      pos: 6,
    },
    {
      account_id: 7,
      account_type: "user",
      name: "test7",
      score: 0,
      pos: 7,
    }
  ];
  const [scoreboard, setScoreboard] = useState<CTFdScoreboardUserTeam[]>(test_scoreboard);
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
      // const scoreboard = matched ? data.data.matched : data.data.unmatched;
      // const scoreboard_limit = limit ? limit : scoreboard.length;
      // setScoreboard(scoreboard.slice(0, scoreboard_limit));
    }
    // fetchScoreboard();
  }, []);
  const display_limit = limit ? limit : scoreboard.length;
  return (
    <div className="flex flex-col gap-1 w-full">
      {scoreboard.length != 0 ? (
        <>
          {scoreboard.filter((user, idx) => idx < display_limit).map((user, idx) => (
            <div key={idx} className="flex flex-row bg-surface rounded-lg p-1">
              <span className="flex flex-col w-[5ch] font-mono">
                {idx + 1}
              </span>
              <span className="flex flex-col font-mono">
                {user.name}
              </span>
              <span className="flex flex-col w-[5ch] font-mono">
                {user.score}
              </span>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-row">
          <span className="font-medium leading-none">
            Scoreboard is currently hidden
          </span>
        </div>
      )}
    </div>
  );
}