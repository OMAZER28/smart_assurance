import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenue from './Components/Bienvenue'
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

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Bienvenue"
            component={Bienvenue}
            options={{
              headerStyle: {
                backgroundColor: '#003c8f',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 90 }
            }}
          />
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{
              title: 'Véhicule A',
              headerStyle: {
                backgroundColor: '#19AC52',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page2"
            component={Page2}
            options={{
              title: 'Véhicule A',
              headerStyle: {
                backgroundColor: '#19AC52',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page3"
            component={Page3}
            options={{
              title: 'Véhicule A',
              headerStyle: {
                backgroundColor: '#19AC52',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="cameraA"
            component={cameraA}
            options={{
              title: 'Véhicule A',
              headerStyle: {
                backgroundColor: '#19AC52',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page4"
            component={Page4}
            options={{
              title: 'Véhicule B',
              headerStyle: {
                backgroundColor: '#e02500',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page5"
            component={Page5}
            options={{
              title: 'Véhicule B',
              headerStyle: {
                backgroundColor: '#e02500',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page6"
            component={Page6}
            options={{
              title: 'Véhicule B',
              headerStyle: {
                backgroundColor: '#e02500',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="cameraB"
            component={cameraB}
            options={{
              title: 'Véhicule B',
              headerStyle: {
                backgroundColor: '#e02500',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page7"
            component={Page7}
            options={{
              title: 'Etape 1',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page8"
            component={Page8}
            options={{
              title: 'Etape 2',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page9"
            component={Page9}
            options={{
              title: 'Etape 3',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page10"
            component={Page10}
            options={{
              title: 'Etape 4',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page11"
            component={Page11}
            options={{
              title: 'Etape 5',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="Page12"
            component={Page12}
            options={{
              title: 'Etape 6',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
                    <Stack.Screen
            name="croquis"
            component={croquis}
            options={{
              title: 'Croquis',
              headerStyle: {
                backgroundColor: '#5c6778',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="signatureA"
            component={signatureA}
            options={{
              title: 'Signature',
              headerStyle: {
                backgroundColor: '#19AC52',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
          <Stack.Screen
            name="signatureB"
            component={signatureB}
            options={{
              title: 'Signature',
              headerStyle: {
                backgroundColor: '#e02500',
              },
              headerTitleStyle: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'normal', marginLeft: 20 }
            }}
          />
        </Stack.Navigator >
      </NavigationContainer >
    )
  }
}