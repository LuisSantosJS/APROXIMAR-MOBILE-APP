import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        maxHeight: undefined
    },
    metade: {
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttons: {
        width: '80%',
        height: '28%',
        backgroundColor: 'white',
        borderRadius: width*0.02,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{    
        fontSize: width*0.05,
        textAlign:'center',
        fontWeight:'700'
    },
    text: {
        color: 'white',
        fontSize: width * 0.07,
        fontWeight: '600',
        width: '80%'
    },
    cadastrarText: {
        color: 'white',
        fontWeight: '500',
        fontSize: width * 0.045,
        textAlign: 'center'
    },
    wellText: {
        color: 'white',
        fontSize: width * 0.15,
        textAlign: 'center',
        width: '80%',
        fontWeight: 'bold'
    }
});
export default styles;