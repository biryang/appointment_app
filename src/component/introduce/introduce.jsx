import React from 'react';
import KakaoMap from '../map/kakaoMap';
import styles from "./introduce.module.css";

const Introduce = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>스타일리스트의 아틀리에, 페이스트</div>
      <div className={styles.address}>서울 종로구 돈화문로11길 33 메이커스호텔 지하1층</div>
      <img className={styles.title} />

      <div className={styles.menu}>
        <div className={styles.item}>소개</div>
        <div className={styles.item}>시설안내</div>
        <div className={styles.item}>주의사항</div>
      </div>

      <div className={styles.subtitle}>
        소개
        <hr className={styles.hr} />
      </div>
      <div className={styles.detail}>저희 공간은 다년간, 아티스트 쇼케이스, 팬미팅, 생일파티, MICE를 진행한 까페입니다. 2층에 테라스가 있고, 인도네시아 발리 느낌과 스포츠바가 어루어진 하이브리드 공간입니다. Excluslive 한 EVENT를 지속적으로 진행하고 있으며, 까페 이기 때문에 음료 와 주류도 이용가능하시고, 4K Sony 티비와, 프로젝터, 플레이스테이션등 다양한 오락거리도 구비되어 있습니다. 신사동 가로수길에서 가장 핫한 거리에 위치에 있어서 많은 광고에도 등장한 저희 공간을 부담없는 요금과 친절한 서비스로 이용해 보세요:)</div>
      <div className={styles.subtitle}>
        영업시간
        <hr className={styles.hr} />
      </div>
      <div className={styles.detail}>10~24시</div>
      <div className={styles.subtitle}>
        휴무일
        <hr className={styles.hr} />
      </div>
      <div className={styles.detail}>없음</div>
      <div>
        <button className={styles.btn}>
          <i className={`${styles.icon} fas fa-phone-square-alt`}></i>
          전화
        </button>
        <button className={styles.btn}>
          <i className={`${styles.icon} fas fa-calendar-check`}></i>
          예약신청
        </button>
      </div>
      <KakaoMap />
    </div>
  )
};

export default Introduce;