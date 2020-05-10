import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, LayoutAnimation, Text, Image, NativeModules, Platform } from 'react-native'
import Modal, { ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default Header = (props) => {
    const [visibleForHelp, setVisibleForHelp] = useState(false)
    const title = props.title
    return (
        /*============================== Start Header ==============================*/
        <View style={styles.header}>
            <Modal
                visible={visibleForHelp}
                modalTitle={<ModalTitle title={props.title} />}
                onTouchOutside={() => {
                    setVisibleForHelp(false);
                }}
                modalAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                swipeDirection={['up', 'down', 'left', 'right']} // can be string or an array
                swipeThreshold={100} // default 100
                onSwipeOut={(event) => {
                    setVisibleForHelp(false)
                }}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="OK"
                            onPress={() => setVisibleForHelp(false)}
                        />
                    </ModalFooter>
                }
            >
                <ModalContent>
                    <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                        <Text>{props.help}</Text>
                    </View>
                </ModalContent>
            </Modal>
            {/*======================== Start Header Icon Menu ========================*/}
            <TouchableWithoutFeedback onPress={() => {
                LayoutAnimation.easeInEaseOut()
                openTheMenu()
            }}
            >
                <View style={styles.iconMenu}>
                    <View style={styles.shape1}></View>
                    <View style={styles.shape2}></View>
                    <View style={styles.shape3}></View>
                </View>
            </TouchableWithoutFeedback>
            {/*======================== End Header Icon Menu ========================*/}



            {/*======================== Start Header Title ========================*/}
            <Text style={styles.title}>{title}</Text>
            {/*======================== End Header Title ========================*/}



            {/*======================== Start Header Icon Help ========================*/}
            <TouchableWithoutFeedback onPress={() => setVisibleForHelp(true)}>
                <Image source={require('../icones/bluehelp.png')} style={styles.help}></Image>
            </TouchableWithoutFeedback>
            {/*======================== End  Header Icon Help ========================*/}
        </View>
        /*============================== End Header ==============================*/
    )
}

const styles = StyleSheet.create({
    //Start Header Style
    header: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        position: 'absolute',
        top: '2%',
        left: '3%',
        right: '3%',
        height: 50,
        borderRadius: 10,
        elevation: 3
    },
    //End Header Style



    //Start Header Icon Menu Style
    iconMenu: {
        position: 'absolute',
        width: '20%',
        height: '100%',
    },
    shape1: {
        position: 'absolute',
        top: '40%',
        width: '25%',
        right: '45%',
        height: '5%',
        backgroundColor: '#0054AF'
    },
    shape2: {
        position: 'absolute',
        top: '50%',
        width: '25%',
        right: '45%',
        height: '5%',
        backgroundColor: '#0054AF'
    },
    shape3: {
        position: 'absolute',
        top: '61%',
        width: '25%',
        right: '45%',
        height: '5%',
        backgroundColor: '#0054AF'
    },
    //End Header Icon Menu Style



    //Start Header Title Style
    title: {
        position: 'absolute',
        left: '20%',
        top: '28%',
        fontSize: 18,
        color: '#555'
    },
    //End Header Title Style



    //Start Header Icon Help Style
    help: {
        width: '6%',
        height: '49.5%',
        position: 'absolute',
        right: '5%',
        top: '23%',
    },
    //End Header Icon Help Style
})
