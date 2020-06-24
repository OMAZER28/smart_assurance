//Import used fonctions from librairies
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

//Create styles object
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#66F',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    icon: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    form: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    userIcon: {
        backgroundColor:'white',
        width: normalize(155,'width'),
        height: normalize(155,'width'),
        borderRadius: normalize(100,'width'),
        marginVertical:normalize(20,"width"),
        justifyContent:'center',
        alignItems:'center',
    },
    inputView: {
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:5,
        marginVertical:5
    },
    iconContainer: {
        width:normalize(35,'width'),
        height:normalize(35,'height'),
        marginTop: normalize(10,'height'),
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        width: normalize(250,'width'),
        height: normalize(45,'height'),
        paddingHorizontal:  normalize(10,'width'),
        marginVertical:  normalize(5,'height'),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
    },
    buttonView: {
        height: normalize(40,'height'),
        marginTop: normalize(10,'height'),
        backgroundColor: "#2AE",
        paddingVertical:  normalize(10,'height'),
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    button: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
         color: '#fff',
         marginHorizontal: normalize(15,'width'),
         fontSize: 16,
         fontWeight:'bold'
    }
});

//Export styles object
export { styles };