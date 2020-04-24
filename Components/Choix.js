import React from "react";
import { ImageBackground,TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Choix extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg3.png')} style={styles.image}>
                <Text style={styles.text1}>Choisissez Une Option De Remplissage Du Constat:</Text>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => Actions.page1()}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../assets/img3.png')}
                        />
                        <Text style={styles.text2}>Remplire Vous Même Votre Constat (Avec 2 Smartphones).</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => console.log("fqsfsf")}
                    >
                        <Text style={styles.text2}>Remplir Le Constat Par Un Constateur (Avec Un Seul Smartphone)</Text>
                        <Image
                            style={styles.logo}
                            source={require('../assets/img4.png')}
                        />
                    </TouchableOpacity>
                    
                </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover"
    },
    container: {
        flex: 1,
        backgroundColor:"#fff6f5"
    },
    container2: {
        flex: 2
    },
    button1: {
        flexDirection:"row",
        backgroundColor: "rgba(232, 28, 28,0.5)",
        height:120
    },
    button2: {
        flexDirection:"row",
        backgroundColor: "rgba(36, 199, 79, 0.5)",
        height:120
    },
    text1:{
        flex:1,
        fontSize:20,
        color:"white",
        paddingLeft:10,
        paddingTop:18,
        fontWeight:"bold",
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 10
    },
    text2:{
        flex:1,
        fontSize:20,
        color:"white",
        paddingLeft:20,
        paddingTop:18,
        fontWeight:"bold",
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: 'sans-serif-thin'

    },
    logo:{
        width: 150,
        height: 150,
    }
});