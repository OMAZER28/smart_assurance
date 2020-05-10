import * as ExpoPixi from 'expo-pixi';
import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import firebase from '../../database/firebaseDb';
import { Actions } from 'react-native-router-flux';

export default class Case2Choice1Step5 extends Component {
    goToCase2 = () => {
        Actions.case2({ isChoice1Disabled: true })
    }

    state = {
        image: null,
        strokeColor: 0,
    };

    clearCanvas = () => {
        this.refs.signatureCanvas.clear()
    }
    saveCanvas = async () => {
        const signature_result = await this.refs.signatureCanvas.takeSnapshotAsync({
            format: 'jpeg',
            quality: 1,
            result: 'file'
        })
        this.uploadImage(signature_result.uri, "signatureA");
        this.goToCase2();
    }


    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child(imageName);
        return ref.put(blob);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <View style={styles.sketchContainer}>
                        <ExpoPixi.Signature
                            ref='signatureCanvas'
                            style={styles.sketch}
                            strokeColor={'blue'}
                            strokeAlpha={1}

                        />
                    </View>
                </View>
                <View >
                    <Button
                        color={'red'}
                        title="Réessayer"
                        onPress={this.clearCanvas}
                    />


                </View>
                <TouchableWithoutFeedback onPress={()=>this.saveCanvas()}>
                    <View style={styles.nextBox}>
                        <Image source={require('../../icones/next.png')} style={styles.nextImage}></Image>
                        <Text style={styles.nextText}>SUIVANT</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    nextBox: {
        marginTop: 50,
        marginBottom: 50
    },
    sketchContainer: {
        height: '100%',
    },
    nextImage: {
        width: 35,
        height: 35,
        marginLeft: 245,
    },
    nextText: {
        fontSize: 25,
        position: 'absolute',
        right: '10%',
        top: '0%',
        color: '#0054AF'
    },
    sketch: {
        flex: 1,
    }
})