import { useEffect, useState } from "react";
import { MapProps } from "./map.type";
import styled from "styled-components";
import { onClickGetMyLocation } from "./mapFn/onClickGetMyLocation";

declare const window: typeof globalThis & {
    kakao: any;
  };
const {kakao} = window

export default function Map(props:MapProps){
    useEffect(()=>{
        // 지도 생성
        const container = document.getElementById('map'); 
        const options = { 
            center: new kakao.maps.LatLng(props.lat, props.lon), 
            level:3 
        };
        const map = new kakao.maps.Map(container, options); 
        // 지도에 마커 찍기
        const markerPosition  = new kakao.maps.LatLng(props.lat, props.lon); 
        const marker = new kakao.maps.Marker({
         position: markerPosition
        });
        marker.setMap(map);
        // 마커 위에 인포 윈도우
        const iwContent = `<div style="padding:5px;">${props.restaurantName}</div>`, 
        iwPosition = new kakao.maps.LatLng(props.lat, props.lon); 
        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        infowindow.open(map, marker); 
    },[props])

return(
    <>
        <MyLocationBt src="/src/assets/image/myLocationBt.svg" onClick={onClickGetMyLocation}/>
        <div id="map" style={{width:'360px',height:'800px'}}></div>
    </>
)
}

const MyLocationBt = styled.img`
    position: absolute;
    left: 20px;
    bottom: 80px;
    z-index: 1000;
`