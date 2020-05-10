import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StepIndicator from 'react-native-step-indicator';
import firebase from '../../database/firebaseDb';
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
export default class Case2Choice1Step3 extends React.Component {
    constructor() {
        super();
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
    goToCase2Choice1Step4 = () => {
        Actions.case2Choice1Step4()
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
        this.goToCase2Choice1Step4()
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
                    <Text style={styles.stepTitle}>Conducteur</Text>
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
                            autoCorrect={false}
                            value={this.state.adresse}
                            onChangeText={(val) => this.inputValueUpdate(val, 'adresse')}
                        />
                        <Sae
                            label={'Permis de conduite N°'}
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
                            value={this.state.num_permis}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_permis')}
                        />
                        <Sae
                            label={'Catégorie'}
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
                            value={this.state.categorie}
                            onChangeText={(val) => this.inputValueUpdate(val, 'categorie')}
                        />
                        <Sae
                            label={'Délivré le'}
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
                            value={this.state.delivre_le}
                            onChangeText={(val) => this.inputValueUpdate(val, 'delivre_le')}
                        />
                        <Sae
                            label={'par la préfecture'}
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
                            value={this.state.par_prefecture}
                            onChangeText={(val) => this.inputValueUpdate(val, 'par_prefecture')}
                        />
                        <Sae
                            label={'Valable jusqu\'au'}
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
                            value={this.state.valable_au}
                            onChangeText={(val) => this.inputValueUpdate(val, 'valable_au')}
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