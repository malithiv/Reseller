// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ diamond }) => {

  return (
    <div className="card">
      <img src={diamond.image} alt={diamond.title} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{diamond.title}</h5>
        <p>{diamond.price}</p>
        <p>{diamond.size}</p>
        {/* Link to the order page using the diamond's id */}
        <Link to={`/order/${diamond.id}`}>
          <button className="card-btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
