import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height,
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        justifyContent: 'flex-start',
        width: width,
        maxHeight: undefined
    },
    header: {
        width: '100%',
        height: width * 0.4,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    view: {
        width: '80%',
        height: width * 2,
        top: - width * 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    profile: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        borderWidth: 1,
        top: - width * 0.14,
        borderColor: '#707070',
        backgroundColor: 'white'
    },
    name:{
        color:'#707070',
        top: - width * 0.12,
        fontWeight:'500',
        textAlign:'center',
        fontSize: width*0.06,
    },
    desc:{
        color:'#707070',
        top: - width * 0.12,
        fontWeight:'500',
        textAlign:'center',
        fontSize: width*0.045,
        width:'80%'
    },
    row:{
        width:'70%',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    buts:{
        width: width*0.25,
        height: width*0.08,
        alignItems:'center',
        justifyContent:'center'
    },
    itemsf:{
        width:'90%',
        height: width*1,
        alignItems:'center',
        justifyContent:'flex-start',
        padding: 7,
        borderRadius: width*0.08
    },
    textg:{
        color:'white',
        fontSize: width*0.035
    },
    itgh:{
        width:'80%',
        height: width*0.15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:5,
        backgroundColor:'white'
    },
    itghg:{
        width:'80%',
        height: width*0.2,
        alignItems:'flex-start',
        justifyContent:'center',
        paddingHorizontal:10,
        backgroundColor:'white'
    },
    nego:{
        fontSize: width*0.05,
        paddingHorizontal:6,
        color:'#191919',
        fontWeight: 'bold'
    },
    gt:{
        color:'#707070',
        fontSize: width*0.03,

    }
});
export default styles;