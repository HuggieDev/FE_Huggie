import Map from '../components/unit/map/map'
import SearchBar from '../components/unit/landingSearchBar/landingSearchBar'
import useInitLocation from '../components/unit/map/mapFn/useInitLocation'

export default function LandingPage(){
    const coords = useInitLocation()
    return(
        // props로 넘겨주는 것 들은 나중에 데이터로 넘겨줄 예정
        <>
        <SearchBar/>
        <Map restaurantName={'은희네 해장국이었음 좋겠다'}
             lat={coords.lat}
             lon={coords.lon}
             />
        </>
    )
}
