//Import used functions from librairies
import * as React from 'react';
import { Router, Scene } from 'react-native-router-flux';

//Import screens
import SignIn from '../Screens/Authentification/SignIn/SignIn';
import SignUp from '../Screens/Authentification/SignUp/SignUp';
import StartPage from '../Screens/StartPage/StartPage';
import Presentation from '../Screens/Presentation/Presentation';

import HomeNaviagtion from './HomeNavigation';



//Drawer navigation 
export default function MainNavigation() {
  return (
    <Router>
        {/*Amicable report's scenes*/}
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#00CC6A'}} headerTintColor="white">
          {/*Application start page and présentation*/}
          <Scene key='startPage' initial={true} component={StartPage} hideNavBar={true} ></Scene>
          <Scene key='presentation' component={Presentation} hideNavBar={true}></Scene>
          {/*Authentification*/}
          <Scene key='signIn' component={SignIn} hideNavBar={true}></Scene>
          <Scene key='signUp' component={SignUp} hideNavBar={true}></Scene>
          <Scene key='homeNav' component={HomeNaviagtion} hideNavBar={true}></Scene>
        </Scene>
    </Router>
  );
}