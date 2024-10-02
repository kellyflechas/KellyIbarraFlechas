

import React from 'react';

const Cards = ({ advice, adviceId }) => {
  return (
    <div className="advice-display">
      <h4>ADVICE #{adviceId}</h4>
      <p>"{advice}"</p>
    </div>
  );
};

export default Cards;