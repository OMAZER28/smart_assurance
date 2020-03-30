import React from 'react'
import { Button, View, Text, ScrollView } from 'react-native'
import { Hoshi } from 'react-native-textinput-effects';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../database/firebaseDb';
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
export default class Page6 extends React.Component {
    constructor() {
        super();
        this.dbRef0 = firebase.firestore().collection('vehiculeA');
        this.dbRef = firebase.firestore().collection('conducteurB');
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
        this.props.navigation.navigate('cameraB')
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
                    <Text style={{ color: '#454545', fontSize: 25, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 40 }}>
                        Conducteur
                    </Text>
                    <ScrollView>
                        <Hoshi
                            label={'Nom (en majuscule)'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.nom}
                            autoCapitalize="characters"
                            onChangeText={(val) => this.inputValueUpdate(val, 'nom')}
                        />
                        <Hoshi
                            label={'Prénom'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.prenom}
                            onChangeText={(val) => this.inputValueUpdate(val, 'prenom')}
                        />
                        <Hoshi
                            label={'Adresse'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.adresse}
                            onChangeText={(val) => this.inputValueUpdate(val, 'adresse')}
                        />
                        <Hoshi
                            label={'Permis de conduite N°'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.num_permis}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_permis')}
                        />
                        <Hoshi
                            label={'Catégorie'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.categorie}
                            onChangeText={(val) => this.inputValueUpdate(val, 'categorie')}
                        />
                        <Hoshi
                            label={'Délivré le'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.delivre_le}
                            onChangeText={(val) => this.inputValueUpdate(val, 'delivre_le')}
                        />
                        <Hoshi
                            label={'par la préfecture'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.par_prefecture}
                            onChangeText={(val) => this.inputValueUpdate(val, 'par_prefecture')}
                        />
                        <Hoshi
                            label={'Valable jusqu\'au'}
                            borderColor={'red'}
                            borderHeight={3}
                            inputPadding={16}
                            backgroundColor={'#ffeeeb'}
                            value={this.state.valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'valable_au')}
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