import React, { useState } from 'react'
import Style from '../styles/Confirmation'
import { 
    SafeAreaView, 
    Text, 
    View     
} from 'react-native'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native'

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}
export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen)
    }
    
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