import React, { useState } from 'react'
import { StyleSheet, View, Image, LayoutAnimation, NativeModules } from 'react-native'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default Settings = () => {
    const [menuStyle, setMenuStyle] = useState(styles.closedMenu)
    const [route1Style, setRoute1Style] = useState(styles.routeOnCloseMenu)
    const [route2Style, setRoute2Style] = useState(styles.routeOnCloseMenu)
    const [route3Style, setRoute3Style] = useState(styles.routeOnCloseMenu)
    const [route4Style, setRoute4Style] = useState(styles.routeOnCloseMenu)
    const [route1TitleStyle, setRoute1TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route2TitleStyle, setRoute2TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route3TitleStyle, setRoute3TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route4TitleStyle, setRoute4TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    openTheMenu = () => {
        setMenuStyle(styles.openedMenu)
    }
    closeTheMenu = () => {
        setMenuStyle(styles.closedMenu)
    }
    return (
        /*=============================== Start Settings ===============================*/
        <View style={styles.container}>
            {/*========================= Start Settings Header ============================*/}
            <Header title={'Paramètres'}/>
            {/*========================= End Settings Header ============================*/}



            {/*========================= Start Settings MainContent ============================*/}
            <View style={styles.mainContent} onTouchStart={() => {
                LayoutAnimation.easeInEaseOut()
                closeTheMenu()
            }}>
                <Image source={require('../../icones/paper.png')}></Image>
            </View>
            {/*========================= End Settings MainContent ============================*/}



            {/*========================= Start Settings Menu ============================*/}
            <Menu menustyle={menuStyle} route1Style={route1Style} route2Style={route2Style} route3Style={route3Style} route4Style={route4Style} route1TitleStyle={route1TitleStyle} route2TitleStyle={route2TitleStyle} route3TitleStyle={route3TitleStyle} route4TitleStyle={route4TitleStyle}/>
            {/*========================= End Settings Menu ============================*/}



            {/*========================= Start Settings Footer ============================*/}
            <Footer />
            {/*========================= End Settings Footer ============================*/}
        </View>
        /*=============================== End Settings ===============================*/
    )
}

const styles = StyleSheet.create({
    //Start Container Style
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    //End Container Style



    //Start Main Content Style
    mainContent: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        position: 'absolute',
        height: '80%',
        width: '100%',
        top: '12%'
      },
    //End Main Content Style



    //Start Menu Style
    closedMenu: {
        position: 'absolute',
        height: '100%',
        width: '70%',
        left: '-70%',
        backgroundColor: 'white',
        elevation: 100
    },
    openedMenu: {
        position: 'absolute',
        height: '100%',
        left: '0%',
        width: '70%',
        backgroundColor: 'white',
        elevation: 100
    },
    //End Menu Style



    //Start Menu Route Style
    routeOnOpenMenu: {
        height:40,
        width: '100%',
        backgroundColor: 'rgba(0,100,220,0.2)'
    },
    routeOnCloseMenu: {
        height:40,
        width: '100%',
    },
    //End Menu Route Style



    //Start Menu Route Title Style
    routeTitleOnOpenMenu: {
        position:"absolute",
        left: '20%',
        bottom: '30%',
        fontSize: 14,
        color: '#0054AF'
    },
    routeTitleOnCloseMenu: {
        position:"absolute",
        left: '20%',
        bottom: '30%',
        color: '#444',
        fontSize: 14
    },
    //End Menu Route Title Style
})
