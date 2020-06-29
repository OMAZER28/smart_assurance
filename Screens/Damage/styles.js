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
    toggleContainer: {
        flex: 2,
        justifyContent:'flex-start'
    },
    crashImage: {
        backgroundColor: '#EEE',
        justifyContent:'center',
        borderRadius:normalize(100,'height'),
        alignItems:'center',
        width:normalize(200, 'height'),
        height:normalize(200, 'height')
    },
    imageContainer: {
        flex:8,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image: {
        width:normalize(160, 'height'),
        height:normalize(160, 'height')
    }
})

//Export styles object
export { styles };