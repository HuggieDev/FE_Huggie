export const getMyLocation = async ()=>{
    const location = await new Promise((resolve)=>{
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치받아오기
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude, 
                    lon = position.coords.longitude; 
                const coords = {
                    lat,
                    lon
                }
                    resolve(coords)   
              });
        }
    })
    return location
}