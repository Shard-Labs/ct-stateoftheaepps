import React from 'react';


function AeppListItem({ id, name, aeppUrl, imageUrl, transactionsNumber, index }) {

  return (
    <li className="aepp-list-item" key={id} >
      <span className="rank">{index}.</span>
      <a
        href={aeppUrl}
        target="_blank"
        className="aepp-logo"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} className="aepp-logo" alt={name} />
      </a>
      <a
        href={aeppUrl}
        target="_blank"
        className="aepp-name"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <span className="transactions-number">{transactionsNumber}</span>
    </li>



  );
}

export default AeppListItem;