import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import WelcomeStyle from '../../styles/WelcomeStyle';
import wateringImg from  '../assets/watering.png';
import { Button } from '../components/Button';


export function Welcome(){
    //use State has a value and a function related to that function
    const [visible, setVisible] = useState(false);

    //declaration of a handler function to change the value of the visible variable
    function handleVisibility(){
        setVisible(!visible)
    }

    //return the screen apearance
    return(
        <View style={WelcomeStyle.container}>

            <Text style={WelcomeStyle.title}>
                Gerencie{'\n'}suas plantas de{'\n'}forma fácil
            </Text>

            {/*the image will only be visible if the visible vatiable is true*/}
            {visible && <Image source={wateringImg} style={WelcomeStyle.image}/>}

            <Text style={WelcomeStyle.subTitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            {/*By using the extend on the TouchableOpacityProp it's possible to use onPress for example*/}
            <Button title = {'>'} onPress = {handleVisibility}/>
        </View>
    )
}