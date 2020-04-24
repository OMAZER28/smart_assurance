import * as React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Report from './Routes/Report/Report';
import Cases from './Routes/Report/Cases';
import Settings from './Routes/Settings/Settings';
import Follow from './Routes/Follow/Follow';
import Help from './Routes/Help/Help';
import Trash from './Routes/Trash/Trash';
import Acceuil from './Components/Acceuil';
import Choix from './Components/Choix';
import Presentation from './Components/Presentation';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import cameraA from './Components/cameraA';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import cameraB from './Components/cameraB';
import Page7 from './Components/Page7';
import Page8 from './Components/Page8';
import Page9 from './Components/Page9';
import Page10 from './Components/Page10';
import Page11 from './Components/Page11';
import Page12 from './Components/Page12';
import signatureA from './Components/signatureA';
import signatureB from './Components/signatureB';
import croquis from './Components/croquis';
import { decode, encode } from 'base-64'
import { Alert } from "react-native";
import { YellowBox } from 'react-native';

    

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='acceuil' component={Acceuil} hideNavBar={true} initial={true}></Scene>

          <Scene key='presentation' component={Presentation} hideNavBar={true}></Scene>

          <Scene key='report' component={Report} hideNavBar={true}></Scene>


          <Scene key='cases' component={Cases} navigationBarStyle={{ backgroundColor: 'green' }} onRight={() => console.log("dgs")} rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null} title='modes de saisie'></Scene>

          <Scene key='settings' component={Settings} hideNavBar={true}></Scene>

          <Scene key='help' component={Help} hideNavBar={true}></Scene>

          <Scene key='trash' component={Trash} hideNavBar={true}></Scene>

          <Scene key='follow' component={Follow} hideNavBar={true}></Scene>

          <Scene key='choix' component={Choix} navigationBarStyle={{ backgroundColor: '#3c7bf0', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Choix' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page1' component={Page1} navigationBarStyle={{ backgroundColor: '#19AC52', marginTop: -10 }}
            onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
              [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null}
            title='Véhicule A' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page2' component={Page2} navigationBarStyle={{ backgroundColor: '#19AC52', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null}
            title='Assuré A' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page3' component={Page3} navigationBarStyle={{ backgroundColor: '#19AC52', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null}
            title='Conducteur A' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='cameraa' component={cameraA} navigationBarStyle={{ backgroundColor: '#19AC52', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null}
            title='Camera A' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page4' component={Page4} navigationBarStyle={{ backgroundColor: '#e02500', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Véhicule B' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page5' component={Page5} navigationBarStyle={{ backgroundColor: '#e02500', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Assuré B' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page6' component={Page6} navigationBarStyle={{ backgroundColor: '#e02500', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Conducteur B' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

                  <Scene key='camerab' component={cameraB} navigationBarStyle={{ backgroundColor: '#e02500', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Camera B' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>



          <Scene key='page7' component={Page7} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 1' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page8' component={Page8} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 2' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page9' component={Page9} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 3' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page10' component={Page10} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 4' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page11' component={Page11} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 5' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

          <Scene key='page12' component={Page12} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='étape 6' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>


          <Scene key='signatureA' component={signatureA} navigationBarStyle={{ backgroundColor: '#19AC52', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/grayhelp.png')} drawer={true} panHandlers={null}
            title='Signature A' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>


          <Scene key='signatureB' component={signatureB} navigationBarStyle={{ backgroundColor: '#e02500', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Signature B' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>


          <Scene key='croquis' component={croquis} navigationBarStyle={{ backgroundColor: '#5c6778', marginTop: -10 }} onRight={() => Alert.alert("Véhicule:", "Vous devez choisir la marque de votre voiture parmis la liste proposée.",
            [{ text: "OK" }], { cancelable: false })}
            rightButtonImage={require('./icones/bluehelp.png')} drawer={true} panHandlers={null}
            title='Croquis' titleStyle={{ color: "white", fontSize: 25, fontWeight: "bold" }}></Scene>

        </Stack>
      </Router>
    )
  }
}