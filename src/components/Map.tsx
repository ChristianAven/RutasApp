import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <>
            <MapView
                style={{flex: 1}}
                // provider={ PROVIDER_GOOGLE}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
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
        </>
    )
}

export default Map;
