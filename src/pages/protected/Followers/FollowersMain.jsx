import React from "react";
import UserDetail from "../Following/UserDetail";
import { Header1 } from "@components/ui";

function FollowersMain() {
  return (
    <>
      <div className="flex gap-1 pt-10 text-sm text-secondary">
        <span >Appuspk</span>
        <span >&gt;</span>
        <span >Followers</span>
      </div>
      <Header1 className="pt-1">Followers</Header1>
      <div className="flex flex-col gap-4 mt-6">
        <UserDetail />
        <UserDetail />
        <UserDetail />
      </div>
    </>
  );
}

export default FollowersMain;
