import React from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'

export default Footer = (props) => {
    return (
        /*============================ Start Footer =============================*/
        <>
            {/*========================= Start Footer Helper Views ======================*/}
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
            {/*========================= End Footer Helpers Views ======================*/}



            {/*========================= Start Footer Add Button ======================*/}
            <TouchableWithoutFeedback onPress={props.goToCases}>
                <View style={styles.addButton}>
                    <Image source={require('../icones/add.png')} style={styles.addIcon}></Image>
                </View>
            </TouchableWithoutFeedback>
            {/*========================= End Footer Add Button ======================*/}
        </>
        /*============================ End Footer =============================*/
    )
}

const styles = StyleSheet.create({
    //Start Footer Helper Views Style
    view1: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        right: '0%',
        height: 48,
        borderTopWidth: 1,
        borderTopColor: '#CCC',
    },
    view2: {
        position: 'absolute',
        backgroundColor: 'white',
        bottom: '3%',
        width: '16%',
        height: 78,
        right: '10%',
        borderRadius: 110,
        borderColor: '#CCC',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    view3: {
        position: 'absolute',
        bottom: 48,
        width: '20%',
        height: 70,
        right: '8%',
        backgroundColor: 'white',
    },
    //End Footer Helper Views Style



    //Start Footer Add Button Style
    addButton: {
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 32,
        width: '13%',
        height: 55,
        right: '11.5%',
        elevation: 10,
        borderRadius: 100
    },
    //End Footer Add Button Style



    //Start Footer Add Icon Style
    addIcon: {
        position: 'absolute',
        width: '46%',
        height: '46%',
        top: '27%',
        left: '27%',
        bottom: '27%',
        right: '27%'
    },
    //End Footer Add Icon Style
})
