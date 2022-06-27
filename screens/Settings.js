import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';

const Settings = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>Settings</Text>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    AndroidSafeArea: { // safe are for android notch devices
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

});



export default Settings;

