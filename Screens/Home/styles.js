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
        borderRadius:normalize(100, 'width'),
        backgroundColor:'rgba(0,255,45,0.1)',
        width: normalize(200, 'width'),
        height: normalize(200, 'width')
    },
    text1: {
        marginTop:20,
        color:'#888',
        fontSize:18,
        textAlign:'center'
    },
    text2: {
        color:'#888',
        fontSize:18,
        textAlign:'center'
    },
    addIcon: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:normalize(-25, 'width'),
        right: normalize(20, 'width'),
        width: normalize(55, 'width'),
        height: normalize(55, 'width'),
        borderRadius:normalize(30, 'width'),
        backgroundColor:'#00CC6A',
    }
})

//Export styles object
export { styles };