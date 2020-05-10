import React, { PureComponent } from 'react';
import { View, AppRegistry, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import firebase from '../../database/firebaseDb';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

export default class Case2Choice2Step4 extends PureComponent {
  goToCase2Choice2Step5 = () => {
    Actions.case2Choice2Step5()
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const photo = await this.camera.takePictureAsync(options);
      this.uploadImage(photo.uri, "B");
      this.camera.pausePreview();
    }
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
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
            pauseAfterCapture={true}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> Capture </Text>
            </TouchableOpacity>

          </View>
          <TouchableWithoutFeedback onPress={() => this.goToCase2Choice2Step5()}>
            <View style={styles.nextBox}>
              <Image source={require('../../icones/next.png')} style={styles.nextImage}></Image>
              <Text style={styles.nextText}>SUIVANT</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  nextBox: {
    marginTop: 50,
    marginBottom: 50
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})

AppRegistry.registerComponent('App', () => Case2Choice2Step4);