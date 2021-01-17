import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        maxHeight: undefined
    },
    metade: {
        width: '80%',
        height: '35%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reta: {
        width: height,
        height: width * 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    textBem: {
        color: 'white',
        fontSize: width * 0.07,
        width: '70%',
        fontWeight: '500'
    },
    input: {
        width: '70%',
        borderWidth: 0,
        borderBottomWidth: width * 0.004,
        height: width * 0.2,
        fontSize: width * 0.05,
        borderColor: 'white'
    },
    submit: {
        width: '40%',
        height: width * 0.14,
        backgroundColor: '#3A0E63',
        borderRadius: width * 0.09,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.05,

    },
    los: {
        width: width * 0.09,
        height: width * 0.09,
    },
    rowcima: {
        width: '80%',
        height: width * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textcima: {
        color: 'white',
        fontSize: width * 0.05,
        paddingHorizontal: width * 0.03
    },
    text:{
        color:'white',
        fontSize:width*0.05,
        width:'80%',
        textAlign:'center'
    },
    row:{
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    t:{
        color:'white',
        fontSize: width*0.05,
        paddingHorizontal: width*0.03
    }
});
export default styles;