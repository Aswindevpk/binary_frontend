import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { FeaturedArticle } from "../../../components";
import "./ReadingList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEllipsis, faComment, faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import ReadingListInput from "./ReadingListInput";
import { Avatar } from "components";
import { toast } from "sonner";

function ReadingListMain({ user }) {
  let [articles, setArticles] = useState([]);
  let [loading, setLoading] = useState(true);


  //move to utls later
  const getCurrentDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    return today.toLocaleDateString("en-US", options); // Outputs: "Oct 13, 2024"
  };


  const fetchBlogs = async () => {
    try {
      const response = await api.get("/home/bookmarks");
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      toast.error("error")
      console.error("There was an error fetching the articles!", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <div className="ReadingList__header">
        <div className="ReadingList-profile">
          <Avatar username={user.username} image_url={user.img} size={'large'}/>
          <div className="ReadingList-profile-main">
            <h4>{user.username}</h4>
            <div className="ReadingList-main__sub">
              <span>{getCurrentDate()}</span>
              <span>.</span>
              {articles.length > 0 && <span>{articles.length} stories</span>}
              <FontAwesomeIcon
                icon={faLock}
                className="icons"
                color="gray"
                style={{ fontSize: "12px" }}
              />
            </div>
          </div>
        </div>
        <h2>Reading list</h2>
        <div className="ReadingList-cta">
          <div className="ReadingList-cta__left">
            <FontAwesomeIcon
              icon={faComment}
              className="icons"
              style={{ fontSize: "20px", color:'var(--color-border)'}}
              color="gray"
            />
            <FontAwesomeIcon
              icon={faHandsClapping}
              className="icons"
              style={{ fontSize: "20px",color:'var(--color-border)'}}
              color="gray"
            />
          </div>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="icons"
            style={{ fontSize: "18px" }}
            color="gray"
          />
        </div>
      </div>

      {articles.length > 0 ?(
        <>
        {articles.map((blog) => (
          <>
            <ReadingListInput key={blog.bookmark_id} id={blog.bookmark_id}/>
            <FeaturedArticle key={blog.uid} blog={blog} />
          </>
        ))}
        </>
      ):(
        <>
        <p className="para1">Add your favorite stories to your list. Simply click the
        on any Medium story to get started.</p>
        </>
      )}
    </div>
  );
}

export default ReadingListMain;
