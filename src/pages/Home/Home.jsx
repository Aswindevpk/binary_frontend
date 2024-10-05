import React from "react";
import { MainLayout } from "../../layouts";
import HomeMain from "./HomeMain";
import HomeSide from "./HomeSide";


const Home = () => {
  return <MainLayout Main={HomeMain} Side={HomeSide}></MainLayout>;
};

export default Home;
