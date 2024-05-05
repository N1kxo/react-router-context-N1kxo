import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <button><Link to="/">Home</Link></button>  
      <button><Link to="/overview">Overview</Link></button>
    </div>
  );
};

export default Contact;
