import React, { createContext, useState } from 'react';

import { Platform } from 'react-native';

import { check, PERMISSIONS, PermissionStatus, request } from "react-native-permissions";

export interface PermissionState {
    locationStatus: PermissionStatus;
}


export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
}

type PermissionContextProps = {
    permission: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionContext = createContext({} as PermissionContextProps);

export const PermissionProvider = ({ children }: any) => {

    const [permission, setPermission] = useState( permissionInitState )

    const askLocationPermission = async() => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {  
            // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermission({
            ...permission,
            locationStatus: permissionStatus
        })
    }

    const checkLocationPermission = async() => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {  
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermission({
            ...permission,
            locationStatus: permissionStatus
        })

    }

    
    return(


        <PermissionContext.Provider
            value={{
                permission,
                askLocationPermission,
                checkLocationPermission
            }}
        >
            { children }
        </PermissionContext.Provider>
    )
}