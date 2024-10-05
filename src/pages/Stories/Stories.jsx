import React from "react";
import "./Stories.css";
import { MainLayout } from "../../layouts";
import StoriesMain from "./StoriesMain";
import StoriesSide from "./StoriesSide";

const Stories = () => {
  return <MainLayout Main={StoriesMain} Side={StoriesSide}></MainLayout>;
};

export default Stories;
