import React from "react";
import { ImageBackground, Button, Image, StyleSheet, Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Acceuil extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg3.png')} style={styles.image}>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/icon.png')}
                        />
                    </View>
                    <View style={styles.container1}>
                        <Text style={styles.text1}>SMART ASSURANCE</Text>
                        <Text style={styles.text}>Votre compagnon en cas d'accident</Text>
                    </View>
                    <View style={styles.container2}>
                        <Button
                            title="PRESENTATION"
                            onPress={() => Actions.presentation()}
                            color="rgba(232, 28, 28,0.5)"
                        />
                        <Button
                            title="Commencer"
                            onPress={() => Actions.report()}
                            color="rgba(36, 199, 79, 0.5)"
                        />
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        padding: 50
    },
    text1: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop:50,
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 10
    },
    logo: {
        width: 250,
        height: 250,
        marginTop:150,
        marginBottom: 50,
        alignSelf: "center"
    },
    container: {
        flex: 3
    },
    container1: {
        flex: 2
    },
    container2: {
        flexDirection:"row",
        justifyContent: 'space-between',
        marginBottom:120,
    }
});