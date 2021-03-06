//external libs components imports
import React from 'react'
import {
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg';

//visual options of the project
import colors from '../styles/colors'
import fonts from '../styles/fonts'

/**
 * Plant Card Component Properties
 */
interface PlantProps extends RectButtonProps{
    data:{
        /**
         * the name of the plant that will be displayed
         */
        name:string;
        /**
         * a string url that refers to the image of the plant
         */
        photo: string;
    }
}

/**
 * A button component that will show the plant with its name
 * and a photo 
 * @param data name: string, photo: string
 * @returns the plant card component
 */
export function PlantCardPrimary({data, ...rest}: PlantProps){
    return(
        <RectButton
            style={Styles.container}
            { ... rest }
        >
            <SvgFromUri 
                uri={data.photo}
                width={70}
                height={70}
            />
            <Text style={Styles.text}>
                {data.name}
            </Text>
        </RectButton>

    )
}

//this const contains the styles of this button
const Styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        margin: 10
    },
    text:{
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical:16
    }
})