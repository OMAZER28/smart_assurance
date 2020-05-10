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
    stepStrokeCurrentColor: 'rgba(255,0,0,0.8)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'rgba(255,0,0,0.8)',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'rgba(255,0,0,0.8)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgba(255,0,0,0.8)',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'rgba(255,0,0,0.8)',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
}
export default class Case2Choice2Step1 extends React.Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('vehiculeB');
        this.state = {
            currentPosition: 0,
            stepCount: 3,
            allant_vers: '',
            marque: '',
            num_immatriculation: '',
            type: '',
            venant_de: '',
            bgColor: 'rgb(255, 242, 242)',
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
    goToCase2Choice2Step2 = () => {
        Actions.case2Choice2Step2()
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
        this.goToCase2Choice2Step2()
    }
    render() {
        console.log(this.state.id)
        return (
            <View style={{ backgroundColor: 'rgb(255, 242, 242)', flex: 1 }}>
                <View style={{ backgroundColor: 'rgba(255,0,0,0)', height: 40, marginTop: 20 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={this.state.stepCount}
                    />
                </View>
                <View style={styles.vha}>
                    <View style={styles.box}>
                        <Image source={require('../../icones/b.png')} style={styles.boxImage}></Image>
                        <Text style={styles.boxText}>B</Text>
                    </View>
                    <Text style={styles.stepTitle}>Véhicule</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <SelectPicker
                            onValueChange={(value) => {
                                this.setState({
                                    marque: value,
                                    bgColor:'red'
                                })
                            }}
                            selected={this.state.marque}
                            placeholder="Marque"
                            placeholderStyle={{ color: 'rgba(255,0,0,0.8)', fontWeight: 'bold', fontSize: 18 }}
                            style={{
                                backgroundColor: 'rgba(255,0,0,0)', marginLeft: 15, height: 50, paddingLeft: 5, marginRight: 15,
                                fontSize: 18, fontWeight: 'bold', borderRadius: 5
                            }}
                            onSelectedStyle={{ color: '#555', fontWeight: '200', fontSize: 18 }}
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
                        <Text style={{ height: 0, borderBottomColor: this.state.bgColor, borderBottomWidth: 4, marginTop: 5, width: 400, marginLeft: 15 }} ></Text>
                        <Sae
                            label={'Type'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{marginLeft:20, marginRight:20}}
                            inputPadding={16}
                            inputStyle={{color:'#555'}}
                            labelHeight={24}
                            labelStyle={{color:'rgba(255,0,0,0.8)'}}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.type}
                            onChangeText={(val) => this.inputValueUpdate(val, 'type')}
                        />
                        <Sae
                            label={'N° d\'immatriculation'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{marginLeft:20, marginRight:20}}
                            inputPadding={16}
                            inputStyle={{color:'#555'}}
                            labelHeight={24}
                            labelStyle={{color:'rgba(255,0,0,0.8)'}}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.num_immatriculation}
                            onChangeText={(val) => this.inputValueUpdate(val, 'num_immatriculation')}
                        />      
                        <Sae
                            label={'Venant de'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{marginLeft:20, marginRight:20}}
                            inputPadding={16}
                            inputStyle={{color:'#555'}}
                            labelHeight={24}
                            labelStyle={{color:'rgba(255,0,0,0.8)'}}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.venant_de}
                            onChangeText={(val) => this.inputValueUpdate(val, 'venant_de')}    
                        />
                        <Sae
                            label={'Allant vers'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'red'}
                            style={{marginLeft:20, marginRight:20}}
                            inputPadding={16}
                            inputStyle={{color:'#555'}}
                            labelHeight={24}
                            labelStyle={{color:'rgba(255,0,0,0.8)'}}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            value={this.state.allant_vers}
                            onChangeText={(val) => this.inputValueUpdate(val, 'allant_vers')}                            
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
        color: 'red',
        position: 'absolute',
        top: '35%',
        left: '20%'
    },
    nextBox: {
        marginTop:50,
        marginBottom:50
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