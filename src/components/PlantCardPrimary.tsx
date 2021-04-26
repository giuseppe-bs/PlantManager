import React from 'react'
import {
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface PlantProps extends RectButtonProps{
    data:{
        name:string;
        photo: string;
    }
}

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