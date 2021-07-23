import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screen/MapScreen';
import PermissionScreen from '../screen/PermissionScreen';
import { PermissionContext } from '../context/PermissionContext';
import LoadingScreen from '../screen/LoadingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {

    const { permission } = useContext( PermissionContext )

    if (permission.locationStatus === 'unavailable') return <LoadingScreen/>

    
    return (
        <Stack.Navigator
            // initialRouteName='PermissionScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
            <Stack.Screen name="MapScreen"        component={MapScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator
