import React from 'react';
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <div className={styles.container}>
      <i className={`${styles.icon} fas fa-notes-medical`}></i>
      <span className={styles.title}>안녕하세요.</span>
      <span className={styles.title}>예약이 필요하신가요?</span>
      <input
        className={styles.search}
        placeholder="검색해보세요!" />
      <div>
        <button className={styles.chip}>
          <i class="fas fa-street-view"></i>&nbsp;
          현위치
        </button>
        <button className={styles.chip}>
          <i class="fas fa-calendar-day"></i>&nbsp;
          20/12/31(목)
        </button>
      </div>
    </div>
  )
};

export default Main;