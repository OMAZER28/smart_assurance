import React from 'react';
import { StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { Image,ImageBackground,Button } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Bienvenue extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/bg3.png')} style={{flex: 1,resizeMode: "cover",justifyContent: "center"}}>
        <Onboarding
            showDone={false}
            onSkip={() => Actions.report()}
            pages={[
                {
                    title: 'SMART ASSURANCE',
                    subtitle: "Une application performante, élégante et simple\n Conçue pour les assurés Morocains",
                    image: (<Image
                        source={require('../assets/icon.png')} style={{ height: 250, width: 250 }} />
                    ),
                },
                {
                    title: "Remplir un constat est plus simple maintenant",
                    subtitle: "-Interface érgonomique\n-Remplissage en quelques étapes simples\n-Aide à chaque étape",
                    image: (<Image
                        source={require('../assets/img2.png')} style={{
                            height: 420,
                            width: 300,

                        }} />
                    ),
                },
                {
                    title: 'Remplissage du constat sur deux smartphones',
                    subtitle: "L'application offre aux conducteurs la possibilité de remplir leur constats sur deux smartphones sans avoir besoin d'appeler un constateur",
                    image: (<Image
                        source={require('../assets/img3.png')} style={{
                            height: 300,
                            width: 300,

                        }} />
                    ),
                },
                {
                    title: 'Remplissage du constat avec un seul smartphone',
                    subtitle: "L'appliction offre au constateur la possibilité de remplir le constat sur son smartphone directement",
                    image: (<Image
                        source={require('../assets/img4.png')} style={{
                            height: 310,
                            width: 300,

                        }} />
                    ),
                },
                {
                    title: "Qu'attendez-vous !",
                    subtitle: (
                        <Button
                            title="Commencer"
                            onPress={() =>Actions.report()}
                            color="rgba(36, 199, 79, 0.5)"
                        />
                    ),
                    image: (
                        <Icon
                            name="rocket"
                            type="font-awesome"
                            size={200}
                            color="white"
                        />
                    ),
                },
            ]}
        />
            </ImageBackground >
        )
    }
}
