import React, { useState } from 'react'
import { StyleSheet, View, Image, LayoutAnimation, NativeModules } from 'react-native'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default Trash = () => {
    const [menuStyle, setMenuStyle] = useState(styles.closedMenu)
    const [route1Style, setRoute1Style] = useState(styles.routeOnCloseMenu)
    const [route2Style, setRoute2Style] = useState(styles.routeOnCloseMenu)
    const [route3Style, setRoute3Style] = useState(styles.routeOnCloseMenu)
    const [route4Style, setRoute4Style] = useState(styles.routeOnCloseMenu)
    const [route1TitleStyle, setRoute1TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route2TitleStyle, setRoute2TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route3TitleStyle, setRoute3TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route4TitleStyle, setRoute4TitleStyle] = useState(styles.routeTitleOnCloseMenu)
    const [route1Active, setRoute1Active] = useState(false)
    const [route2Active, setRoute2Active] = useState(false)
    const [route3Active, setRoute3Active] = useState(false)
    const [route4Active, setRoute4Active] = useState(false)
    openTheMenu = () => {
        setMenuStyle(styles.openedMenu)
        setRoute3Style(styles.routeOnOpenMenu)
        setRoute3TitleStyle(styles.routeTitleOnOpenMenu)
        setRoute3Active(true)
    }
    closeTheMenu = () => {
        setMenuStyle(styles.closedMenu)
    }
    return (
        /*=============================== Start Trash ===============================*/
        <View style={styles.container}>
            {/*========================= Start Trash Header ============================*/}
            <Header title={'Corbeille'}/>
            {/*========================= End Trash Header ============================*/}



            {/*========================= Start Trash MainContent ============================*/}
            <View style={styles.mainContent} onTouchStart={() => {
                LayoutAnimation.easeInEaseOut()
                closeTheMenu()
            }}>
                <Image source={require('../../icones/paper.png')}></Image>
            </View>
            {/*========================= End Trash MainContent ============================*/}



            {/*========================= Start Trash Menu ============================*/}
            <Menu menustyle={menuStyle} route1Style={route1Style} route2Style={route2Style} route3Style={route3Style} route4Style={route4Style} route1TitleStyle={route1TitleStyle} route2TitleStyle={route2TitleStyle} route3TitleStyle={route3TitleStyle} route4TitleStyle={route4TitleStyle} route1Active={route1Active} route2Active={route2Active} route3Active={route3Active} route4Active={route4Active}/>
            {/*========================= End Trash Menu ============================*/}




        </View>
        /*=============================== End Trash ===============================*/
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
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '75%',
        left: '-75%',
        backgroundColor: 'white',
        elevation: 100
    },
    openedMenu: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        left: '0%',
        width: '85%',
        backgroundColor: 'white',
        elevation: 100
    },
    //End Menu Style



    //Start Menu Route Style
    routeOnOpenMenu: {
        height: '42%',
        width: '100%',
        padding: '5%',
        backgroundColor: 'rgba(0,100,220,0.2)'
    },
    routeOnCloseMenu: {
        height: '42%',
        width: '100%',
        padding: '5%',
    },
    //End Menu Route Style



    //Start Menu Route Title Style
    routeTitleOnOpenMenu: {
        left: '12%',
        bottom: '10%',
        fontSize: 14,
        color: '#0054AF'
    },
    routeTitleOnCloseMenu: {
        left: '12%',
        bottom: '10%',
        color: '#444',
        fontSize: 14
    },
    //End Menu Route Title Style
})
