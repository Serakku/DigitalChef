import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { COLORS } from "../constants";

const TabIcon = ({ focused, icon }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 65,
                width: 50,
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.darkOrange1 :  COLORS.lightOrange
                    // '#00bbf9' :  '#00f5d4'
                }}
                // '#00bbf9' : '#00f5d4'
            />

            {focused &&
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 10,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        backgroundColor: COLORS.darkOrange1
                    }}

                />
            }


        </View>
    )
}

export default TabIcon;