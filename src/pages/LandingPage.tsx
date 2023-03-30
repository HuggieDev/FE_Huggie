import Map from '../components/unit/map/map'

export default function LandingPage(){
    return(
        // props로 넘겨주는 것 들은 나중에 데이터로 넘겨줄 예정
        <Map restaurantName={'은희네 해장국'}
             lati={37.4855}
             long={126.8967}/>
    )
    
}
