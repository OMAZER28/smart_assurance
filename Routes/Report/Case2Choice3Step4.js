import React from 'react';
import { Button,View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import CheckBox from 'react-native-check-box';
import firebase from '../../database/firebaseDb';
import { Actions } from 'react-native-router-flux';
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
export default class Case2Choice3Step4 extends React.Component {
  constructor() {
    super();
    this.state1 = { currentPosition: 3, stepCount: 6 };
    this.dbRef = firebase.firestore().collection('partie4A');
    this.dbRef1 = firebase.firestore().collection('partie4B');
    this.state = {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      isLoading: false,
      id: 0
    };
    this.keys = [];
        this.dbRef.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.keys.push(doc.id)
            });
            if (this.keys.length > 0) {
                this.setState({ id: parseInt(this.keys[this.keys.length - 1]) + 1 })
            }
            else {
                this.setState({ id: 1 })
            }
        })
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  goToCase2Choice3Step5 = () => {
    Actions.case2Choice3Step5()
  }
  storeData() {
    this.setState({
      isLoading: true,
    });
    this.dbRef.doc(this.state.id.toString()).set({
      11: this.state.a,
      12: this.state.b,
      13: this.state.c,
      14: this.state.d,
      15: this.state.e,
    });
    this.dbRef1.doc(this.state.id.toString()).set({
      11: this.state.f,
      12: this.state.g,
      13: this.state.h,
      14: this.state.i,
      15: this.state.j,
    });
    this.goToCase2Choice3Step5()
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
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="green"
              onClick={() => {
                this.setState({
                  c: !this.state.c,
                });
              }}
              isChecked={this.state.c}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="green"
              onClick={() => {
                this.setState({
                  d: !this.state.d,
                });
              }}
              isChecked={this.state.d}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="green"
              onClick={() => {
                this.setState({
                  e: !this.state.e,
                });
              }}
              isChecked={this.state.e}
            />
          </View>
          <View style={{ backgroundColor: '#ffeeed', flex: 1}}>
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
              11- reculait
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
              12- doublait (dépassait)
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
              13- changeait de file
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
              14- virait à droite
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
              15- virait à gauche
          </Text>
          </View>
          <View style={{ backgroundColor: '#e02500', width: 40}}>
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
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="#ff8880"
              onClick={() => {
                this.setState({
                  h: !this.state.h,
                });
              }}
              isChecked={this.state.h}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="#ff8880"
              onClick={() => {
                this.setState({
                  i: !this.state.i,
                });
              }}
              isChecked={this.state.i}
            />
            <CheckBox
              style={{ padding: 10, flex: 1 }}
              checkBoxColor="#ff8880"
              onClick={() => {
                this.setState({
                  j: !this.state.j,
                });
              }}
              isChecked={this.state.j}
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

