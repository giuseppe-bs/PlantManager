// react, react-native and gesture handler import
import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'

//color and fonts imports
import colors from '../styles/colors'
import fonts from '../styles/fonts'

/**
 * Enviroment Button component properties
 */
interface EnvironmentButtonProps extends RectButtonProps {
    /**
     * A string which will be displayed inside the button
     */
    title: string;
    /**
     * if true, changes the style of the button making it green
     */
    active?: boolean;
}
/**
 * Is a rectButton with two diferents styles for beter UX
 * 
 * @param title string, text that will be displayed
 * @param active boolean, changes the style of the button
 * @returns the EnvironmentButton component
 */
export function EnvironmentButton ({
    title,
    active = false,
    ...rest
} : EnvironmentButtonProps){
    return(
        <RectButton
            style={[
                Styles.container,
                //if active adds the containerActive style to the button
                active && Styles.containerActive
            ]}
            {...rest}
        >
            <Text
                style={[
                    Styles.text,
                    //if active adds the containerActive style to the text
                    active && Styles.textActive
                ]}
            >
                { title }
            </Text>
        </RectButton>
    )
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight:5
    },
    containerActive:{
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive:{
        color: colors.green_dark,
        fontFamily: fonts.heading
    }
})