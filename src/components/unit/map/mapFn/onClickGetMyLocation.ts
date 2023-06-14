import { getMyLocation } from "./getmylocation";
import { LocationFn } from "../map.type";

declare const window: typeof globalThis & {
    kakao: any;
  };
const {kakao} = window

// 내위치 가지고 오기
export const onClickGetMyLocation = async()=>{
    const mylocation:any = await getMyLocation()
    console.log('아',mylocation)
    // 지도 생성
    const container = document.getElementById('map'); 
    const options = { 
        center: new kakao.maps.LatLng(mylocation.lat, mylocation.lon), 
        level:3 
    };
    const map = new kakao.maps.Map(container, options); 
    // 지도에 마커 찍기
    const markerPosition  = new kakao.maps.LatLng(mylocation?.lat, mylocation?.lon); 
    const marker = new kakao.maps.Marker({
     position: markerPosition
    });
    marker.setMap(map);
}
