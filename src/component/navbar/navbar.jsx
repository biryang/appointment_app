import React from 'react';
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={styles.container}>
      <span className={styles.title}>Appoint</span>
      <div className={styles.menu}>
        <i className="fas fa-search-location"></i>&nbsp;
        <span>검색</span>
      </div>
      <div className={styles.menu}>
        <i className="fas fa-clipboard-list"></i>&nbsp;
        <span>예약내역</span>
      </div>
      <div className={styles.menu}>
        <i className="fas fa-user"></i>&nbsp;
        <span>마이페이지</span>
      </div>
    </header>
  )
};

export default Navbar;