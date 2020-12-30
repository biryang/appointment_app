import React from 'react';
import styles from "./appstore.module.css";

const Appstore = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>앱을 다운받으세요!</span>
      <button className={styles.btnapp}>
        <i className="fab fa-google-play"></i>&nbsp;
        Google Play
      </button>
      <button className={styles.btnapp}>
        <i className="fab fa-apple"></i>&nbsp;
        App Store
      </button>
    </div>
  )
};

export default Appstore;