import React from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../database/firebaseDb';
import SelectPicker from 'react-native-form-select-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
export default class Page1 extends React.Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('vehiculeA');
        this.state = {
            currentPosition: 0,
            stepCount: 3,
            allant_vers: '',
            marque: '',
            num_immatriculation: '',
            type: '',
            venant_de: '',
            bgColor: '#b9c1ca',
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
    storeData() {
        this.setState({
            isLoading: true,
        });
        this.dbRef.doc(this.state.id.toString()).set({
            allant_vers: this.state.allant_vers,
            marque: this.state.marque,
            num_immatriculation: this.state.num_immatriculation,
            type: this.state.type,
            venant_de: this.state.venant_de,
        });
        Actions.page2()
    }
    changeColor() {
        this.setState({ bgColor: 'green' });
    }
    render() {
        console.log(this.state.id)
        return (
            <View style={{ backgroundColor: '#c5f7be', flex: 1 }}>
                <View style={{ backgroundColor: '#6ce65c', height: 40 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={this.state.stepCount}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#454545', fontSize: 25, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 40, marginBottom: 20 }}>
                        Véhicule
                    </Text>
                    <ScrollView>
                        <SelectPicker
                            onValueChange={(value) => {
                                this.setState({
                                    marque: value,
                                    bgColor: 'green'
                                })
                            }}
                            selected={this.state.marque}
                            placeholder="Marque"
                            style={{
                                backgroundColor: '#e2ffde', marginLeft: 15, height: 50, paddingLeft: 0,
                                color: '#6a7989',
                                fontSize: 18, fontWeight: 'bold'
                            }}
                            onSelectedStyle={{ color: '#6a7989', fontWeight: 'bold', fontSize: 18 }}
                        >
                            <SelectPicker.Item label="Peugeot" value="Peugeot" />
                            <SelectPicker.Item label="Renault" value="Renault" />
                            <SelectPicker.Item label="Opel" value="Opel" />
                            <SelectPicker.Item label="Citroën" value="Citroën" />
                            <SelectPicker.Item label="Volkswagen" value="Volkswagen" />
                            <SelectPicker.Item label="Nissan" value="Nissan" />
                            <SelectPicker.Item label="Audi" value="Audi" />
                            <SelectPicker.Item label="Mercedes" value="Mercedes" />
                            <SelectPicker.Item label="Ford" value="Ford" />
                            <SelectPicker.Item label="BMW" value="Bmw" />
                            <SelectPicker.Item label="Toyota" value="Toyota" />
                            <SelectPicker.Item label="Dacia" value="Dacia" />
                        </SelectPicker>
                        <Text style={{ height: 0, borderBottomColor: this.state.bgColor, borderBottomWidth: 2.5 }} ></Text>
                        <Hoshi
                            label={'Type'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.type}
                            onChangeText={(val) => this.inputValueUpdate(val, 'type')}
                        />
                        <Hoshi
                            label={'N° d\'immatriculation'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.num_immatriculation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_immatriculation')}
                        />
                        <Hoshi
                            label={'Venant de'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.venant_de}
                            onChangeText={(val) => this.inputValueUpdate(val, 'venant_de')}
                        />
                        <Hoshi
                            label={'Allant vers'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.allant_vers}
                            onChangeText={(val) => this.inputValueUpdate(val, 'allant_vers')}
                        /><KeyboardSpacer />
                    </ScrollView>
                    
                    <View>
                        <Button
                            title='Suivant'
                            onPress={() => this.storeData()}
                            color="#19AC52"
                        />
                    </View>
                </View>
            </View>
        );
    }
}