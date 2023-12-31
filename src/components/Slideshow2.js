import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import Slideshow2_Logic from "./Slideshow2_Logic";
import Slideshow2_Item from "./Slideshow2_Item";
import Slideshow2_Data from "./Slideshow2_Data";

const { width } = Dimensions.get("window");

const css = {
    vPadding: 45,
    sidePadding: 15,

    // gallery item settings
    itemsSpacing: 15,
    itemRatio: 0.815602837,
    itemRounding: 15,

    // shadow settings
    shadowOffsetX: 8,
    shadowOffsetY: 8,
    shadowSize: 10, // aka "spread"
    shadowBlur: 15, // aka "blur"
    shadowStrength: 0.4,

    cardFlipSpeed: 699,
}

// css.itemWidth = (width - (css.itemsSpacing * (3 - 1))) / 3;
css.itemWidth = (width - (css.itemsSpacing * (3 - 1)) - (css.sidePadding * 2)) / 3;
css.itemHeight = css.itemWidth / css.itemRatio;
css.shadowPseudoPaddingTop = css.shadowBlur;
css.shadowPseudoPaddingBot = ((css.shadowSize + css.shadowBlur) / 2) * 2; // alt: (shadowSize + shadowBlur) * 2
css.shadowPseudoPaddingLeft = css.shadowBlur;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    sliderBG: {
        height: css.itemHeight + css.vPadding + css.vPadding,
        backgroundColor: "white"
    },

    sliderInner: {
        width: width,
        justifyContent: "center", // vertical center,
        // next line is horizontal center
        // alignItems: "center"
        marginLeft: css.sidePadding,
        marginRight: -css.sidePadding
    },
    
    rowWrap: {
        flexDirection: "row",
        // marginLeft: css.itemsSpacing
    }
});


const groupBy = 3;

let moduloSort = [];

// sort items into threes
for(let i=0; i<Slideshow2_Data.length; i += groupBy){
    const group = Slideshow2_Data.slice(i, i + groupBy);
    moduloSort.push(group);
}

const Slideshow2 = () => (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.sliderBG}>
            <SwiperFlatList
                data={Slideshow2_Logic}
                renderItem={({ sld, index }) => (
                    <View key={index} style={styles.sliderInner}>
                        {/* loop through main array */}
                        {/* this array has nested arrays inside it */}
                        {moduloSort.map((group, groupIndex) => (
                            <View key={groupIndex} style={styles.rowWrap}>
                                {groupIndex === index ? group.map((item, itemIndex) => (
                                    <Slideshow2_Item
                                        key={itemIndex}
                                        img={item.image ? item.image : undefined}
                                        colors={item.colors ? item.colors : undefined}
                                        css={css}
                                    />
                                )) : "" }
                            </View>
                        ))}
                </View>
                )}
            />
            </View>
        </View>
    </SafeAreaView>
);

export default Slideshow2;
