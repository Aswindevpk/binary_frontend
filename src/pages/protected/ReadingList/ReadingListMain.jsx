import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { FeaturedArticle } from "@components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import ReadingListInput from "./ReadingListInput";
import { ActionDropDown, Avatar } from "@components";
import { toast } from "sonner";
import { Clap, Comment} from "@components/ui";


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
      console.log(error);
      toast.error("error");
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
      <div className="my-8">
        <div className="flex gap-2 items-center">
          <Avatar
            username={user.username}
            image_url={user.img}
            size={"large"}
          />
          <div>
            <h4 className="font-bold">{user.username}</h4>
            <div className="flex items-center gap-1 text-sm text-secondary">
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
        <h2 className="my-4 text-3xl font-bold pb-10 border-b">Reading list</h2>
      </div>

      {articles.length > 0 ? (
        <>
          {articles.map((blog) => (
            <>
              <ReadingListInput key={blog.bookmark_id} id={blog.bookmark_id} />
              <FeaturedArticle key={blog.uid} blog={blog} />
            </>
          ))}
        </>
      ) : (
        <>
          <p className="text-center text-sm">
            Add your favorite stories to your list. Simply click the on any
            Medium story to get started.
          </p>
        </>
      )}
    </div>
  );
}

export default ReadingListMain;
