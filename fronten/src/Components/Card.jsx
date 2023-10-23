

import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className='index'>{props.index}</div>
      <div className='heading'>{props.item.title}</div>
      <div className='details'>{props.item.body}</div>
    </div>
  );
};

export default Card;
