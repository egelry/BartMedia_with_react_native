import React, { useState, useEffect } from "react";
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions, FlatList, Alert } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const { height, width } = Dimensions.get("window");



const Item = ({ title, lastMsg, id }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ChatPage', { id: id })
        }}>
            <View style={styles.message}>
                <View style={styles.messageIcon}>
                    <Text style={styles.iconText}>AA</Text>
                    {/*  <Text style={styles.iconText}>{title.split(' ').reduce((prev, current) => `${prev[0]}${current[0]}`)}</Text> */}
                </View>
                <View style={styles.userandLastMsg}>
                    <View style={styles.userandLastMsgRev}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.lastMsgText}>{lastMsg}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ChatList = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            firebase.firestore()
                .collection('chats')
                .where('users', 'array-contains', user.email)
                .onSnapshot((snapshot) => {
                    setChats(snapshot.docs);
                });
        });


    }, []);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('LoginPage')
        });
    }

    const handleAddUser = () => {
       return Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

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
        <SafeAreaView style={styles.AndroidSafeArea}>

            <React.Fragment>
                <View style={styles.chatListArea}>
                    <FlatList
                        data={chats}
                        renderItem={({ item }) => {

                            return (
                                <Item title={item.data().users.find((x) => x !== firebase.auth()?.currentUser?.email)}
                                    lastMsg={item.data().messages.length === 0 ? "No Message" : item.data().messages[0].text}
                                    id={item.id} />)
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.bottomBar}>
                    <View style={styles.bottomBarRow}>
                        <TouchableOpacity onPress={() => {
                            handleSignOut()
                        }}>
                            <Feather name="user" color="black" size={23} />

                        </TouchableOpacity>
                        <View style={styles.verticalDivider} />

                        <TouchableOpacity onPress={() => {
                            handleAddUser()
                        }}>
                            <Feather name="plus" color="black" size={23} />

                        </TouchableOpacity>
                    </View>
                </View>
            </React.Fragment>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AndroidSafeArea: { // safe are for android notch devices
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    chatListArea: {
        width: width * 0.725 + 60,
        height: height * 0.82,
        marginTop: height * 0.025,
        alignItems: 'flex-end'
    },

    message: {
        marginVertical: 8,
        flexDirection: 'row-reverse',
        width: width * 0.725,
    },
    messageIcon: {
        backgroundColor: 'white',
        width: height * 0.07,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },

    iconText: {
        fontSize: 25,
        fontFamily: 'Bodoni'
    },
    userandLastMsg: {
        justifyContent: 'center',
        width: 200,
        alignItems: 'flex-end',
        marginRight: 15
    },
    userandLastMsgRev: {
        alignItems: 'flex-end'

    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Cabin',

    },
    lastMsgText: {
        fontSize: 12,
        fontFamily: 'Cabin',
        color: "#94979c"

    },
    bottomBar: {
        height: height * 0.05,
        width: width * 0.9,
        borderTopWidth: 1,
        borderColor: "black",
    },
    bottomBarRow: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    verticalDivider: {
        height: height * 0.05,
        width: 1.3,
        backgroundColor: "black",

    }

});

export default ChatList;
