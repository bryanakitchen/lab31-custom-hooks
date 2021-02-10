import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeContext';

function Header() {
  const { setTheme } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) setTheme('dark');
    if(!target.checked) setTheme('light');
  };

  return (
    <div>
      <h2>Welcome to Animal Crossing</h2>   
      <Link to="/">
        <p>Home</p>
      </Link>
      <div>
        <h3>Toggle Dark Mode</h3>
        <input type="checkbox" onChange={toggle} />
      </div>
    </div>
  );
}

export default Header;
