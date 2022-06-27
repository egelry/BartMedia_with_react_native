import react, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SearchField from "./SearchField";

const { height, width } = Dimensions.get("window");

const ChatAppBar = () => {
    // Fonts
    let [fontsLoaded, err] = useFonts({
        'Vidaloka': require('../../assets/fonts/Vidaloka-Regular.ttf'),
        'Asap': require('../../assets/fonts/Asap-Regular.ttf'),
        'Bodoni': require('../../assets/fonts/LibreBodoni-Regular.ttf'),
        'Bebas': require('../../assets/fonts/BebasNeue-Regular.ttf')
    });

    // if font isLoaded
    if (!fontsLoaded) {
        return <AppLoading />
    }
    return (
        <View style={styles.chatAppBar}>
            <View style={styles.orDividerTop} />

            <View style={styles.logoAndTextField}>
                <View style={styles.logo}>
                    <View>
                        <Text style={styles.logoText}>BM</Text>
                    </View>
                </View>
                <View style={{ width: width * 0.7250, }}>
                    <SearchField />

                </View>
            </View>
            <View style={styles.orDividerBottom} />
        </View>

    )
}

const styles = StyleSheet.create({
    chatAppBar: {
        backgroundColor: "#e2ebff",
        height: height * 0.09,
        width: width * 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    logoAndTextField: {
        backgroundColor: "#e2ebff",
        height: height * 0.06,
        width: width * 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    logo: {
        height: 37,
        width: 40,
        borderRadius: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        fontFamily: 'Vidaloka',
        fontSize: 23
    },
    orDividerTop: {
        height: 7,
        width: width * 1,
    },
    orDividerBottom: {
        height: 1,
        width: width * 0.725 + 60,
        backgroundColor: 'black'
    },

})

export default ChatAppBar