import React, { useContext } from 'react';

import { 
    Button, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

import { PermissionContext } from '../context/PermissionContext';

const PermissionScreen = () => {

    const { permission, askLocationPermission } = useContext(PermissionContext);


    return (
        <View style={styles.container}>
            <Text>Permission Screen</Text>

            <Button
               title='Permission'
               onPress={ askLocationPermission } 
            />

            <Text>
                { JSON.stringify( permission, null, 4 ) }
            </Text>
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
