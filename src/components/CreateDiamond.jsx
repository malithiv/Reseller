// src/components/CreateDiamond.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateDiamond = () => {
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to include file
    const formData = new FormData();
    formData.append('price', price);
    formData.append('qty', qty);
    if (image) {
      formData.append('image', image);
    }

    try {
      // Make POST request
      const response = await axios.post('/api/collections/reseller_diamonds/records', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Set success message
      setMessage('Diamond created successfully!');
      // Clear form
      setPrice('');
      setQty('');
      setImage(null);
    } catch (err) {
      // Handle error
      setMessage('Failed to create diamond');
    }
  };

  return (
    <div className="create-diamond-form">
      <h2>Create New Diamond</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button type="submit">Create Diamond</button>
      </form>
    </div>
  );
};

export default CreateDiamond;
