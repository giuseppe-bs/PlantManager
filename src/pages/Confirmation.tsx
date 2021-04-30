//react import
import React, { useState } from 'react'
//react-native components import
import { 
    SafeAreaView, 
    Text, 
    View     
} from 'react-native'

//internal component import
import { Button } from '../components/Button'

//external libs component import
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native'

//import the confirmation page style
import Style from '../styles/Confirmation'

//interface for the data from the previous page
interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

//emojis
const emojis = {
    hug: '🤗',
    smile: '😄'
}


export function Confirmation(){
    //const for navigation and data fetch
    const navigation = useNavigation();
    const routes = useRoute();

    //get the data from the previus page
    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    /**
     * handler function for calling the navigation to the next screen     
     * @param void
     * @returns void 
    */
    function handleMoveOn(){
        navigation.navigate(nextScreen)
    }
    
    //render
    return(
        <SafeAreaView style={Style.container}>
            <View style={Style.wrapper}>
                <Text style={Style.emoji}>
                    {emojis[icon]}
                </Text>
                <View style={Style.content}>                
                    <Text style={Style.title}>
                        {title}
                    </Text>
                    <Text style={Style.subtitle}>
                        {subtitle}
                    </Text>
                </View>
                <View style={Style.footer}>
                    <Button 
                        title={buttonTitle}
                        onPress={handleMoveOn}
                    />
                </View>

            </View>
        </SafeAreaView>

    )
}