import React from 'react';
import { Button, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import CheckBox from 'react-native-check-box';
import firebase from '../database/firebaseDb';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'green',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'green',
  stepStrokeUnFinishedColor: 'green',
  separatorFinishedColor: 'green',
  separatorUnFinishedColor: 'green',
  stepIndicatorFinishedColor: 'green',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: 'black',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'green',
}
export default class Page8 extends React.Component {
  constructor() {
    super();
    this.state1 = { currentPosition: 1, stepCount: 6 };
    this.dbRef0 = firebase.firestore().collection('vehiculeA');
    this.dbRef = firebase.firestore().collection('partie2A');
    this.dbRef1 = firebase.firestore().collection('partie2B');
    this.state = {
      a: false,
      b: false,
      c: false,
      d: false,
      isLoading: false,
      id: 0
    };
    this.keys = [];
    this.dbRef0.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.keys.push(doc.id)
      });
      this.setState({ id: parseInt(this.keys[this.keys.length - 1])})
    })
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  storeData() {
    this.setState({
      isLoading: true,
    });
    this.dbRef.doc(this.state.id.toString()).set({
      6: this.state.a,
      7: this.state.b,
    });
    this.dbRef1.doc(this.state.id.toString()).set({
      6: this.state.c,
      7: this.state.d,
    });
    this.props.navigation.navigate('Page9')
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: "row" }}>
          <View style={{ backgroundColor: '#4fc940', width: 40 }}>
            <Text style={{ marginTop: 35, color: 'white', fontSize: 40, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 5, flex: 1 }}>A</Text>
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="green"
              onClick={() => {
                this.setState({
                  a: !this.state.a,
                });
              }}
              isChecked={this.state.a}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="green"
              onClick={() => {
                this.setState({
                  b: !this.state.b,
                });
              }}
              isChecked={this.state.b}
            />
          </View>
          <View style={{ backgroundColor: '#ffeeed', flex: 1 }}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state1.currentPosition}
              stepCount={this.state1.stepCount}
            />
            <Text
              style={{
                color: '#454545',
                fontSize: 20,
                fontWeight: 'normal',
                fontFamily: 'normal',
                textAlign: "center",
                flex: 1
              }}>
              Selectionnez les cases utiles
          </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 15,
                fontWeight: 'normal',
                fontFamily: 'normal',
                textAlign: "center",
                flex: 1
              }}>
              6- s'engageait sur une place à sens giratoire
          </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 15,
                fontWeight: 'normal',
                fontFamily: 'normal',
                textAlign: "center",
                flex: 1
              }}>
              7- s'engageait sur une place à sens giratoire
          </Text>
          </View>
          <View style={{ backgroundColor: '#e02500', width: 40 }}>
            <Text style={{ marginTop: 35, color: 'white', fontSize: 40, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 5, flex: 1 }}>B</Text>
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="#ff8880"
              onClick={() => {
                this.setState({
                  f: !this.state.f,
                });
              }}
              isChecked={this.state.f}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="#ff8880"
              onClick={() => {
                this.setState({
                  g: !this.state.g,
                });
              }}
              isChecked={this.state.g}
            />
          </View>
        </View>
        <View>
          <Button
            title='Suivant'
            onPress={() => this.storeData()}
            color="#19AC52"
          />
        </View>
      </View>
    );
  }
}
