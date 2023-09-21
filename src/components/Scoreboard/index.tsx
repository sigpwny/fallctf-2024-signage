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
  limit?: number;
}

interface ScoreboardTableProps {
  scoreboard: CTFdScoreboardUserTeam[];
  limit?: number;
}

export function ScoreboardTable(props: ScoreboardTableProps) {
  const { scoreboard, limit } = props;
  const display_limit = limit === undefined ? scoreboard.length : limit;
  return (
    <div className="flex flex-col gap-1 w-full">
      {scoreboard.length != 0 ? (
        <>
          {scoreboard.filter((user, idx) => idx < display_limit).map((user, idx) => (
            <div key={idx} className="flex flex-row bg-surface-100 border-surface-150 border-2 rounded-lg p-1">
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

export default function Scoreboard(props: ScoreboardProps) {
  const { ctfd_url, limit } = props;
  // Test data
  const test_scoreboard = [
    {
      account_id: 1,
      account_type: "user",
      name: "thisisareallylongnamethatshouldntfitinthescoreboardbutitdoes",
      score: 24803,
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
  const [matched_scoreboard, setMatchedScoreboard] = useState<CTFdScoreboardUserTeam[]>(test_scoreboard);
  const [unmatched_scoreboard, setUnmatchedScoreboard] = useState<CTFdScoreboardUserTeam[]>(test_scoreboard);
  // Initialize split scoreboard from the CTFd API
  useEffect(() => {
    async function fetchScoreboard() {
      const endpoint_scoreboard = new URL("api/v1/split_scores", ctfd_url);
      const response = await fetch(endpoint_scoreboard, { redirect: "follow", cache: "reload" });
      if (!response.ok) return;
      const data = await response.json();
      if (!data.success || !data.data || !data.data.matched || !data.data.unmatched) return;
      console.log(data.data)
      setMatchedScoreboard(data.data.matched as CTFdScoreboardUserTeam[]);
      setUnmatchedScoreboard(data.data.unmatched as CTFdScoreboardUserTeam[]);
    }
    // fetchScoreboard();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <div className="flex flex-col">
        <span className="font-medium text-xl">
          Advanced Division
        </span>
        <ScoreboardTable
          scoreboard={matched_scoreboard}
          limit={limit}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-xl">
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