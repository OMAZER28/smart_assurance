import React from 'react';
import { StatusBar } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';

export default class Bienvenue extends React.Component {
    render() {
        return (
            <Onboarding
                showDone={false}
                onSkip={() => this.props.navigation.navigate('Page1')}
                pages={[
                    {
                        title: 'Hi!',
                        subtitle: 'Bienvenue a votre Smart Assurance app !',
                        backgroundColor: '#003c8f',
                        image: (
                            <Icon
                                name="hand-peace-o"
                                type="font-awesome"
                                size={100}
                                color="white"
                            />
                        ),
                    },
                    {
                        title: 'Remplir et Envoyer votre constat facilement',
                        subtitle: "Constat à l'amiable à la portée de tous",
                        backgroundColor: '#5e92f3',
                        image: (
                            <Icon
                                name="paper-plane-o"
                                type="font-awesome"
                                size={100}
                                color="white"
                            />
                        ),
                    },
                    {
                        title: 'Recevez des notification',
                        subtitle: "Nous vous permettre de suivre votre constat facilement à l'aide des notifications",
                        backgroundColor: '#1565c0',
                        image: (
                            <Icon
                                name="bell-o"
                                type="font-awesome"
                                size={100}
                                color="white"
                            />
                        ),
                    },
                    {
                        title: "Qu'attendez-vous !",
                        subtitle: (
                            <Button
                                title="Commencer"
                                containerViewStyle={{ marginTop: 20 }}
                                backgroundColor="white"
                                borderRadius={5}
                                textStyle={{ color: '#003c8f' }}
                                onPress={() => {
                                    this.props.navigation.navigate('croquis')
                                    StatusBar.setBarStyle('default')
                                }}
                            />
                        ),
                        backgroundColor: '#003c8f',
                        image: (
                            <Icon
                                name="rocket"
                                type="font-awesome"
                                size={100}
                                color="white"
                            />
                        ),
                    },
                ]}
            />
        )
    }
}