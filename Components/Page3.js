import React from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../database/firebaseDb';
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
export default class Page3 extends React.Component {
    constructor() {
        super();
        this.dbRef0 = firebase.firestore().collection('vehiculeA');
        this.dbRef = firebase.firestore().collection('conducteurA');
        this.state = {
            currentPosition: 2,
            stepCount: 3,
            nom: '',
            prenom: '',
            adresse: '',
            num_permis: '',
            categorie: '',
            delivre_le: '',
            par_prefecture: '',
            valable_au: '',
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
            num_permis: this.state.num_permis,
            categorie: this.state.categorie,
            delivre_le: this.state.delivre_le,
            par_prefecture: this.state.par_prefecture,
            valable_au: this.state.valable_au,
        });
        Actions.cameraa()
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
                        Conducteur
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
                        <Hoshi
                            label={'Permis de conduite N°'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.num_permis}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_permis')}
                        />
                        <Hoshi
                            label={'Catégorie'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.categorie}
                            onChangeText={(val) => this.inputValueUpdate(val, 'categorie')}
                        />
                        <Hoshi
                            label={'Délivré le'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.delivre_le}
                            onChangeText={(val) => this.inputValueUpdate(val, 'delivre_le')}
                        />
                        <Hoshi
                            label={'par la préfecture'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.par_prefecture}
                            onChangeText={(val) => this.inputValueUpdate(val, 'par_prefecture')}
                        />
                        <Hoshi
                            label={'Valable jusqu\'au'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#e2ffde'}
                            value={this.state.valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'valable_au')}
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