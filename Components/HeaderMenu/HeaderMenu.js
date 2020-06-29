//Import used functions from librairies
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
//Import styles
import { styles } from './styles';
//Import icones
import UserIcon from 'react-native-vector-icons/Entypo';
import ExitIcon from 'react-native-vector-icons/Entypo';
import Loader from '../../Components/Loader';
import RNRestart from 'react-native-restart';
import firebase from '../../database/firebaseDb';


//HeaderMenu: the main component
export default class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection('utilisateurs');
        this.state = {
            userName: "",
            isLoading: false,
        }
    }
    //Redirection functions

    //signIn function
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({
                isLoading: true,
            });
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                });
                RNRestart.Restart();
            }, 1500);
        }).catch(function (error) {
            console.log(error);
            alert('Une erreur de déconnexion!');
        });
    }

    getUserName() {
        var name = "";
        this.dbRef.where("uid", "==", firebase.auth().currentUser.uid).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (res) {
                    name = res.data().username;
                });
                this.setState({
                    userName: name,
                });
            });
    }

    componentDidMount() {
        this.getUserName();
    }
    render() {
        return (

            <View style={styles.header}>
                <Loader
                    loading={this.state.isLoading} />
                <View style={styles.userImage}>
                    <UserIcon name='user' color='white' size={normalize(50, "width")} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.userName}>{this.state.userName}</Text>
                    <TouchableOpacity onPress={() => this.signOut()}>
                        <View style={styles.userSignout}>
                            <ExitIcon name='log-out' color='rgb(252, 53, 53)' size={normalize(20, "width")} />
                            <Text style={styles.textSignout}>Se déconnecter </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
