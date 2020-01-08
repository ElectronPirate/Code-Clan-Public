import React from 'react';
import './BucketListItem.css';

const BucketListItem = (props) => {
  const { name, visited } = props.country;

  return (
    <li>
      <input
        type="checkbox"
        onChange={ props.onCheck }
        checked={ visited }
        id={ name }
        className="visited-checkbox"
      />
      <p className="country-name">{ name }</p>
    </li>
  );
};

export default BucketListItem;
