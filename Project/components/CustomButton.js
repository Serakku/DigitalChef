import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from "../constants";

const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress

}) => {

    if (colors.length > 0){
        return(
           < TouchableOpacity
            onPress = {onPress}
            >
                <Text style={{
                    textAlign:'center',
                    color: COLORS.primary,
                    

                }}
                >
                    {buttonText}

                </Text>
                </TouchableOpacity>
        )
    } else {
        return (
            < TouchableOpacity
            onPress = {onPress}
            >
                <Text style={{
                    textAlign:'center',
                    color: COLORS.darkGreen
                    

                }}
                >
                    {buttonText}

                </Text>
                </TouchableOpacity>
        )
    }

}

export default CustomButton