"use client";
import { useEffect, useState } from "react";

interface CTFdScoreboardUserTeam {
  account_id: number;
  name: string;
  score: number;
  pos: number;
}

interface ScoreboardProps {
  ctfd_url: string;
  limit: number;
}

interface ScoreboardTableProps {
  scoreboard: CTFdScoreboardUserTeam[];
  limit: number;
}

export function ScoreboardTable(props: ScoreboardTableProps) {
  const { scoreboard, limit } = props;
  if (scoreboard.length < limit) {
    for (let i = scoreboard.length; i < limit; i++) {
      scoreboard.push({
        account_id: -1,
        name: "—",
        score: 0,
        pos: i + 1,
      });
    }
  }
  return (
    <div className="flex flex-col gap-1 w-full">
      {scoreboard.filter((user, idx) => idx < limit).map((user, idx) => (
        <div key={idx} className="flex flex-row bg-surface-100 border-surface-150 border-2 rounded-lg px-1 leading-7">
          <span className="flex flex-col basis-1/12 font-mono">
            {idx + 1}
          </span>
          <span className="flex flex-col basis-9/12 font-mono overflow-hidden">
            <span className="whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
              {user.name}
            </span>
          </span>
          <span className="flex flex-col basis-2/12 font-mono">
            {user.score}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Scoreboard(props: ScoreboardProps) {
  const { ctfd_url, limit } = props;
  // Test data
  const test_scoreboard = [
    {
      account_id: 1,
      bracket_type: "user",
      name: "thisisareallylongnamethatshouldntfitinthescoreboardbutitdoes",
      score: 24803,
      pos: 1,
    },
    {
      account_id: 2,
      bracket_type: "user",
      name: "test2",
      score: 50,
      pos: 2,
    },
    {
      account_id: 3,
      bracket_type: "user",
      name: "test3",
      score: 25,
      pos: 3,
    },
    {
      account_id: 4,
      bracket_type: "user",
      name: "test4",
      score: 10,
      pos: 4,
    },
    {
      account_id: 5,
      bracket_type: "user",
      name: "test5",
      score: 5,
      pos: 5,
    },
    {
      account_id: 6,
      bracket_type: "user",
      name: "test6",
      score: 1,
      pos: 6,
    },
    {
      account_id: 7,
      bracket_type: "user",
      name: "test7",
      score: 0,
      pos: 7,
    }
  ];
  const [matched_scoreboard, setMatchedScoreboard] = useState<CTFdScoreboardUserTeam[]>([]);
  const [unmatched_scoreboard, setUnmatchedScoreboard] = useState<CTFdScoreboardUserTeam[]>([]);
  // Initialize split scoreboard from the CTFd API
  useEffect(() => {
    async function fetchScoreboard() {
      const endpoint_scoreboard_full = new URL("api/v1/scoreboard", ctfd_url);
      const response_full = await fetch(endpoint_scoreboard_full, { redirect: "follow", cache: "reload" });
      console.log({ response_full });
      if (!response_full.ok) return;
      const data_full = await response_full.json()
      // console.log(endpoint_scoreboard)
      const data = data_full.data;
      console.log(data.data);
      // const data = test_scoreboard;
      const beginner = data.filter((t : any) => t.bracket_name === "Beginner");
      const advanced = data.filter((t : any) => t.bracket_name !== "Beginner");
      setMatchedScoreboard(beginner as CTFdScoreboardUserTeam[]);
      setUnmatchedScoreboard(advanced as CTFdScoreboardUserTeam[]);
    }
    fetchScoreboard();
    setInterval(fetchScoreboard, 1000 * 10);
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col">
        <span className="font-medium text-lg">
          Advanced Division
        </span>
        <ScoreboardTable
          scoreboard={matched_scoreboard}
          limit={limit}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-lg">
          Beginner Division
        </span>
        <ScoreboardTable
          scoreboard={unmatched_scoreboard}
          limit={limit}
        />
      </div>
    </div>
  );
}
