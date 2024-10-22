// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import OrderPage from './components/OrderPage'; // Import the new OrderPage component
import './App.css';


// Dummy data for diamonds
const diamondsData = [
  { id: 1, title: 'Diamond 1', price: '$1000', size: '1 Carat', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Diamond 2', price: '$2000', size: '2 Carat', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Diamond 3', price: '$3000', size: '3 Carat', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Diamond 4', price: '$4000', size: '4 Carat', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Diamond 5', price: '$5000', size: '5 Carat', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Diamond 6', price: '$6000', size: '6 Carat', image: 'https://via.placeholder.com/150' },
];

const App = () => {
  return (
    <Router>
      <div className="cards-wrapper">
        <div className="cards-row">
          {diamondsData.slice(0, 3).map((diamond) => (
            <Card key={diamond.id} diamond={diamond} />
          ))}
        </div>
        <div className="cards-row">
          {diamondsData.slice(3, 6).map((diamond) => (
            <Card key={diamond.id} diamond={diamond} />
          ))}
        </div>
      </div>

      {/* Routes for OrderPage */}
      <Routes>
        <Route path="/order/:id" element={<OrderPage diamonds={diamondsData} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
