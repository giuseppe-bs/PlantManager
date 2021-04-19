import {StyleSheet} from 'react-native'; 
import colors from './colors';

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading ,
        marginTop:38
    },
    subTitle:{
        fontSize:18,
        textAlign:'center',
        paddingHorizontal:20,
        color: colors.body_dark
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:14,
        height:56,
        width:56
    },
    image:{
        width:292,
        height:284
    },
    buttonText:{
        color: colors.white,
        fontSize:26
    }
})