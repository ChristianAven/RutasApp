import React, { useContext } from 'react';

import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

import { PermissionContext } from '../context/PermissionContext';
import BlackButton from '../components/BlackButton';

const PermissionScreen = () => {

    const { permission, askLocationPermission } = useContext(PermissionContext);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>GPS is required to use this app</Text>

            <BlackButton
               title='Permission'
               onPress={ askLocationPermission } 
            />

            <Text style={{marginTop: 30}}>
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
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});

export default PermissionScreen
