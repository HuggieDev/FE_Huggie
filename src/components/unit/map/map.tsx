import { useEffect } from "react";
import { MapProps } from "./map.type";
import styled from "styled-components";

declare const window: typeof globalThis & {
    kakao: any;
  };
const {kakao} = window

export default function Map(props:MapProps){
    useEffect(()=>{
        // 지도 생성
        const container = document.getElementById('map'); 
        const options = { 
            center: new kakao.maps.LatLng(props.lati, props.long), 
            level: 3 
        };
        const map = new kakao.maps.Map(container, options); 
        // 지도에 마커 찍기
        const markerPosition  = new kakao.maps.LatLng(props.lati, props.long); 
        const marker = new kakao.maps.Marker({
         position: markerPosition
        });
        marker.setMap(map);
        // 마커 위에 인포 윈도우
        const iwContent = `<div style="padding:5px;">${props.restaurantName}</div>`, 
        iwPosition = new kakao.maps.LatLng(props.lati, props.long); 
        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        infowindow.open(map, marker); 
    },[])

    // 내위치 가지고 오기
    const onClickGetMyLocation = ()=>{
        const mapContainer = document.getElementById('map'),
         mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), 
            level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치받아오기
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude, 
                    lon = position.coords.longitude; 
                const locPosition = new kakao.maps.LatLng(lat, lon), 
                    message = ''; 
                displayMarker(locPosition, message);
                    
              });
        } else { 
            const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
                message = '사용자의 위치를 받아올 수 없습니다.'
            displayMarker(locPosition, message);
        }
        function displayMarker(locPosition:any, message:any) {
            const marker = new kakao.maps.Marker({  
                map: map, 
                position: locPosition
            }); 
            map.setCenter(locPosition);      
        }    
    }
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