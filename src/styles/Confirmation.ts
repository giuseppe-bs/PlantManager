import {StyleSheet, Dimensions} from 'react-native'; 

import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-around',
    },
    wrapper:{
        flex:1,
        alignContent:'center',        
        justifyContent: 'center',
        width:'100%',
    },
    content:{
        alignContent:'center',        
        justifyContent: 'center',
        width:'100%',
        padding:20
    },
    title:{
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign:'center',
        color:colors.heading,
        lineHeight:38,
        marginTop:15
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize:17,
        paddingVertical:10,
        color:colors.heading
    },
    emoji:{
        fontSize:78,
        textAlign:'center'
    },
    footer:{
        width:'100%',
        paddingHorizontal:50
    }

})