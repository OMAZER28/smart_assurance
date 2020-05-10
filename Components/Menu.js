import React from 'react'
import { Actions } from 'react-native-router-flux'
import { TouchableOpacity, StyleSheet, View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'

export default Menu = (props) => {
    const menuStyle = props.menustyle
    const route1Style = props.route1Style
    const route2Style = props.route2Style
    const route3Style = props.route3Style
    const route4Style = props.route4Style
    const route1TitleStyle = props.route1TitleStyle
    const route2TitleStyle = props.route2TitleStyle
    const route3TitleStyle = props.route3TitleStyle
    const route4TitleStyle = props.route4TitleStyle
    var reportIcon = props.route1Active ? require('../icones/bluereport.png') : require('../icones/grayreport.png');
    var followIcon = props.route2Active ? require('../icones/bluefollow.png') : require('../icones/grayfollow.png');
    var trashIcon = props.route3Active ? require('../icones/bluetrash.png') : require('../icones/graytrash.png');
    var helpIcon = props.route4Active ? require('../icones/bluehelp.png') : require('../icones/grayhelp.png');

    const goToSettings = () => {
        Actions.settings()
    }
    const goToTrash = () => {
        Actions.trash()
    }
    const goToReport = () => {
        Actions.report()
    }
    const goToFollow = () => {
        Actions.follow()
    }
    const goToHelp = () => {
        Actions.help()
    }
    return (
        /*===================================== Start Menu =====================================*/
        <View style={menuStyle}>
            <ScrollView>
                {/*=============================== Start Header Menu ===============================*/}
                <View style={styles.header}>
                    <Text style={styles.title}>Smart Assurance</Text>
                    <TouchableWithoutFeedback onPress={goToSettings}>
                        <Image source={require('../icones/settings.png')} style={styles.settings}></Image>
                    </TouchableWithoutFeedback>
                </View>
                {/*=============================== End Header Menu ===============================*/}

                {/*=============================== Start Routes Menu ===============================*/}
                <View style={styles.routes}>
                    <TouchableOpacity onPress={goToReport}>
                        <View style={route1Style}>
                            <Image source={reportIcon} style={styles.routeIcon}></Image>
                            <Text style={route1TitleStyle}>Constat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToFollow}>
                        <View style={route2Style}>
                            <Image source={followIcon} style={styles.routeIcon}></Image>
                            <Text style={route2TitleStyle}>Suivre</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToTrash}>
                        <View style={route3Style}>
                            <Image source={trashIcon} style={styles.routeIcon}></Image>
                            <Text style={route3TitleStyle}>Corbeille</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToHelp}>
                        <View style={route4Style}>
                            <Image source={helpIcon} style={styles.routeIcon}></Image>
                            <Text style={route4TitleStyle}>Aide</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/*=============================== End Routes Menu ===============================*/}
            </ScrollView>
        </View>
        /*===================================== End Menu =====================================*/
    )
}

const styles = StyleSheet.create({
    //Start Menu Header Style
    header: {
        height:150,
        marginBottom:8,
        backgroundColor: '#0054AF',
    },
    //End Menu Header Style



    //Start Menu Header Title Style
    title: {
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        bottom:'8%',
        left: '5%'
    },
    //End Menu Header Title Style



    //Start Menu Header Settings Style
    settings: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: '5%',
        top: '20%',
    },
    //End Menu Header Settings Style



    //Start Menu Routes Style
    routes: {
        height:165,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#CCC'
    },
    //End Menu Header Style



    //Start Menu Route Icon Style
    routeIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: '5%',
        top: '20%',
    },
    //End Menu Route Icon Style
})