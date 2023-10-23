

import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.index}</p>
      <h3>{props.item.title}</h3>
      <p>{props.item.body}</p>
    </div>
  );
};

export default Card;
