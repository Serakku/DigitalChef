
import React from 'react';
import 'react-native-gesture-handler';
import {
    View,
    Text,
    Image,
    BackgroundImage,
    ImageBackground,
    ImageBackgroundBase,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Tabs from "./tabs";
import handleSignOut from './signout';
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import Icons from 'react-native-vector-icons/Ionicons'
import LogoutConfirmation from '../screens/LogoutConfirmation';
import { auth } from '../firebase';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItems,
} from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';


const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            {/*Top Large Image */}
            <Image
                source={images.Logo}
                style={{
                    backgroundColor: '#32493c',
                    resizeMode: 'cover',
                    width: '100%',
                    height: '20%',
                    alignSelf: 'center',
                }}
            />

            <DrawerContentScrollView {...props}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image
                        source={images.UserProfile2}
                        style={{
                            position: 'relative',
                            marginRight: 15,
                            marginLeft: 20,
                            // marginTop: 30,
                            marginBottom: 30,
                            width: 45,
                            height: 45,
                            borderRadius: 20,
                        }} />

                    <View>
                        <Text style={{color: COLORS.lightGray2, marginLeft:-9}}> Email: {"\n"}</Text>
                    </View>
                </View>

                <Text style={{
                    position: 'absolute',
                    top: 50,
                    right: 38,
                    color: COLORS.darkGreyPink

                }}>

                    {auth.currentUser?.email}

                </Text>

                <Text style= {{
                    color: '#9a9c9b',
                    marginLeft:15,
                    marginTop: -30,
                    marginBottom: 5,
                }}> _____________________________________
                    </Text>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {/* <Text
                style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'grey'
                }}>
                www.calliflowershop.com
            </Text>  */}
        </SafeAreaView>
    )
}

const CustomSideBarMenu = (props) => {

    return (


        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerNavigator {...props} />}

            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.darkOrange1,
                },
                headerTintColor: COLORS.white,
                headerTitle: (props) => ( // App Logo
                    <ImageBackground
                        style={{
                            width: 500,
                            height: 115,
                            marginTop: -45,
                            marginLeft: -30,
                        }}
                        source={images.Header2}
                        resizeMode='contain'
                    />
                )
            }}
        >
            <Drawer.Screen name="Home"
                component={Tabs}

                options={{
                    drawerLabel: 'Home',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="home" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }}
            />

            {/* <Drawer.Screen name="Invite Friends"
                component={Tabs}
                options={{
                    drawerLabel: 'Invite Friends',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="people-outline" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }}
            />

            <Drawer.Screen name="About"
                component={Tabs}
                options={{
                    drawerLabel: 'About',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="information-circle-outline" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }} />

            <Drawer.Screen name="Privacy Policy"
                component={Tabs}
                options={{
                    drawerLabel: 'Privacy Policy',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="cog-outline" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }} />

            <Drawer.Screen name="Terms of Service"
                component={Tabs}
                options={{
                    drawerLabel: 'Terms of Service',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="document-outline" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }} /> */}

            <Drawer.Screen name="Logout"
                component={LogoutConfirmation}
                options={{
                    drawerLabel: 'Logout',
                    drawerLabelStyle: COLORS.darkOrange1,
                    drawerActiveBackgroundColor: COLORS.darkOrange1,
                    drawerActiveTintColor: COLORS.white,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icons name="log-out-outline" size={20} color={focused ? COLORS.white : COLORS.darkOrange1} />
                    )
                }}

            />

        </Drawer.Navigator>

    )

}
export default CustomSideBarMenu;