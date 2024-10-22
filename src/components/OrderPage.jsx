// src/components/OrderPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderPage = () => {
  const { id } = useParams(); // Get the diamond id from the URL
  const [diamond, setDiamond] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch diamond details from the API
    const fetchDiamondDetails = async () => {
      try {
        const response = await axios.get(`/api/collections/reseller_diamonds/records/${id}`);
        setDiamond(response.data); // Set the fetched data to the diamond state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch diamond details');
        setLoading(false);
      }
    };

    fetchDiamondDetails();
  }, [id]); // Re-run this effect when the id changes

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!diamond) {
    return <h2>Diamond not found</h2>;
  }

  return (
    <div className="order-page">
      <h2>Order {diamond.collectionName}</h2>
      <img src={diamond.image} alt={diamond.collectionName} />
      <p>Price: ${diamond.price}</p>
      <p>Quantity Available: {diamond.qty}</p>
      <form className="order-form">
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
        </div>
        <div>
          <label htmlFor="address">Shipping Address: </label>
          <input type="text" id="address" name="address" required />
        </div>
        <button type="submit" className="order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
