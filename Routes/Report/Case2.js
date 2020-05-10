import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default Case2 = (props) => {
    const [isChoice1Disabled, setIsChoice1Disabled] = useState(props.isChoice1Disabled)
    const [isChoice2Disabled, setIsChoice2Disabled] = useState(props.isChoice2Disabled)
    const [isChoice3Disabled, setIsChoice3Disabled] = useState(props.isChoice3Disabled)
    const [isChoice4Disabled, setIsChoice4Disabled] = useState(props.isChoice4Disabled)
    const goToCase2Choice1Step1 = () => {
        Actions.case2Choice1Step1()
    }
    const goToCase2Choice2Step1 = () => {
        Actions.case2Choice2Step1()
    }
    const goToCase2Choice3Step1 = () => {
        Actions.case2Choice3Step1()
    }
    const goToCase2Choice4 = () => {
        Actions.case2Choice4()
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.question}>
                    <Text style={styles.title}>Veuillez choisir par quelle partie vous voulez commencez</Text>
                </View>
                <TouchableOpacity onPress={goToCase2Choice1Step1} style={isChoice1Disabled? styles.disabled :styles.enabled} disabled={isChoice1Disabled}>
                    <View style={styles.firstChoice}>
                        <Image style={styles.vh} source={require('../../icones/vha.png')}></Image>
                        <View style={styles.box1}>
                            <Image source={require('../../icones/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <View style={styles.description1}>
                            <Text style={styles.desc}>Cliquez sur cette véhicule si vous voulez commencez par A</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice2Step1} style={isChoice2Disabled? styles.disabled :styles.enabled} disabled={isChoice2Disabled}>
                    <View style={styles.secondChoice}>
                        <Image style={styles.vh} source={require('../../icones/vhb.png')}></Image>
                        <View style={styles.box2}>
                            <Image source={require('../../icones/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.description2}>
                            <Text style={styles.desc}>Cliquez sur cette véhicule si vous voulez commencez par B</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice3Step1} style={isChoice3Disabled? styles.disabled :styles.enabled} disabled={isChoice3Disabled}>
                    <View style={styles.thirdChoice}>
                        <View style={styles.box3}>
                            <Image source={require('../../icones/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image source={require('../../icones/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <View style={styles.description3}>
                            <Text style={styles.desc}>Cliquez ici si vous voulez entamer la partie commune entre A et B</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToCase2Choice4} style={isChoice4Disabled? styles.disabled :styles.enabled} disabled={isChoice4Disabled}>
                    <View style={styles.fourthChoice}>
                        <View style={styles.box3}>
                            <Image source={require('../../icones/b.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>B</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image source={require('../../icones/a.png')} style={styles.boxBorder}></Image>
                            <Text style={styles.boxText}>A</Text>
                        </View>
                        <Image source={require('../../icones/sketch.png')} style={styles.sketch}></Image>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    question: {
        height: 80,
        paddingLeft: 20,
        paddingTop: 10,
        backgroundColor: 'rgba(0,80,200,0.8)',
        marginTop: 35,
        elevation: 10
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    firstChoice: {
        padding: 50,
        marginTop: 40,
        elevation: 10,
        backgroundColor: 'white',
        width: 400,
        height: 250,
        marginLeft: 5,
        borderRadius: 10,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    secondChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 15,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    enabled: {
        opacity: 1,
    },
    disabled: {
        opacity: 0.3,
    },
    thirdChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 5,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    vh: {
        width: 240,
        height: 100,
        marginTop: 25
    },
    box1: {
        position: 'absolute',
        right: '20%',
        top: '5%'
    },
    box2: {
        position: 'absolute',
        right: '5%',
        top: '5%'
    },
    box3: {
        position: 'absolute',
        left: '10%',
        top: '5%'
    },
    boxBorder: {
        width: 100,
        height: 100
    },
    boxText: {
        position: 'absolute',
        right: '40%',
        top: '20%',
        color: 'white',
        fontSize: 25
    },
    description1: {
        width: 250,
        height: 60,
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(0,178,75,0.8)',
        elevation: 5
    },
    description2: {
        width: 250,
        height: 60,
        paddingLeft: 10,
        paddingTop: 5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(255,0,0,0.8)',
        elevation: 5
    },
    description3: {
        width: 180,
        height: 80,
        marginTop: 80,
        paddingLeft: 10,
        paddingTop: 15,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(100,100,0,0.8)',
        elevation: 5
    },
    desc: {
        color: 'white'
    },
    fourthChoice: {
        padding: 50,
        paddingLeft: 100,
        marginTop: 5,
        elevation: 10,
        backgroundColor: 'white',
        width: 410,
        height: 250,
        borderRadius: 10,
        marginLeft: 15,
        marginBottom: 20,
        borderColor: '#0054AF',
        borderStyle: 'solid',
        borderRadius: 10,
        borderTopWidth: 5,
        borderLeftWidth: 10,
    },
    sketch: {
        position: 'absolute',
        width: '50%',
        height: '87%',
        top: '55%',
        left: '50%'
    }
})
