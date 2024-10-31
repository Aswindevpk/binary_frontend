import React from "react";
import { SideStaffPicks,SideFollow,SideTopics} from '@components';
import { Footer } from "@components/layouts";

const LibrarySide = () => {
  return (
    <>
      <SideStaffPicks />
      <SideTopics />
      <SideFollow />
      <Footer />
    </>
  );
};

export default LibrarySide;
