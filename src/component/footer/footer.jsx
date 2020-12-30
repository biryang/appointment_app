import React from 'react';
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.container}>
      <span className={styles.copyright}>이용약관 | 개인정보 처리방침 | 위치기반 서비스 이용약관</span>
      <span className={styles.copyright}>Copyright</span>
    </footer>
  )
};

export default Footer;
