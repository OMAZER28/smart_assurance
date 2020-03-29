import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import firebase from '../database/firebaseDb';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Page1 extends React.Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
  }
  async componentDidMount() {
    this.getPermissionAsync()
  }
  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child(imageName);
    return ref.put(blob);
  }
  render() {
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => {
            this.camera = ref;
          }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
              >
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
                onPress={async () => {
                  if (this.camera) {
                    let photo = await this.camera.takePictureAsync();
                    console.log(photo);
                    this.uploadImage(photo.uri, "B");
                    this.props.navigation.navigate('Page7');
                  }
                }}
              >
                <FontAwesome
                  name="camera"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
              >
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}