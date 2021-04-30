//the external libs imports, such as: react, react-native, asyncstorage
import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import of the visuals sets of this project
import colors from '../styles/colors'
import userImg from '../../assets/icon.png'
import fonts from '../styles/fonts';

/**
 * Is a header component that display the userName,
 * greets them,show their profile Image 
 * @returns the header component
 */
export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        /**
         * gets the user name from the storage and sets the const
         * userName
         */
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    },[]);
    
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greetings}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>
            <Image 
                source={userImg}
                style={styles.image}
            />            
        </View>
    )
}

//this const contains the styles for the inner components 
const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:20,
        //marginTop:getStatusBarHeight(),       
    },
    image:{
        width:56,
        height:56,
        borderRadius: 23        
    },
    greetings:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text
    },
    userName:{
        fontSize: 32,
        fontFamily:fonts.heading,
        color: colors.heading,
        lineHeight:40
    }
})