import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@context/AuthContext";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { CommentBox, Avatar, ActionDropDown } from "@components";
import { Bookmark, Clap, Comment } from "@components/ui";
import { api } from "@services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { calculateReadingTime } from "@utils/common";

const BlogDetails = () => {
  let { authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [readTime, setreadTime] = useState(0);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await api.get(`/home/article/${id}/`);
        const fetchedBlog = response.data;
        setreadTime(calculateReadingTime(fetchedBlog.content));
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    getBlog();
  }, [id, authTokens]);

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="pt-8 max-w-[900px] mx-4 sm:mx-auto">
      {blog.is_premium && (
        <div className="flex items-center pb-2 gap-1">
          <FontAwesomeIcon icon={faStar} color="rgb(255, 192, 23)" size="xs" />
          <span className="text-sm text-secondary">Member-only story</span>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2 text-primary">
        <strong>{blog.title}</strong>
      </h1>
      <p className="text-lg leading-7 text-secondary  font-normal mb-6">
        {blog.subtitle}
      </p>

      <div className="flex items-center mb-8 gap-3">
        <Avatar
          username={blog.author.username}
          image_url={blog.author.img}
          size="medium-large"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-lg font-bold mr-2 ">
              {blog.author.username}
            </span>
            <a className="text-sm text-blue-600 font-semibold cursor-pointer no-underline">
              Follow
            </a>
          </div>
          <div className="mt-1 text-xs text-gray-500">{`${readTime} min read . Oct 16, 2024`}</div>
        </div>
      </div>

      <div className="flex flex-row border-t border-b border-neutral justify-between p-2.5">
        <div className="flex flex-row gap-4 items-center">
          <Clap claps={blog.clap_count} />
          <a
            onClick={toggleCommentBoxVisibility}
            className="flex items-center cursor-pointer"
          >
            <Comment comments={blog.comment_count} />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Bookmark is_bookmarked={blog.is_bookmarked} article_id={blog.uid} />
          <ActionDropDown>
            <li>Follow author</li>
            <li>Follow publication</li>
            <li>Mute author</li>
            <li>Mute publication</li>
            <li className="text-red-500">Report story..</li>
          </ActionDropDown>
        </div>
      </div>

      <div className="my-5 mx-auto  rounded-md overflow-hidden">
        <img src={blog.image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="mx-5 my-5 font-serif text-lg leading-[2rem]">
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>

      <CommentBox
        toggleVisibility={toggleCommentBoxVisibility}
        isCommentBoxVisible={isCommentBoxVisible}
        article_id={blog.uid}
      />
    </div>
  );
};

export default BlogDetails;
