import {StyleSheet, Dimensions} from 'react-native'; 
import colors from './colors';
import fonts from './fonts';



export default StyleSheet.create({
    container:{
        flex: 1,
        //justifyContent:'center',
        backgroundColor: colors.background,        
    },
    header: {
        paddingHorizontal:30
    },
    title:{
        fontSize:17,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        color:colors.heading,
        lineHeight:20
    },
    enviromentList:{
        flex:1,
        height:40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft:32,
        marginVertical:32
    },
    plants:{
        flex:1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    plantsList:{
        
    }
})
  