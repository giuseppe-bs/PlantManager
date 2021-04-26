import React, { useState } from 'react'
import Style from '../../styles/Confirmation'
import { 
    SafeAreaView, 
    Text, 
    View     
} from 'react-native'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'

export function Confirmation(){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect')
    }
    
    return(
        <SafeAreaView style={Style.container}>
            <View style={Style.wrapper}>
                <Text style={Style.emoji}>
                    😁
                </Text>
                <View style={Style.content}>                
                    <Text style={Style.title}>
                        Prontinho
                    </Text>
                    <Text style={Style.subtitle}>
                        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                    </Text>
                </View>
                <View style={Style.footer}>
                    <Button 
                        title="Confirmar"
                        onPress={handleMoveOn}
                    />
                </View>

            </View>
        </SafeAreaView>

    )
}