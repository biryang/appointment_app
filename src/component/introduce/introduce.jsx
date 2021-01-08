import React from 'react';
import KakaoMap from '../map/kakaoMap';
import styles from "./introduce.module.css";

const Introduce = (props) => {
  return (
    <div className={styles.container}>
      <i className={`${styles.icon} fas fa-notes-medical`}></i>
      <span className={styles.title}>스타일리스트의 아틀리에, 페이스트</span>
      <span className={styles.title}>주소</span>
      <img className={styles.title} />
      <span className={styles.title}>소개</span>
      <span className={styles.title}>소개내용</span>
      <span className={styles.title}>영업시간</span>
      <span className={styles.title}>휴무일</span>
      <button className={styles.call}>전화</button>
      <button className={styles.appoint}>예약신청</button>
      <KakaoMap />
    </div>
  )
};

export default Introduce;