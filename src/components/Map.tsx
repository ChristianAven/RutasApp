import React from 'react';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { useEffect } from 'react';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screen/LoadingScreen';
import Fab from './Fab';


const Map = () => {

    const { hasLocation, initalPosition } = useLocation();

    if (!hasLocation) {return <LoadingScreen/>};

    return (
        <>
            <MapView
                style={{flex: 1}}
                // provider={ PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                latitude: initalPosition!.latitude,
                longitude: initalPosition!.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                {/* <Marker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Esto es un titulo"
                    description="Esto es una descripcion"
                    /> */}
            </MapView>
                    <Fab 
                        icoName='compass-outline' 
                        onPress={() => console.log('Hola mundo')}
                        style={{
                            position:'absolute',
                            bottom: 20,
                            right: 20
                        }}
                    />
        </>
    )
}

export default Map;
