import React from 'react';

function Skeleton() {
  return (
    <div>
      <div className="skeleton-list-item">
        <div className="skeleton-image" />
        <div className="skeleton-app-name" />
      </div>
      <div className="skeleton-list-item">
        <div className="skeleton-image" />
        <div className="skeleton-app-name" />
      </div>
      <div className="skeleton-list-item">
        <div className="skeleton-image" />
        <div className="skeleton-app-name" />
      </div>
    </div>
  );
}

export default Skeleton;
