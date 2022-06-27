import react, { useState } from "react";
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import ChatAppBar from "../components/ChatListScreen/ChatAppBar";
import ChatList from "../components/ChatListScreen/ChatList";
import firebase from 'firebase/compat/app';

const { height, width } = Dimensions.get("window");


const Chats = ({ navigation }) => {



    // Fonts
    let [fontsLoaded, err] = useFonts({
        'Vidaloka': require('../assets/fonts/Vidaloka-Regular.ttf'),
        'Asap': require('../assets/fonts/Asap-Regular.ttf'),
        'Bodoni': require('../assets/fonts/LibreBodoni-Regular.ttf'),
        'Bebas': require('../assets/fonts/BebasNeue-Regular.ttf')
    });

    // if font isLoaded
    if (!fontsLoaded) {
        return <AppLoading />
    }
    return (

        // android safe area for notch screens
        <SafeAreaView style={styles.AndroidSafeArea}>


            {/* main container */}
            <View style={styles.mainContainer}>
                <ChatAppBar />
                <ChatList />
               
            </View>

        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    AndroidSafeArea: { // safe are for android notch devices
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    mainContainer: {
        flex: 1,
        backgroundColor: "#e2ebff",
        height: height * 1,
        width: width * 1,
        alignItems: "center",
    },


});
export default Chats;