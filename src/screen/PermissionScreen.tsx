import React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

const PermissionScreen = () => {

    const checkLocationPermission = async() => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            
            // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

            
        }
    }


    return (
        <View style={styles.container}>
            <Text>Permission Screen</Text>

            <Button
               title='Permission'
               onPress={ checkLocationPermission } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PermissionScreen
