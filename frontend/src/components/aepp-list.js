import React from 'react';
import AeppListItem from '../components/aepp-list-item';

function AeppList({ aeppList }) {
  return (
    <ul className="aepp-list">
      {aeppList.map((item, index) => (
        <AeppListItem
          key={item.name}
          rank={index + 1}
          name={item.name}
          aeppUrl={item.aeppUrl}
          imageUrl={item.imageSrc}
          transactionsNumber={item.transactionsNumber}
        />
      ))}
    </ul>
  );
}

export default AeppList;
