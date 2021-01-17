import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: height * 2,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        maxHeight: undefined
    },
    header: {
        width: '100%',
        height: width*0.4,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    colums: {
        height: '95%',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    ted: {
        fontSize: width * 0.05,
        color: 'white'
    },
    avatar: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: (width * 0.2) / 2,
        backgroundColor: 'white'
    },
    pontos: {
        fontSize: width * 0.05,
        color: '#707070',
        padding: 2,
        width: '90%',
        textAlign: 'center'
    },
    cutos: {
        color: '#707070',
        width: '90%',
        fontSize: width * 0.05,
        padding: width * 0.04
    },
    item: {
        width: width * 0.4,
        height: width * 0.4,
        backgroundColor: 'white',
        borderRadius: width * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nome: {
        color: '#707070',
        fontSize: width * 0.06,
        textAlign: 'center'
    },
    scrol: {
        maxHeight: width * 0.45
    },
    cursorow: {
        width: '90%',
        borderBottomWidth: 3,
        borderColor: '#e5e5e5',
        height: width * 0.25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    oratoria: {
        fontSize: width * 0.055,
        fontWeight: '600',
        color: '#707070',
        width: '80%'
    }
});
export default styles;