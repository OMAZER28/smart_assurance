import * as ExpoPixi from 'expo-pixi';
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import firebase from '../database/firebaseDb';


export default class signatureA extends Component {
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
        this.props.navigation.navigate('signatureB')
    }


    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child(imageName);
        return ref.put(blob);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
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
                    <Button
                        color="#19AC52"
                        title="Suivant"
                        onPress={this.saveCanvas}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sketch: {
        flex: 1,
    },
    sketchContainer: {
        height: '100%',
    },
    image: {
        flex: 1,
    },
    label: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
    },
});