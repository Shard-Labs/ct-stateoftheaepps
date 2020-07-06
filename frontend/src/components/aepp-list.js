import React from 'react';
import AeppListItem from './Aepp-list-item';
import Skeleton from './Skeleton';

function AeppList({ aeppList, isLoading }) {
  return (
    <ul className="aepp-list">
      {isLoading ? <Skeleton /> : aeppList.map((item, index) => (
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
