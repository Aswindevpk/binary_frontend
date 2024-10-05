import React, {useState,useEffect} from "react";
import { FilterMenu, FeaturedArticle } from "../../components";
import "./AuthorDetails.css";
import { Cover } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/api";
import Lists from "./Lists";
import About from "./About";

const filters = [
  { name: "Home", uid: "1" },
  { name: "Lists", uid: "2" },
  { name: "About", uid: "3" },
];

const AuthorDetailsMain = () => {
  const [activeFilter, setActiveFilter] = useState({
    name: "Home",
    uid: "1",
  });

  let [blogs, setBlogs] = useState([]);

  // Fetch blogs for the active category whenever activeFilter changes
  useEffect(() => {
    const fetchBlogs = async (Topic) => {
      try {
        const response = await api.get(`/home/articles/?topic=${Topic}`);
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    fetchBlogs("Coding");
  }, []);
  return (
    <div className="AuthorDetails__main">
      <img className="AuthorDetails__main-cover" src={Cover} alt="" />
      <div className="AuthorDetails__main-header">
        <h2 className="AuthorDetails__main-header__h1">Aswin Dev P k</h2>
        <FontAwesomeIcon icon={faEllipsis} color="gray" className="icons" />
      </div>
      <div className="AuthorDetails__main-filterMenu">
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <div className="AuthorDetails__main-content">
        {activeFilter && activeFilter.uid == "1" && (
          <div>
            {blogs.map((blog) => (
              <FeaturedArticle key={blog.uid} blog={blog} />
            ))}
          </div>
        )}
        {activeFilter && activeFilter.uid == "2" && (
          <div>
            <Lists />
            <Lists />
            <Lists />
            <Lists />
            <Lists />
            <Lists />
            <Lists />
          </div>
        )}
        {activeFilter && activeFilter.uid == "3" && <About />}
      </div>
    </div>
  );
};

export default AuthorDetailsMain;
