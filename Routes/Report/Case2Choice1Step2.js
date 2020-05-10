import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../../database/firebaseDb';
import SelectPicker from 'react-native-form-select-picker';
import { Actions } from 'react-native-router-flux';

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'rgba(0,178,75,0.8)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'rgba(0,178,75,0.8)',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'rgba(0,178,75,0.8)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgba(0,178,75,0.8)',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'rgba(0,178,75,0.8)',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelSize: 13,
}
export default class Case2Choice1Step2 extends React.Component {
    constructor() {
        super();
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
            bgColor: 'rgb(227, 255, 241)',
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
    goToCase2Choice1Step3 = () => {
        Actions.case2Choice1Step3()
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
        this.goToCase2Choice1Step3()
    }
    render() {
        return (
            <View style={{ backgroundColor: 'rgb(227, 255, 241)', flex: 1 }}>
                <View style={{ backgroundColor: 'rgba(0,178,75,0)', height: 40, marginTop: 20 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={this.state.stepCount}
                    />
                </View>
                <View style={styles.vha}>
                    <View style={styles.box}>
                        <Image source={require('../../icones/a.png')} style={styles.boxImage}></Image>
                        <Text style={styles.boxText}>A</Text>
                    </View>
                    <Text style={styles.stepTitle}>Assuré</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <Sae
                            label={'Nom (en majuscule)'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCorrect={false}
                            value={this.state.nom}
                            autoCapitalize="characters"
                            onChangeText={(val) => this.inputValueUpdate(val, 'nom')}
                        />
                        <Sae
                            label={'Prénom'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.prenom}
                            onChangeText={(val) => this.inputValueUpdate(val, 'prenom')}
                        />
                        <Sae
                            label={'Adresse'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
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
                            placeholderStyle={{ color: 'rgba(0,178,75,0.8)', fontWeight: 'bold', fontSize: 18 }}
                            style={{
                                backgroundColor: 'rgba(0,178,75,0)', marginLeft: 15, height: 50, paddingLeft: 5, marginRight: 15,
                                fontSize: 18, fontWeight: 'bold', borderRadius: 5, marginTop:35
                            }}
                            onSelectedStyle={{ color: '#555', fontWeight: '200', fontSize: 18 }}
                        >
                            <SelectPicker.Item label="Atlanta" value="Atlanta" />
                            <SelectPicker.Item label="Axa Assurance" value="Axa Assurance" />
                            <SelectPicker.Item label="Saham Assurance" value="Saham Assurance" />
                            <SelectPicker.Item label="Wafa Assurance" value="Wafa Assurance" />
                            <SelectPicker.Item label="Sanad" value="Sanad" />
                            <SelectPicker.Item label="Allianz Assurance" value="Allianz Assurance" />
                        </SelectPicker>
                        <Text style={{ height: 0, borderBottomColor: this.state.bgColor, borderBottomWidth: 4, marginTop: 5, width: 400, marginLeft: 15 }} ></Text>
                        <Sae
                            label={'N° d\'Attestation'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.num_attestation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_attestation')}
                        />
                        <Sae
                            label={'N° de police'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.num_police}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_police')}
                        />
                        <Sae
                            label={'N° Carte verte(pour les étrangers)'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.att_valable_du}
                            onChangeText={(val) => this.inputValueUpdate(val, 'att_valable_du')}
                        />
                        <Sae
                            label={'Attestation valable du'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.att_valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'att_valable_au')}
                        />
                        <Sae
                            label={'Attestation valable au'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.num_carte_verte}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_carte_verte')}
                        />
                        <Sae
                            label={'Agence,bureau ou courtier'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'green'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            inputPadding={16}
                            inputStyle={{ color: '#555' }}
                            labelHeight={24}
                            labelStyle={{ color: 'rgba(0,178,75,0.8)' }}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.agence_bureau_courtier}
                            onChangeText={(val) => this.inputValueUpdate(val, 'agence_bureau_courtier')}
                        />
                        <TouchableWithoutFeedback onPress={() => this.storeData()}>
                            <View style={styles.nextBox}>
                                <Image source={require('../../icones/next.png')} style={styles.nextImage}></Image>
                                <Text style={styles.nextText}>SUIVANT</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vha: {
        flex: 1,
        marginBottom: 15
    },
    box: {
        position: 'absolute',
        left: '5%',
        top: '30%'
    },
    boxImage: {
        width: 50,
        height: 50
    },
    boxText: {
        position: 'absolute',
        left: '30%',
        top: '0%',
        color: 'white',
        fontSize: 25
    },
    stepTitle: {
        fontSize: 25,
        color: 'green',
        position: 'absolute',
        top: '35%',
        left: '20%'
    },
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
    }
})