import { useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Location } from '../interfaces/appIterfaces';



const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initalPosition, setInitalPosition] = useState<Location>();

    useEffect(() => {
        getCurrentLocation().then(location => {
            setInitalPosition(location);
            setHasLocation(true);
        })
    }, []);
    

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition(
                ({coords}) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                },
                (err) => reject({err}), {enableHighAccuracy: true}
                );

        });
    }

    return{
        hasLocation,
        initalPosition,
        getCurrentLocation
    }
    
}

export default useLocation
