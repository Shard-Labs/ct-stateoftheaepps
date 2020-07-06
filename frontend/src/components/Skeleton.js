import React from 'react';

function Skeleton() {
  return (
    <ul className="aepp-list">
      <li className="aepp-list-item">
        <div className="skeleton-rank"></div>
        <div className="skeleton-logo"></div>
        <div className="skeleton-name"></div>
        <div className="skeleton-number"></div>
      </li>

      <li className="aepp-list-item">
        <div className="skeleton-rank"></div>
        <div className="skeleton-logo"></div>
        <div className="skeleton-name"></div>
        <div className="skeleton-number"></div>
      </li>

      <li className="aepp-list-item">
        <div className="skeleton-rank"></div>
        <div className="skeleton-logo"></div>
        <div className="skeleton-name"></div>
        <div className="skeleton-number"></div>
      </li>
    </ul>
  );
}

export default Skeleton;
