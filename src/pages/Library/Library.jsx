import React from "react";
import "./Library.css";
import LibraryMain from "./LibraryMain";
import LibrarySide from "./LibrarySide";
import { MainLayout } from "../../layouts";

const Library = () => {
  return  <MainLayout Main={LibraryMain} Side={LibrarySide}/>;
};


export default Library;
