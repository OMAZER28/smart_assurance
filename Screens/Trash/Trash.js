//Import used functions from librairies
import * as React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, View } from 'native-base';
//Import styles
import { styles } from './styles';
//Import icones
import MenuIcon from 'react-native-vector-icons/Ionicons';
import FileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

import firebase from '../../database/firebaseDb'
import { ListItem } from 'react-native-elements'
import Loader from '../../Components/Loader'

import normalize from 'react-native-normalize';
//Home: the main component
export default class Trash extends React.Component {
    constructor(props) {
        super(props);
        this.dbRef = firebase.firestore().collection('constat');
        this.state = {
            reportArr: [],
            isLoading: false,
        }
    }


    //Redirection functions
    goToCases() {
        Actions.cases();
    }


    getReports = () => {
        const arr = [];
        this.dbRef.where("uid", "==", firebase.auth().currentUser.uid).where("isDeleted", "==", true).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (res) {
                    arr.push(res.data());
                });
                this.setState({
                    reportArr: arr,
                });
            });
    }

    unDelReport = (uid, date) => {
        this.setState({
            isLoading: true,
        });
        const id = uid + "_" + date;
        this.dbRef.doc(id).update(
            {
                isDeleted: false
            }
        )

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.getReports();
        }, 1500);

    }
    componentDidMount() {
        this.getReports();
    }
    

    //Home: view (interface)
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <MenuIcon name='md-menu' color='white' size={25} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerText}>Corbeille</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <Loader
                        loading={this.state.isLoading} />
                    {
                        this.state.reportArr.length == 0 && (
                            <View style={styles.fileIcon}>
                                <View style={styles.iconContainer}>
                                    <FileIcon name='file-cancel-outline' color='rgba(180, 20, 20,0.5)' size={normalize(150,"width")} />
                                </View>
                                <View>
                                    <Text style={styles.text1}>Vous trouverez ici vos constats</Text>
                                    <Text style={styles.text2}> supprimés</Text>
                                </View>
                            </View>)
                    }
                    {
                        this.state.reportArr.length != 0 && (
                            this.state.reportArr.map((item, i) => {
                                return (
                                    <ListItem
                                        key={i}
                                        leftElement={<Image source={require('../../images/paper.png')} style={{ height: normalize(55,"width"), width: normalize(55,"width") }}></Image>}
                                        rightElement={
                                            <TouchableOpacity onPress={() => this.unDelReport(item.uid, item.date)}>
                                                <Image source={require('../../images/cancel.png')} style={{ height: normalize(25,"width"), width: normalize(25,"width") }}></Image>
                                            </TouchableOpacity>
                                        }


                                        bottomDivider
                                        title={` Date :${item.date} `}
                                        

                                    />
                                );
                            })
                        )
                    }
                </View>
            </Container>
        );
    }
}