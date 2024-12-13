import React from "react";
import { Post } from "@assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ActionDropDown, Avatar } from "@components";

function ProfileList({ user }) {
  return (
    <Link
      to="/reading-list"
      className=" rounded flex flex-row justify-between bg-neutral"
    >
      <div className="p-6 w-3/5 ">
        <span
          className="flex gap-2"
        >
          <Avatar
            username={user.username}
            image_url={user.img}
            size={"small"}
          />
          <span className="text-sm">{user.username}</span>
        </span>
        <h1 className="text-xl mt-1 mb-3 font-extrabold">Reading List</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 mt-5">
            {/* <span className="text-xs"></span> */}
            <FontAwesomeIcon
              icon={faLock}
              className="icons"
              color="gray"
              style={{ fontSize: "10px" }}
            />
          </div>
          {/* <ActionDropDown>
            <>
              <li>hi</li>
            </>
          </ActionDropDown> */}
        </div>
      </div>
      <div className="relative w-[294px] rounded">
        <img className="absolute border-r-2 border-white z-20 h-full w-3/5 right-18 sm:right-24" src={Post} alt="" />
        <img className="absolute border-r-2  border-white z-10 h-full w-3/5 right-6 sm:right-8" src={Post} alt="" />
        <img className="absolute  h-full w-3/5 right-0 rounded" src={Post} alt="" />
      </div>
    </Link>
  );
}

export default ProfileList;
