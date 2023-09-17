"use client";
import Scoreboard from "@/components/Scoreboard";

export default function ScoreboardPage() {
  return (
    <>
      <Scoreboard
        ctfd_url="http://signage-api.sigpwny.com/"
        matched={true}
        limit={5}
      />
      <Scoreboard
        ctfd_url="http://signage-api.sigpwny.com/"
        matched={false}
        limit={5}
      />
    </>
  );
}