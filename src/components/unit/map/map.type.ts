export interface MapProps {
    restaurantName : string;
    lat?: number;
    lon?: number;
}

export interface LocationFn{
    mylocation:{
        lat?: number|unknown;
        lon?: number|unknown;
    }
}
