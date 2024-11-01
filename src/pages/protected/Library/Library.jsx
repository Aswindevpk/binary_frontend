import React from "react";
import LibraryMain from "./LibraryMain";
import LibrarySide from "./LibrarySide";
import { MainLayout } from "@components/layouts";

const Library = () => {
  return  <MainLayout Main={LibraryMain} Side={LibrarySide}/>;
};


export default Library;
