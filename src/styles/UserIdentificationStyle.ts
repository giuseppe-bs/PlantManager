import {StyleSheet, Dimensions} from 'react-native'; 
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        alignContent:'space-around',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    form:{
        flex:1,
        paddingHorizontal:54,
        alignContent:'space-around',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    emoji:{
        fontSize:44
    },
    title:{
        fontSize:24,
        fontFamily: fonts.heading,
        lineHeight:32,
        textAlign:'center',
        color: colors.heading,
        marginTop: 20
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        width:'100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer:{
        marginTop:40,
        width:'100%',
        paddingHorizontal:20
    },

})