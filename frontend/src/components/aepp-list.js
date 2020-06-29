import React from 'react';

import AeppListItem from '../components/aepp-list-item'

const aeppList = [
  {
    id: 1,
    name: 'Superhero',
    aeppUrl: 'https://superhero.com/',
    imageUrl: 'https://aeternity.com/assets/img/logo_superhero.16bf74fb.svg',
    transactionsNumber: 173,
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




function AeppList() {


  return (
    <ul className="aepp-list">
      {
        aeppList.map((item, index) => <AeppListItem index={index + 1} id={item.id} name={item.name} aeppUrl={item.aeppUrl} imageUrl={item.imageUrl} transactionsNumber={item.transactionsNumber} />)
      }
    </ul>

  );


}

export default AeppList;
