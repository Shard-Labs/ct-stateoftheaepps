import React from 'react';
import ListItem from './list-item';
import ListItemSkeleton from './list-item-skeleton';

function List({ aeppList, isLoading }) {
  return (
    <ul className="aepp-list">
      {isLoading
        ? Array(3).fill().map(index => <ListItemSkeleton key={index} />)
        : aeppList.map((item, index) => (
          <ListItem
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

export default List;
