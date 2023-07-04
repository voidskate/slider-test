import React from "react";
import { useWindowDimensions, StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from "react-native-snap-carousel";

import { Card } from 'react-native-shadow-cards';

const cornerRounding = 15;

// shadow settings
const shadowOffsetX = 8;
const shadowOffsetY = 8;
const shadowSize = 10; // aka "spread"
const shadowBlur = 15; // aka "blur"
const shadowPseudoPaddingTop = shadowBlur;
const shadowPseudoPaddingBot = ((shadowSize + shadowBlur) / 2) * 2; // alt: (shadowSize + shadowBlur) * 2
const shadowPseudoPaddingLeft = shadowBlur;

const styles = StyleSheet.create({
    carousel_view_wrapper: {
        flexDirection: "row",
        marginLeft: 0,        
        flex: 1,
        width: "100%",
    },

    carousel_container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    carousel: {
    },

    eachSlide: {
        marginTop: 0,
        flexDirection: "column",
        marginLeft: -shadowPseudoPaddingLeft/2
    },

    cardWrap: {
        width: 116,
        height: 141,
        shadowOffset: {
            width: shadowOffsetX,
            height: shadowOffsetY
        },
        shadowRadius: shadowBlur,
        marginTop: shadowPseudoPaddingTop,
        marginBottom: shadowPseudoPaddingBot,
        marginLeft: shadowPseudoPaddingLeft
    },

    imgs: {
        flex: 1,
        borderRadius: cornerRounding,
    }
})

const Slideshow = () => {
    const { height, width } = useWindowDimensions();

    const cardsPerScreen = 3;
    const screenWidth = useWindowDimensions().width;
    const cardWidth = screenWidth / cardsPerScreen;

    console.log("SCREEN WIDTH: " + screenWidth)
    console.log("SLIDE BOX WIDTH: " + cardWidth)
    
    const data = [
    {
        image: "https://cdn.glitch.global/f202da4e-f9f2-4703-9a01-471c490e991b/49b1c141-66d9-4ae8-9b0f-3c509b69143b.image.png"
    },
    {
        image: "https://cdn.glitch.global/f202da4e-f9f2-4703-9a01-471c490e991b/45e91da1-1ef7-4a43-a314-bb2c48445a26.image.png"
    },
    {
        image: "https://cdn.discordapp.com/attachments/899539687780278313/1124783765516976128/tumblr_0104990e0fe56ac9b058ac1a51200f4e_588322f2_250.png"
    },
    {
        image: "https://cdn.discordapp.com/attachments/899539687780278313/1124783765764444170/tumblr_00c088ffbd30abdece1d788137e476eb_907e597e_250.png"
    }
];

const renderItem = ({ item }) => (
    <View style={styles.eachSlide}>
        <Card
            style={styles.cardWrap}
            elevation={shadowSize}
            cornerRadius={cornerRounding}
            opacity="0.15"
            backgroundColor="white"
        >
            <Image source={{uri: item.image}} style={styles.imgs}/>
        </Card>
    </View>
);

  return (
    <SafeAreaView>
        <ScrollView
            style={styles.carousel_view_wrapper}
            contentContainerStyle={styles.carousel_container}
        >
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={cardWidth}
                style={styles.carousel} layout={'default'} 
            />
        </ScrollView>
    </SafeAreaView>
  );
};

export default Slideshow;
