import React from "react";
import { ActionDropDown, Avatar } from "@components";
import { Bookmark } from "@components/ui";
import { Link } from "react-router-dom";
import {formatDate} from "@utils/common"

function HomeBlog({ blog }) {
  return (
    <div className="flex flex-row justify-between items-center py-4 border-b border-neutral">
      <div className="flex flex-col w-3/5">
        <Link
          className="flex gap-2 items-center mb-1"
          to={`/author/${blog.author.id}`}
        >
          <Avatar
            username={blog.author?.username}
            image_url={blog.author?.img}
            size={"small"}
          />
          <span className="text-sm hover:underline">
            {blog.author.username}
          </span>
        </Link>
        <Link to={`/blog/${blog.uid}/`} className="flex flex-col">
          <h2
            className="flex text-2xl font-extrabold leading-7 text-primary cursor-pointer overflow-hidden break-words"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3, // Adjust the number of lines to clamp
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.title}
          </h2>
          <p className="pt-2 text-secondary">{blog.subtitle}</p>
        </Link>
        <div className="flex justify-between items-center h-12 text-sm">
          <div className="text-secondary text-xs">{formatDate(blog.created_atre)}</div>
          <div className="flex gap-8">
            <Bookmark
              // is_bookmarked={blog.is_bookmarked}
              // article_id={blog.uid}
            />
            <ActionDropDown>
              <>
                <li className="cursor-pointer">Follow author</li>
                <li className="cursor-pointer">Follow publication</li>
                <li className="cursor-pointer">Mute author</li>
                <li className="cursor-pointer">Mute publication</li>
                <li className="cursor-pointer text-red-600">Report story...</li>
              </>
            </ActionDropDown>
          </div>
        </div>
      </div>
      <div className="w-28 h-20 overflow-hidden sm:w-3/12 sm:h-24 ">
        <img
          src={blog.image}
          alt="article"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HomeBlog;
