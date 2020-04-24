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
export default class Page2 extends React.Component {
    constructor() {
        super();
        this.dbRef0 = firebase.firestore().collection('vehiculeA');
        this.dbRef = firebase.firestore().collection('assureA');
        this.state = {
            currentPosition: 1,
            stepCount: 3,
            nom: '',
            prenom: '',
            adresse: '',
            ste_assurance: '',
            num_attestation: '',
            num_police: '',
            num_carte_verte: '',
            att_valable_du: '',
            att_valable_au: '',
            agence_bureau_courtier: '',
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
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,
            ste_assurance: this.state.ste_assurance,
            num_attestation: this.state.num_attestation,
            num_police: this.state.num_police,
            num_carte_verte: this.state.att_valable_du,
            att_valable_au: this.state.att_valable_au,
            att_valable_du: this.state.att_valable_du,
            agence_bureau_courtier: this.state.agence_bureau_courtier,
        });
        Actions.page3()
    }
    render() {
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
                    <Text style={{ color: '#454545', fontSize: 25, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 40 }}>
                        Assuré
                    </Text>
                    <ScrollView>
                        <Hoshi
                            label={'Nom (en majuscule)'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.nom}
                            autoCapitalize="characters"
                            onChangeText={(val) => this.inputValueUpdate(val, 'nom')}
                        />
                        <Hoshi
                            label={'Prénom'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.prenom}
                            onChangeText={(val) => this.inputValueUpdate(val, 'prenom')}
                        />
                        <Hoshi
                            label={'Adresse'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.adresse}
                            onChangeText={(val) => this.inputValueUpdate(val, 'adresse')}
                        />
                        <SelectPicker
                            onValueChange={(value) => {
                                this.setState({
                                    ste_assurance: value,
                                    bgColor: 'green'
                                })
                            }}
                            selected={this.state.ste_assurance}
                            placeholder="Sté d'assurance"
                            style={{
                                backgroundColor: '#e2ffde', marginLeft: 15, height: 50, paddingLeft: 0, marginTop: 10,
                                color: '#6a7989',
                                fontSize: 18, fontWeight: 'bold'
                            }}
                            onSelectedStyle={{ color: '#6a7989', fontWeight: 'bold', fontSize: 18 }}
                        >
                            <SelectPicker.Item label="Atlanta" value="Atlanta" />
                            <SelectPicker.Item label="Axa Assurance" value="Axa Assurance" />
                            <SelectPicker.Item label="Saham Assurance" value="Saham Assurance" />
                            <SelectPicker.Item label="Wafa Assurance" value="Wafa Assurance" />
                            <SelectPicker.Item label="Sanad" value="Sanad" />
                            <SelectPicker.Item label="Allianz Assurance" value="Allianz Assurance" />
                        </SelectPicker>
                        <Text style={{ height: 0, borderBottomColor: this.state.bgColor, borderBottomWidth: 2.5 }} ></Text>
                        <Hoshi
                            label={'N° d\'Attestation'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.num_attestation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_attestation')}
                        />
                        <Hoshi
                            label={'N° de police'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.num_police}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_police')}
                        />
                        <Hoshi
                            label={'N° Carte verte(pour les étrangers)'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.num_carte_verte}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_carte_verte')}
                        />
                        <Hoshi
                            label={'Attestation valable du'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.att_valable_du}
                            onChangeText={(val) => this.inputValueUpdate(val, 'att_valable_du')}
                        />
                        <Hoshi
                            label={'Attestation valable au'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.att_valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'att_valable_au')}
                        />
                        <Hoshi
                            label={'Agence,bureau ou courtier'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.agence_bureau_courtier}
                            onChangeText={(val) => this.inputValueUpdate(val, 'agence_bureau_courtier')}
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