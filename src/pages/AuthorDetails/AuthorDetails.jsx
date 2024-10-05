import React, { useState, useEffect } from "react";
import { FilterMenu, FeaturedArticle, Footer } from "../../components";
import "./AuthorDetails.css";
import { Cover } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/api";
import { Avatar, Post } from "../../assets";


import { MainLayout } from "../../layouts";
import AuthorDetailsMain from "./AuthorDetailsMain";
import AuthorDetailsSide from "./AuthorDetailsSide";


const filters = [
  { name: "Home", uid: "1" },
  { name: "Lists", uid: "2" },
  { name: "About", uid: "3" },
];

function AuthorDetails() {
  const [activeFilter, setActiveFilter] = useState({
    name: "Home",
    uid: "1",
  });


  return <MainLayout Main={AuthorDetailsMain} Side={AuthorDetailsSide}></MainLayout>;

}

export default AuthorDetails;
