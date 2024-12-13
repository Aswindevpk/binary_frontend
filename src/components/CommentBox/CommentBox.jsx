import React, { useEffect, useState } from "react";
import { Close } from "@assets";
import useComments from "./useComments";
import { Button } from "@components/ui";
import { Avatar } from "@components";
import { api } from "@services/api";
import { formatDate } from "../../utils/common";

const CommentBox = ({ toggleVisibility, isCommentBoxVisible, article_id }) => {
  let [user, setUser] = useState(null);
  const [comment, setComment] = useState("");
  const { comments, submitComment } = useComments(article_id);


  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);

  if(!user){
    return <p>loading...</p>
  }


  const onSubmit = () => {
    if (comment.trim() === "") return;
    submitComment(comment);
    setComment("");
  };

  return (
    <div
      className={`${
        isCommentBoxVisible
          ? "fixed overflow-x-auto top-0 right-0 sm:w-[400px] h-full bg-white shadow-2xl 0 z-50 flex flex-col p-5 ease-linear duration-300"
          : "fixed top-0 right-[-400px]"
      }`}
    >
      <div className="flex justify-between items-center pb-4">
        <h2 className="font-sans text-2xl font-bold">Responses ({comments.length})</h2>
        <img
          className="w-8 h-8 cursor-pointer"
          onClick={toggleVisibility}
          src={Close}
          alt=""
        />
      </div>
      <div className="mt-2 rounded-md py-4 shadow-md flex flex-col">
        <div className="flex items-center gap-2 px-4">
          <Avatar
            username={user.username}
            image_url={user.img}
            size={"medium"}
          ></Avatar>
          <span className="font-semibold">{user.username}</span>
        </div>
        <div className="mt-4 px-4">
          <input
            className="w-full outline-none font-sans text-gray-600 font-normal"
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="What are your thoughts?"
            value={comment}
          />
        </div>
        <div className="flex justify-end px-4 gap-2 mt-8 font-sans text-xs items-center">
          <a className="p-1 px-2 rounded cursor-pointer text-gray-600">
            Cancel
          </a>
          <Button
            onClick={onSubmit}
            className="p-1 px-2 rounded cursor-pointer text-white bg-green-500"
          >
            Respond
          </Button>
        </div>
      </div>
      <div className="mt-5 font-sans p-3">
        {comments.map((comment) => (
          <div key={comment.uid} className="mb-4">
            <div className="flex gap-2">
              <Avatar
                username={comment.author.username}
                image_url={comment.author?.img}
                size={"medium"}
              /> 
              <div className="flex flex-col">
                <p className="font-bold">{comment.author.username}</p>
                <p className="text-secondary text-xs">{formatDate(comment.created_at)}</p>
              </div>
            </div>
            <div className="mt-2 text-sm text-secondary">
              <p className="m-0 max-w-[350px]">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
