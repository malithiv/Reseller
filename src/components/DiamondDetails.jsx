// src/components/DiamondDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DiamondDetails = ({ diamonds }) => {
  const { id } = useParams(); // Extract the diamond id from the URL
  const diamond = diamonds.find(d => d.id === parseInt(id)); // Find the diamond based on the id

  if (!diamond) {
    return <h2>Diamond not found</h2>;
  }

  return (
    <div className="diamond-details">
      <h2>{diamond.title}</h2>
      <img src={diamond.image} alt={diamond.title} />
      <p>Price: {diamond.price}</p>
      <p>Size: {diamond.size}</p>
      <button className="order-btn">Place Order</button>
    </div>
  );
};

export default DiamondDetails;
