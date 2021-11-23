import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import { TabIcon } from '.';

import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const BookmarksCard = ({ containerStyle, bookmarkItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image
                source={bookmarkItem.image}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius,
                }}
            />


            {/* Details */}
            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20,
                }}>

                {/* Name */}
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    {bookmarkItem.name}
                </Text>

        

                <View style={{
                    flexDirection: 'row',
                }}>
                    {Array(5).fill(0).map(_ => <Image source={icons.star} />
                    )}
                </View>

                {/* Servings */}
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={icons.clock}

                        style={{
                            position: 'relative',
                            bottom: -4,
                            right: 5,
                            // backgroundColor:'#000',
                        }} />
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}>
                        {bookmarkItem.duration} | {bookmarkItem.serving} Serving
                    </Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default BookmarksCard;