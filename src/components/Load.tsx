//imports the libs used for the animation display
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

//imports the animation
import loadAnimation from '../assets/load.json';

/**
 * displays a loading lottie animation
 * 
 * @returns the animation component
 */
export function Load(){
    return(
        <View style={Styles.container}>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={Styles.animation}
            />
        </View>
    )
}

// const with the styles for the inner components
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }
});