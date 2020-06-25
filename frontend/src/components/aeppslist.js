import React from 'react';

const list = [
  {
    id: 1,
    name: 'Superhero',
    aeppUrl: 'https://superhero.com/',
    imageUrl: 'https://aeternity.com/assets/img/logo_superhero.16bf74fb.svg',
    transactionsNumber: 73,
  },
  {
    id: 2,
    name: 'Cryptotask',
    aeppUrl: 'https://beta.cryptotask.org/',
    imageUrl:
      'https://beta.cryptotask.org/wp-content/themes/cryptotask/assets/img/cryptotask-logo.svg',
    transactionsNumber: 1234,
  },

  {
    id: 3,
    name: 'Jellyswap',
    aeppUrl: 'https://jelly.market/',
    imageUrl:
      'https://jelly.market/static/logo-white-174143b2b447566a6eb46e19cbe10b7b.svg',
    transactionsNumber: 756,
  },
];

function List() {
  return (
    <ul className="app-list">
      {list.map((item, index) => (
        <li className="applist-row" key={item.id}>
          <span className="rank">{index + 1}.</span>
          <img src={item.imageUrl} className="app-logo" />
          <a href={item.aeppUrl} target="_blank" className="app-name">
            {item.name}
          </a>
          <span className="transactions-number">{item.transactionsNumber}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
