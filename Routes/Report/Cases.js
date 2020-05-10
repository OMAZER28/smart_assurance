import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default Cases = () => {
    const goToCase2 = () => {
        Actions.case2()
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.question}>
                    <Text style={styles.title}>Sélectionnez le mode de saisie</Text>
                </View>
                <View style={styles.cases}>
                    <TouchableOpacity>
                        <View style={styles.case1}>
                            <Image source={require('../../icones/case1.png')} style={styles.image1}></Image>
                            <View style={styles.description1}>
                                <Text style={styles.desc1}>Remplire Vous Même Votre Constat (Avec 2 Smartphones)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToCase2}>
                        <View style={styles.case2}>
                            <Image source={require('../../icones/case2.png')} style={styles.image2}></Image>
                            <View style={styles.description2}>
                                <Text style={styles.desc2}>Remplir Le Constat Par Un Constateur (Avec Un Seul Smartphone)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    question: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 25,
        marginTop: 35,
        backgroundColor: 'rgba(0,161,96,0.8)',
        elevation: 4
    },
    title: {
        fontSize: 22,
        color: 'white'
    },
    cases: {
        flex: 8,
    },
    case1: {
        flexDirection: 'row',
        height: 250,
        marginLeft: 25,
        marginTop: 50,
        paddingTop: 50,
        paddingLeft: 10,
        borderColor: 'rgba(0,178,75,0.6)',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    case2: {
        flexDirection: 'row',
        height: 200,
        marginLeft: 50,
        marginBottom:40,
        paddingTop: 50,
        paddingLeft: 10,
        borderColor: 'rgba(0,178,75,0.6)',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    image1: {
        width: 100,
        height: 150
    },
    image2: {
        width: 70,
        height: 110
    },
    description1: {
        width: 250,
        height: 100,
        marginLeft: 25,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(0,178,75,0.6)',
        elevation: 5
    },
    description2: {
        width: 250,
        height: 100,
        marginLeft: 25,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(0,178,75,0.6)',
        elevation: 5
    },
    desc1: {
        color: 'white',
        fontSize: 15
    },
    desc2: {
        color: 'white',
        fontSize: 15
    }
})