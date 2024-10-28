import React from "react";
import "./Skeleton.css";

function SideSkeleton() {
  return (
    <div style={{marginBottom:'40px'}}className="skeleton__main">
      <div className="skeleton__username"></div>
      <div className="skeleton__content">
        <div className="skeleton__para1"></div>
        <div className="skeleton__para2"></div>
      </div>
    </div>
  );
}

export default SideSkeleton;
