//import from the react and react-native
import React from 'react';
import { 
    Text, 
    TouchableOpacity,
    TouchableOpacityProps, 
    StyleSheet
} from 'react-native';

//color and font imports
import colors from '../styles/colors';
import fonts from '../styles/fonts'

/** 
 * Button component properties
*/
interface ButtonProps extends TouchableOpacityProps{
    /**
     * the text that will be displayed inside of the button
     */
    title: string;
}

/**
 * exports a green touchableopacity button with a written title
 * @param title string, displayed text
 * @returns the button component
 */
export function Button({title, ... rest} : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.6}
            {... rest}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>                
        </TouchableOpacity>
    )
}

//sets the styles for many components inside the button
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        height:56,        
    },
    buttonText:{
        color: colors.white,
        fontSize:16,
        fontFamily: fonts.heading
    }
})