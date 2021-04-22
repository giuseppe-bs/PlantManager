import {StyleSheet, Dimensions} from 'react-native'; 
import colors from './colors';


export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading ,
        
    },
    subTitle:{
        fontSize:18,
        textAlign:'center',
        paddingHorizontal:20,
        color: colors.body_dark
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:14,
        height: 56,
        width: 56
    },
    buttonIcon:{
        color: colors.white,
        fontSize:24
    }
})