import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeContext';
import styles from './Header.css';


function Header() {
  const { theme, setTheme } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) setTheme('style');
    if(!target.checked) setTheme('plain');
  };

  return (
    <div className={`${styles.Header} ${styles[theme]}`}>
      <h2>Welcome to Animal Crossing</h2>   
      <Link to="/" style={{ textDecoration: 'none' }}>
        <p>Return Home</p>
      </Link>
      <div className={styles.toggle}>
        <h3>Toggle Styled Mode</h3>
        <input type="checkbox" onChange={toggle} />
      </div>
    </div>
  );
}

export default Header;
