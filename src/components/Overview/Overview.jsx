import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div>
      <h2>Overview</h2>
      <button><Link to="/">Home</Link></button> 
      <button><Link to="/contact">Contact</Link></button>
    </div>
  );
};

export default Overview;
