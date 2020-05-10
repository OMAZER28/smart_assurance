import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { MenuProvider } from 'react-native-popup-menu'
import Report from './Routes/Report/Report'
import Cases from './Routes/Report/Cases'
import Case2 from './Routes/Report/Case2'
import Case2Choice1Step1 from './Routes/Report/Case2Choice1Step1'
import Case2Choice1Step2 from './Routes/Report/Case2Choice1Step2'
import Case2Choice1Step3 from './Routes/Report/Case2Choice1Step3'
import Case2Choice1Step4 from './Routes/Report/Case2Choice1Step4'
import Case2Choice1Step5 from './Routes/Report/Case2Choice1Step5'
import Case2Choice2Step1 from './Routes/Report/Case2Choice2Step1'
import Case2Choice2Step2 from './Routes/Report/Case2Choice2Step2'
import Case2Choice2Step3 from './Routes/Report/Case2Choice2Step3'
import Case2Choice2Step4 from './Routes/Report/Case2Choice2Step4'
import Case2Choice2Step5 from './Routes/Report/Case2Choice2Step5'
import Case2Choice3Step1 from './Routes/Report/Case2Choice3Step1'
import Case2Choice3Step2 from './Routes/Report/Case2Choice3Step2'
import Case2Choice3Step3 from './Routes/Report/Case2Choice3Step3'
import Case2Choice3Step4 from './Routes/Report/Case2Choice3Step4'
import Case2Choice3Step5 from './Routes/Report/Case2Choice3Step5'
import Case2Choice3Step6 from './Routes/Report/Case2Choice3Step6'
import Case2Choice4 from './Routes/Report/Case2Choice4'
import Settings from './Routes/Settings/Settings'
import Follow from './Routes/Follow/Follow'
import Help from './Routes/Help/Help'
import Trash from './Routes/Trash/Trash'
import Accueil from './Components/Acceuil'
import Presentation from './Components/Presentation'
import DropDownMenu from './Components/DropDownMenu'
import { decode, encode } from 'base-64'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
        <Router>
          <Stack key='root'>
            <Scene key='accueil' component={Accueil} hideNavBar={true} initial={true}></Scene>
            <Scene key='presentation' component={Presentation} hideNavBar={true}></Scene>
            <Scene key='report' component={Report} hideNavBar={true}></Scene>
            <Scene key='cases' component={Cases} drawer={true} title='Saisie du constat' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} component={'cases'}/>}></Scene>
            <Scene key='case2' component={Case2} drawer={true} title='Choix de partie' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} component={'case2'}/>}></Scene>
            <Scene key='case2Choice1Step1' component={Case2Choice1Step1} drawer={true} title='Étape 1' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier véhicule, cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice1Step2' component={Case2Choice1Step2} drawer={true} title='Étape 2' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier assuré , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice1Step3' component={Case2Choice1Step3} drawer={true} title='Étape 3' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du premier conducteur , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice1Step4' component={Case2Choice1Step4} drawer={true} title='Étape 4' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de prendre une image du premier véhicule, et si vous terminez cliquez suivant pour enregistrer l\'image'} component={'part'}/>}></Scene>
            <Scene key='case2Choice1Step5' component={Case2Choice1Step5} drawer={true} title='Étape 5' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape le premier conducteur est sencé de signé, et si vous terminez cliquez suivant pour enregistrer la signature'} component={'part'}/>}></Scene>
            <Scene key='case2Choice2Step1' component={Case2Choice2Step1} drawer={true} title='Étape 1' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième véhicule, cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice2Step2' component={Case2Choice2Step2} drawer={true} title='Étape 2' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième assuré , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice2Step3' component={Case2Choice2Step3} drawer={true} title='Étape 3' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de remplir toutes les informations à propos du deuxième conducteur , cliquer sur le champs pour le remplir, et si vous terminez cliquez suivant pour enregistrer les données'} component={'part'}/>}></Scene>
            <Scene key='case2Choice2Step4' component={Case2Choice2Step4} drawer={true} title='Étape 4' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape vous êtes sencé de prendre une image du deuxième véhicule, et si vous terminez cliquez suivant pour enregistrer l\'image'} component={'part'}/>}></Scene>
            <Scene key='case2Choice2Step5' component={Case2Choice2Step5} drawer={true} title='Étape 5' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape le deuxième conducteur est sencé de signé, et si vous terminez cliquez suivant pour enregistrer la signature'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step1' component={Case2Choice3Step1} drawer={true} title='Étape 1' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step2' component={Case2Choice3Step2} drawer={true} title='Étape 2' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step3' component={Case2Choice3Step3} drawer={true} title='Étape 3' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step4' component={Case2Choice3Step4} drawer={true} title='Étape 4' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step5' component={Case2Choice3Step5} drawer={true} title='Étape 5' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice3Step6' component={Case2Choice3Step6} drawer={true} title='Étape 6' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape chaque conducteur doit cocher la case utile à propos de l\'accident, cliquer suivant si vous terminer l\'étape'} component={'part'}/>}></Scene>
            <Scene key='case2Choice4' component={Case2Choice4} drawer={true} title='Croquis' backButtonImage={require('./icones/back.png')} titleStyle={{ color: '#0432A8' }} navigationBarStyle={{ backgroundColor: 'white' }} renderRightButton={(props) => <DropDownMenu {...props} help={'Dans cette étape les deux conducteurs doivent s\'entendre à un dessin expliquant les conditions d\'accident'} component={'part'}/>}></Scene>

            <Scene key='settings' component={Settings} hideNavBar={true}></Scene>

            <Scene key='help' component={Help} hideNavBar={true}></Scene>

            <Scene key='trash' component={Trash} hideNavBar={true}></Scene>

            <Scene key='follow' component={Follow} hideNavBar={true}></Scene>
          </Stack>
        </Router>
      </MenuProvider>
    )
  }
}