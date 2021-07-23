import { useEffect } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useState } from 'react';
import { Location } from '../interfaces/appIterfaces';
import { useRef } from 'react';



const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initalPosition, setInitalPosition] = useState<Location>();
    const [userLocation, setUserLocation] = useState<Location>();
    const [route, setRoute] = useState<Location[]>([]);
    const watchId = useRef<number>();
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        getCurrentLocation().then(location => {
            if (!isMounted.current) return;

            setInitalPosition(location);
            setUserLocation(location);
            setRoute(routes => [...routes, location]);
            setHasLocation(true);
        })
    }, []);


    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition(
                ({coords}) => {
                    if (!isMounted.current) return;
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
        watchId.current = Geolocation.watchPosition(
            ({coords}) => {
                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                };
                setUserLocation(location);
                setRoute(routes =>[...routes, location]);
            },
            (err) => console.log({err}), {enableHighAccuracy: true, distanceFilter: 5}
        )
    };

    const stopFollowUserLocation = () => {
        if (watchId.current) Geolocation.clearWatch(watchId.current)
    };

    return{
        hasLocation,
        initalPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        route
    }
    
}

export default useLocation
