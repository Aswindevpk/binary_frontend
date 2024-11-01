import React from "react";
import "./ProfileList.css";
import { Post } from "@assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ActionDropDown, Avatar } from "@components";

function ProfileList({ user }) {
  return (
    <Link
      to="/reading-list"
      className="border border-neutral rounded font-[var(--font-family)] flex flex-row justify-between bg-neutral"
    >
      <div className="p-6">
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
          <div className="flex items-center gap-1">
            <span className="text-xs">4 stories</span>
            <FontAwesomeIcon
              icon={faLock}
              className="icons"
              color="gray"
              style={{ fontSize: "10px" }}
            />
          </div>
          <ActionDropDown>
            <>
              <li>hi</li>
            </>
          </ActionDropDown>
        </div>
      </div>
      <div className="ProfileList-sub">
        <img className="ProfileList-sub__img1" src={Post} alt="" />
        <img className="ProfileList-sub__img2" src={Post} alt="" />
        <img className="ProfileList-sub__img3" src={Post} alt="" />
      </div>
    </Link>
  );
}

export default ProfileList;
