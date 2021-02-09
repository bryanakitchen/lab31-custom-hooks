import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>Welcome to Animal Crossing</h2>   
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Header;
