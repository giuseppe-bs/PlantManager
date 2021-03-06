//import from react and react-native
import React, {useState} from 'react';
import { 
    Text, 
    Image, 
    SafeAreaView,
    TouchableOpacity,
    View
} from 'react-native';

//import from external libs
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

//import from internal libs
import WelcomeStyle from '../styles/WelcomeStyle';
import wateringImg from  '../assets/watering.png';

export function Welcome(){
    //use State has a value and a function related to that function
    const [visible, setVisible] = useState(false);

    //navigation const will e used for pages navigation
    const navigation = useNavigation();

    //declaration of a handler function to change the value of the visible variable
    function handleVisibility(){
        setVisible(!visible)
    }

    //delaration of a handler function to call the navigation to the next page
    function handleStart(){
        navigation.navigate("UserIdentification")
    }

    //return the screen apearance
    return(
        <SafeAreaView style={WelcomeStyle.container}>
            <View style={WelcomeStyle.wrapper}>   

                <Text style={WelcomeStyle.title}>
                    Gerencie{'\n'}suas plantas de{'\n'}forma fácil
                </Text>

                
                <Image 
                    source={wateringImg} 
                    style={WelcomeStyle.image}
                    resizeMode="contain"
                />

                <Text style={WelcomeStyle.subTitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={WelcomeStyle.button} 
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <Text style={WelcomeStyle.buttonIcon}>
                        <Feather name ="chevron-right" style={WelcomeStyle.buttonIcon}/>
                    </Text>                
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}