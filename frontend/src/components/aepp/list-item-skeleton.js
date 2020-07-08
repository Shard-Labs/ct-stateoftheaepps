import React from 'react';

function ListItemSkeleton() {
  return (
    <li className="aepp-list-item">
      <div className="aepp-list-skeleton-rank"></div>
      <div className="aepp-list-skeleton-logo"></div>
      <div className="aepp-list-skeleton-name"></div>
      <div className="aepp-list-skeleton-number"></div>
    </li>
  );
}

export default ListItemSkeleton;
