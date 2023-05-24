import React from 'react';
import Card from './card';

const CardRow = () => {
  return (
    <div className="card-row">
      <Card title="Card 1" description="This is card 1" />
      <Card title="Card 2" description="This is card 2" />
      <Card title="Card 3" description="This is card 3" />
    </div>
  );
};

export default CardRow;
