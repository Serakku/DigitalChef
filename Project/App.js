import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { Home, Login, Recipe, Procedure } from "./screens";
import LogoutConfirmation from './screens/LogoutConfirmation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './navigation/drawer';
import { images } from './constants';
import CustomSideBarMenu from './navigation/drawer';
import * as firebase from "@react-native-firebase/app"
// import {initializeApp} from 'firebase/app'
import {initializeApp} from "@react-native-firebase/app";
import { useState } from 'react/cjs/react.development';




const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Login'}
            >

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Home"
                    component={CustomSideBarMenu}

                />

                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />

                <Stack.Screen
                    name="Procedure"
                    component={Procedure}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

// export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//        <ImageBackground source ={require('./assets/adobo1.jpg')} resizeMode="cover" style={{
//          flex:1,
//          width:500,

//          }}>
//       <Text>Open up App.js to start working on your app!</Text>
//       </ImageBackground>
//       <View
//         style={{
//           flex: 0.2,
//           backgroundColor: 'white',
//           justifyContent: 'flex-end'
//         }}
//       >
//         </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// const firebaseConfig = {
//     apiKey: "AIzaSyDznZWWmNCuu9NzF2TcvHLIfRimaMEWRm8",
//     authDomain: "project-f8cee.firebaseapp.com",
//     projectId: "project-f8cee",
//     storageBucket: "project-f8cee.appspot.com",
//     messagingSenderId: "927993598671",
//     appId: "1:927993598671:web:baa2e202e0535c62f9ddba",
//     measurementId: "G-E191EMG6VM"
// };

// const app = firebase.initializeApp(firebaseConfig);


// const [review, setReview] = useState('');
// class App extends React.Component {
//     render() {
//         return (
            
//             <View style={{ flex: 1, }}>
                
//                 <TextInput
//                     placeholder="Review"
//                     onChangeText={text => setReview(text)}
//                     value={review}
//                     underlineColorAndroid='transparent'
//                     style={{

//                         justifyContent: 'center',
//                         alignContent: 'center',
//                         marginTop: 15,
//                         backgroundColor: COLORS.white,
//                         height: '26%',
//                         width: '100%',
//                         paddingHorizontal: 15,
//                         borderRadius: 10,
//                     }}>
//                 </TextInput>

//                 {/* Submit Button */}
//                 <TouchableOpacity
//                     onPress={AddReview} >
//                     <Text
//                         style={{
//                             textAlign: 'center',
//                             width: 100,
//                             height: 30,
//                             borderRadius: 10,
//                             backgroundColor: COLORS.darkOrange1,
//                             marginTop: 20,
//                             marginLeft: -5,
//                             color: COLORS.white,
//                             ...FONTS.body3
//                         }}> Submit </Text>
//                 </TouchableOpacity>




//             </View>
//         )
//     }
// }