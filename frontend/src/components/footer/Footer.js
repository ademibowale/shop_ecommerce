import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear === 2021 ? '2021' : `2021 - ${currentYear}`;
  
  return (
    <div className={styles.footer}>
      &copy; {yearDisplay} Hi5store All Rights Reserved
    </div>
  );
}

export default Footer;
