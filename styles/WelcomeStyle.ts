import {StyleSheet, Dimensions} from 'react-native'; 
import colors from './colors';
import fonts from './fonts';



export default StyleSheet.create({
    container: {
        flex:1,       
    },
    wrapper:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal:20
    },
    title:{
        fontSize:32,
        textAlign:'center',
        color: colors.heading ,
        fontFamily: fonts.heading,
        lineHeight:38,
        marginTop:34
    },
    subTitle:{
        fontSize:18,
        textAlign:'center',
        paddingHorizontal:20,
        color: colors.body,
        fontFamily: fonts.text,
        lineHeight:25
    },
    image:{
        height: Dimensions.get('window').width * 0.8
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