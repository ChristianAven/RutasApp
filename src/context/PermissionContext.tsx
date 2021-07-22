import React from 'react';
import { createContext, useState } from "react";
import { PermissionStatus } from "react-native-permissions";

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

    const askLocationPermission = () => {

    }

    const checkLocationPermission = () => {

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