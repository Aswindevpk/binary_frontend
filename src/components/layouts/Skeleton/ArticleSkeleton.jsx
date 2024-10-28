import React from "react";
import './Skeleton.css'

function HomeSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__main">
        <div className="skeleton__author">
          <div className="skeleton__avatar"></div>
          <div className="skeleton__username"></div>
        </div>
        <div className="skeleton__content">
          <div className="skeleton__para1"></div>
          <div className="skeleton__para2"></div>
        </div>
      </div>
      <div className="skeleton__image"></div>
    </div>
  );
}

export default HomeSkeleton;
