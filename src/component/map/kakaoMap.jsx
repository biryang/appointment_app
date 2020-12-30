/*global kakao*/
import React, { useEffect } from 'react';

const KakaoMap = (props) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src =
      `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAMAP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById('myMap');
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(33.450701, 126.570667)
        });
      });
    };
  }, []);
  return (
    <div id="myMap" style={{
      width: '500px',
      height: '500px'
    }}>
    </div>
  )
};

export default KakaoMap;