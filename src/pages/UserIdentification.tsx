import React, { useState } from 'react'
import Style from '../styles/UserIdentificationStyle'
import { 
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
    Text, 
    TextInput, 
    View, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button'

import colors from '../styles/colors'


export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit(){
        if(!name)
            return Alert.alert('Me diz como chamar você 😢');

        try{
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect',
            });        
        }catch{
            Alert.alert('Não foi possível salvar o seu nome. 😢');
        }
    }

    return(
        <SafeAreaView style={Style.container}>
            <KeyboardAvoidingView 
                style={Style.container}
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >      
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >         
                    <View style={Style.form}>  

                        <View style={Style.header}>                                    
                            <Text style={Style.emoji}>
                                {isFilled? '😆': '😃'}
                            </Text>
                            <Text style={Style.title}>
                                Como podemos{'\n'}
                                chamar você?
                            </Text>
                        </View>

                        <TextInput 
                            style={[
                                Style.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder={'Digite um nome'}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        /> 

                        <View style={Style.footer}>
                            <Button 
                                title={'Confirmar'}
                                onPress={handleSubmit}
                            />
                        </View>

                    </View>           
                </TouchableWithoutFeedback>      
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}