import React from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../database/firebaseDb';
import SelectPicker from 'react-native-form-select-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 35,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'red',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'red',
    stepStrokeUnFinishedColor: 'red',
    separatorFinishedColor: 'red',
    separatorUnFinishedColor: 'red',
    stepIndicatorFinishedColor: 'red',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: 'black',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'red',
}
export default class Page4 extends React.Component {
    constructor() {
        super();
        this.dbRef0 = firebase.firestore().collection('vehiculeA');
        this.dbRef = firebase.firestore().collection('vehiculeB');
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
            allant_vers: this.state.allant_vers,
            marque: this.state.marque,
            num_immatriculation: this.state.num_immatriculation,
            type: this.state.type,
            venant_de: this.state.venant_de,
        });
        this.props.navigation.navigate('Page5')
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ffc3b8', flex: 1 }}>
                <View style={{ backgroundColor: '#de553a', height: 40 }}>
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
                                    bgColor: 'red'
                                })
                            }}
                            selected={this.state.marque}
                            placeholder="Marque"
                            style={{
                                backgroundColor: '#ffeeeb', marginLeft: 15, height: 50, paddingLeft: 0,
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
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.type}
                            onChangeText={(val) => this.inputValueUpdate(val, 'type')}
                        />
                        <Hoshi
                            label={'N° d\'immatriculation'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.num_immatriculation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_immatriculation')}
                        />
                        <Hoshi
                            label={'Venant de'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.venant_de}
                            onChangeText={(val) => this.inputValueUpdate(val, 'venant_de')}
                        />
                        <Hoshi
                            label={'Allant vers'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.allant_vers}
                            onChangeText={(val) => this.inputValueUpdate(val, 'allant_vers')}
                        />
                    </ScrollView>
                    <KeyboardSpacer />
                    <View>
                        <Button
                            title='Suivant'
                            onPress={() => this.storeData()}
                            color="#de553a"
                        />
                    </View>
                </View>
            </View>
        );
    }
}