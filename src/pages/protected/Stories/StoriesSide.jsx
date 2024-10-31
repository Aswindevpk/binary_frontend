import React from "react";
import { SideFollow, SideStaffPicks, SideTopics } from "@components";
import Footer from "@components/layouts/Footer/Footer";

const StoriesSide = () => {
  return (
    <>
      <SideStaffPicks />
      <SideTopics />
      <SideFollow />
      <Footer />
    </>
  );
};

export default StoriesSide;
