import { useEffect, useState } from "react"
import { getMyLocation } from "./getmylocation"

export default function useInitLocation(){
    const [coords,setCoords] = useState({
        lat:37.4855,
        lon:126.8967
    })
    useEffect(()=>{
        const location = async()=>{
            const mylocation = await getMyLocation()
            setCoords(mylocation)
       }
       location()
    },[])
    return coords
}