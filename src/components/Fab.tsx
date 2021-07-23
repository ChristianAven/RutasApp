import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    icoName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

const Fab = ({icoName, onPress, style = {}}: Props) => {
    return (
        <View style={{...style as any}}>
            
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={ styles.backButton }
            >
                <Icon
                    name={icoName}
                    size={35}
                    color='white'
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        zIndex: 999,
        height: 70,
        width: 70,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.55,
        elevation: 6
    }
});

export default Fab
