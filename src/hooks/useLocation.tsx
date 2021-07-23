import { useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Location } from '../interfaces/appIterfaces';



const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initalPosition, setInitalPosition] = useState<Location>();
    const [userLocation, setUserLocation] = useState<Location>();

    useEffect(() => {
        getCurrentLocation().then(location => {
            setInitalPosition(location);
            setUserLocation(location);
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

    const followUserLocation = () => {
        Geolocation.watchPosition(
            ({coords}) => {
                setUserLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            },
            (err) => console.log({err}), {enableHighAccuracy: true, distanceFilter: 5}
        )
    }

    return{
        hasLocation,
        initalPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation
    }
    
}

export default useLocation
