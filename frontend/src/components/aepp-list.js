import React from 'react';
import AeppListItem from './aepp-list-item';
import AeppListSkeleton from './aepp-list-skeleton';

function AeppList({ aeppList, isLoading }) {
  return (
    <ul className="aepp-list">
      {isLoading ? Array(1).fill(<AeppListSkeleton />) : aeppList.map((item, index) => (
        <AeppListItem
          key={item.name}
          rank={index + 1}
          name={item.name}
          aeppUrl={item.aeppUrl}
          imageSrc={item.imageSrc}
          transactionsNumber={item.transactionsNumber}
        />
      ))}
    </ul>
  );
}

export default AeppList;
