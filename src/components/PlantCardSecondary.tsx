//imports the components  from the external libs 
import React from 'react';
import { 
    StyleSheet, 
    Text,
    View ,
    Animated 
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

//imports the swipeable view 
import Swipeable from 'react-native-gesture-handler/Swipeable';

//imports the styles options of the project
import colors from '../styles/colors';
import fonts from '../styles/fonts';

/**
 * Plant Card Component properties
 */
interface PlantProps extends RectButtonProps {
    data: {
        /**
         * name of the plant that will be displayed in the plant card
         */
        name: string;
        /**
         * a url string that refers to the location of the photo that will be
         * shown in the card
         */
        photo: string;
        /**
         * the time of the plant's next watering
         */
        hour: string;
    };
    /**
     * function for the removal of the plant from the list
     * called @function onPress
     */
    handleRemove: () => void;
}

/**
 * this is a swipable plant component that displays the 
 * name, a photo and the hour of the watering
 * 
 * @param data name: string, photo: string, hour: string
 * @param handleRemove onPress function
 * @returns the plant card component
 */
export const PlantCardSecondary = ({ data, handleRemove, ...rest} : PlantProps) => {
    return(
        //a swipeable view that wraps the component
        <Swipeable
            //set the swipe direction to left
            overshootRight={false}
            //what will be rendered qhen swiped
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white}/>
                        </RectButton>
                    </View>
                </Animated.View>

            )}
        >
            {/* this rectbutton sets the visual of the button*/}
            <RectButton
                style={styles.container}
                {...rest}
            >
                <SvgFromUri 
                    uri={data.photo} 
                    width={50} 
                    height={50} 
                />
                <Text style={styles.title}>
                    { data.name }
                </Text>
                <View style={styles.details}>
                    <Text style={styles.timeLabel}>
                        Regar às
                    </Text>
                    <Text style={styles.time}>
                        {data.hour}
                    </Text>
                
                </View>
            </RectButton>
        </Swipeable>
    )
}

//this const contains the styles properties of the button
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.heading
    },
    details: {
        alignItems: 'flex-end', 
    },
    timeLabel: {        
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light,
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark,
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    } 
})