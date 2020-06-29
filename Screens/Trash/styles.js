//Import used functions from librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
//Create styles object
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00CC6A',
    },
    headerText: {
        color: 'white',
    },
    container: {
        flex: 1,
        position: 'absolute',
        height: '80%',
        width: '100%',
        top: '12%'
    },
    fileIcon: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    iconContainer: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:normalize(100,"width"),
        backgroundColor:'#fceded',
        width: normalize(200,"width"),
        height: normalize(200,"width")
    },
    text1: {
        marginTop:20,
        color:'#888',
        fontSize:16,
        textAlign:'center'
    },
    text2: {
        color:'#888',
        fontSize:16,
        textAlign:'center'
    },
})

//Export styles object
export { styles };