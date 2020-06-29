//Import librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        justifyContent:'space-around',
    },
    casesContainer: {
        flex: 5,
        justifyContent:'space-around'
    },
    case1: {
        borderColor:'#FC2',
        backgroundColor:'white',
        width:normalize(350, 'width'),
        height:normalize(200, 'height'),
        marginHorizontal:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        zIndex:5
    },
    case2: {
        borderColor:'#F45',
        backgroundColor:'white',
        width:normalize(350, 'width'),
        height:normalize(200, 'height'),
        marginHorizontal:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        zIndex:5
    },
    caseIconContainer: {
        justifyContent:'center',
        alignItems:'center',
        
        width:normalize(175,'width'),
    },
    caseTextContainer: {
        backgroundColor:'#EEE',
        width:normalize(150, 'width'),
        height:normalize(100, 'height'),
        marginRight:15,
        borderRadius:3,
        justifyContent:'center'
    },
    view: {
        justifyContent:'center',
    },
    title1: {
        width:normalize(150, 'width'),
        height:normalize(35, 'height'),
        marginRight:15,
        marginVertical:18,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    title2: {
        backgroundColor:'#EEE',
        width:normalize(150, 'width'),
        height:normalize(35, 'height'),
        marginRight:15,
        marginVertical:18,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    text: {
        fontWeight:'bold',
    },
    description: {
        marginHorizontal:15,
        textAlign:'center'
    },
    checked: {
        backgroundColor: 'rgba(0,150,255,0.8)',
        flex:1,
        flexDirection:'row',
        marginBottom:10,
        width:normalize(300, 'width'),
        marginHorizontal:48,
        borderRadius:5,
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:normalize(20,'width')
    },
    checkText: {
        color: 'white'
    }
})

//Export styles object
export { styles };