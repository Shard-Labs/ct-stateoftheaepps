import React from 'react';
import PlaceholderImage from '../../assets/images/PlaceholderImage.png';

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
          src={
            imageSrc
              ? `data:image/svg+xml;base64, ${imageSrc}`
              : PlaceholderImage
          }
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
