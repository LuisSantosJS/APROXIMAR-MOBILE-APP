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
});
export default styles;