import { useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Location } from '../interfaces/appIterfaces';



const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initalPosition, setInitalPosition] = useState<Location>();

    useEffect(() => {
        Geolocation.getCurrentPosition(
            ({coords}) => {
                setInitalPosition({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
                setHasLocation(true);
            },
            (err) => console.log(err), {enableHighAccuracy: true}
            );
    }, []);

    return{
        hasLocation,
        initalPosition
    }
    
}

export default useLocation
