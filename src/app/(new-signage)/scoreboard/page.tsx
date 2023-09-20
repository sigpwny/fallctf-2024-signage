"use client";
import Scoreboard from "@/components/Scoreboard";

export default function ScoreboardPage() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <div className="flex flex-col">
        <span className="font-medium text-xl">
          Advanced Division
        </span>
        <Scoreboard
          ctfd_url="http://signage-api.sigpwny.com/"
          matched={true}
          limit={5}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-xl">
          Beginner Division
        </span>
        <Scoreboard
          ctfd_url="http://signage-api.sigpwny.com/"
          matched={false}
          limit={5}
        />
      </div>
    </div>
  );
}