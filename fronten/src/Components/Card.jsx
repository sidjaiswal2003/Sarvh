

import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div>{props.index}</div>
      <h3>{props.item.title}</h3>
      <div>{props.item.body}</div>
    </div>
  );
};

export default Card;
