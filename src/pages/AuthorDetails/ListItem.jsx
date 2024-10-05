import React from "react";
import "./ListItem.css";
import { Cover } from "../../assets";

const ListItem = () => {
  return (
    <div className="listItem">
      <img className="listItem-img" src={Cover} alt="" />
      <div className="listItem__sub">
        <h1 className="listItem__sub-h1">Writing</h1>
        <div className="listItem__sub-sub">
          <span>31 stories</span>
          <span>.</span>
          <span>1 save</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
