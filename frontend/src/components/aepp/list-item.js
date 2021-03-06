import React from 'react';

function ListItem({ rank, name, aeppUrl, imageSrc, transactionsNumber }) {
  return (
    <li className="aepp-list-item">
      <span className="rank">{rank}.</span>
      <a
        href={aeppUrl}
        target="_blank"
        className="aepp-logo"
        rel="noopener noreferrer"
      >
        <img
          src={`data:image/svg+xml;base64, ${ imageSrc }`}
          alt={name}
        />
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

export default ListItem;
