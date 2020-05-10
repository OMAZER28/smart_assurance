import React, { useState } from 'react'
import { Image, View, Text } from 'react-native'
import Modal, { ModalContent, SlideAnimation, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { Actions } from 'react-native-router-flux'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

export default DropDownMenu = (props) => {
    const [visibleForHelp, setVisibleForHelp] = useState(false)
    const [visibleForPartCancel, setVisibleForPartCancel] = useState(false)
    const [visibleForReportCancel, setVisibleForReportCancel] = useState(false)
    if(props.component === 'cases') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur modes de saisie" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="OK"
                            onPress={() => setVisibleForHelp(false)}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>si chacun de vous a un téléphone vous pouvez choisir le premier cas, sinon vous devez choisir le deuxième cas</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger style={{ width: 50, height: 50, marginTop: 20 }}>
                        <Image source={require('../icones/dropdownMenu.png')} style={{ height: 25, width: 20, marginRight: 10 }}></Image>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={{ marginTop: 50, borderRadius: 10 }}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 32, height: 32 }}
                                    source={require('../icones/bhelp.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Help</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
    else if(props.component === 'case2') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur le choix des parties" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="OK"
                            onPress={() => setVisibleForHelp(false)}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>ici vous avez le choix sur la partie que vous voulez commencer avec, l'orsque vous terminer cette partie vous choisisez une autre partie j'usquà vous satisfait tous les parties, enfin votre constat va être enregistrer dans la page constat</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForReportCancel}
                    modalTitle={<ModalTitle title="Annulation du constat" />}
                    onTouchOutside={() => {
                        setVisibleForReportCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForReportCancel(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="NON"
                            onPress={() => setVisibleForReportCancel(false)}
                          />
                          <ModalButton
                            text="OUI"
                            onPress={() => {Actions.report();setVisibleForReportCancel(false)}}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>Voulez-vous vraiment annuler le constat ?</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger style={{ width: 50, height: 50, marginTop: 20 }}>
                        <Image source={require('../icones/dropdownMenu.png')} style={{ height: 25, width: 20, marginRight: 10 }}></Image>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={{ marginTop: 50, borderRadius: 10, width:250 }}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 32, height: 32 }}
                                    source={require('../icones/bhelp.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Help</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForReportCancel(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 35, height: 35 }}
                                    source={require('../icones/reportCancel.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Annuler le constat</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
    else if(props.component === 'part') {
        return (
            <View>
                <Modal
                    visible={visibleForHelp}
                    modalTitle={<ModalTitle title="Aide sur le remplissage" />}
                    onTouchOutside={() => {
                        setVisibleForHelp(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForHelp(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="OK"
                            onPress={() => setVisibleForHelp(false)}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>{props.help}</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForPartCancel}
                    modalTitle={<ModalTitle title="Annulation de la partie" />}
                    onTouchOutside={() => {
                        setVisibleForPartCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForPartCancel(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="NON"
                            onPress={() => setVisibleForPartCancel(false)}
                          />
                          <ModalButton
                            text="OUI"
                            onPress={() => {Actions.case2();setVisibleForPartCancel(false)}}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>tous ce que vous avez saisie va être supprimer,
                                Voulez-vous vraiment annuler la partie?
                            </Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Modal
                    visible={visibleForReportCancel}
                    modalTitle={<ModalTitle title="Annulation du constat" />}
                    onTouchOutside={() => {
                        setVisibleForReportCancel(false);
                    }}
                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                      })}
                      swipeDirection={['up', 'down','left','right']} // can be string or an array
                      swipeThreshold={100} // default 100
                      onSwipeOut={(event) => {
                        setVisibleForReportCancel(false)
                      }}
                      footer={
                        <ModalFooter>
                          <ModalButton
                            text="NON"
                            onPress={() => setVisibleForReportCancel(false)}
                          />
                          <ModalButton
                            text="OUI"
                            onPress={() => {Actions.report();setVisibleForReportCancel(false)}}
                          />
                        </ModalFooter>
                      }
                >
                    <ModalContent>
                        <View style={{ width: 300, height: 100, backgroundColor: 'white' }}>
                            <Text>Voulez-vous vraiment annuler le constat ?</Text>
                        </View>
                    </ModalContent>
                </Modal>
                <Menu>
                    <MenuTrigger style={{ width: 50, height: 50, marginTop: 20 }}>
                        <Image source={require('../icones/dropdownMenu.png')} style={{ height: 25, width: 20, marginRight: 10 }}></Image>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={{ marginTop: 50, borderRadius: 10, width:250}}>
                        <MenuOption onSelect={() => setVisibleForHelp(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 32, height: 32 }}
                                    source={require('../icones/bhelp.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Help</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForPartCancel(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 30, height: 30 }}
                                    source={require('../icones/cancel.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Annuler la partie</Text>
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => setVisibleForReportCancel(true)} value={2}>
                            <View style={{ flexDirection: 'row', height: 30 }}>
                                <Image style={{ width: 35, height: 35 }}
                                    source={require('../icones/reportCancel.png')} />
                                <Text style={{ color: '#555', fontSize: 20, marginLeft: 5, marginTop: 1 }}> Annuler le constat</Text>
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
        )
    }
}