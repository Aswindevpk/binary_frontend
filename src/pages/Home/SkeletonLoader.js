// SkeletonLoader.js
import React from 'react';
import './Skeleton.css';

const SkeletonLoader = () => {
    return (
        <div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton-container">
                <div className="skeleton skeleton-avatar"></div>
                <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
            </div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
        </div>
    );
};

export default SkeletonLoader;
