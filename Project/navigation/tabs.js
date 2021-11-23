import React from "react";
import 'react-native-gesture-handler';
import {
    View,
    Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";


import { Bookmarks, Home, Login, Recipe, Settings } from "../screens"
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components";
import { images } from "../constants";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 15,
                    marginHorizontal: 10,
                    height: 65,
                    borderRadius: 10,
                    //shadow
                    shadowColor: '#000000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    }
                }

            })}

        >
            <Tab.Screen
                name="Recipes"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />

                }}
            />

            {/* <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} />

                }}
            /> */}

            {/* <Tab.Screen
                name="Bookmark"
                component={Bookmarks}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.bookmark} />

                }}
            /> */}

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.settings} />

                }} />

        </Tab.Navigator>

    )
}


export default Tabs;