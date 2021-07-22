import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screen/MapScreen';
import PermissionScreen from '../screen/PermissionScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
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
