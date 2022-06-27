import react, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

const { height, width } = Dimensions.get("window");


const LoginPage = ({ navigation }) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('ChatsPage')
            }
        })

        return unsubscribe;
    })

    const handeLogin = () => {
        firebase.auth().signInWithEmailAndPassword(userName, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.userName);
            }).catch(error => alert(error.message))
    }

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

                {/* BART text */}
                <View style={styles.bartTextContainer}>
                    <View style={styles.baTextContainer}>
                        <Text style={styles.bartText}>
                            BA
                        </Text>
                    </View>
                    <Text style={styles.bartText}>
                        RT
                    </Text>
                </View>

                {/* MEDİA text */}
                <View style={styles.mediaTextContainer}>
                    <Text style={styles.mediaText}>
                        MEDİA
                    </Text>
                </View>

                {/* space one */}
                <View style={styles.spaceOne}></View>

                {/* textfields and login button */}
                <View style={styles.textFieldContainer}>
                    <View style={styles.searchSection}>
                        <View style={{ marginHorizontal: 5 }}>
                            <Feather name="user" color="black" size={10} />
                        </View>
                        <TextInput
                            placeholder="USER NAME"
                            text
                            style={styles.textField}
                            placeholderTextColor="#d9d9d9"
                            onChangeText={(e) => {
                                setUserName(e)
                            }}
                        />

                    </View>
                    <View style={styles.searchSection}>
                        <View style={{ marginHorizontal: 5 }}>
                            <Feather name="lock" color="black" size={10} />

                        </View>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="PASSWORD"
                            style={styles.textField}
                            placeholderTextColor="#d9d9d9"
                            onChangeText={(e) => {
                                setPassword(e)
                            }}
                        />

                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={() => {

                        handeLogin();

                    }}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                {/* forgot password, terms & conditions and register fields */}
                <View style={styles.detailContainer}>
                    <View style={styles.detailsDetailContainer}>
                        <TouchableOpacity onPress={() => { alert("i dont care") }}>
                            <Text style={styles.forgotPasswordText}>FORGOT PASSWORD</Text>

                        </TouchableOpacity>
                        <Text style={styles.termsText}>Terms & Conditions</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('RegisterPage')
                    }}>
                        <Text style={styles.registerText}>REGISTER</Text>

                    </TouchableOpacity>
                </View>
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
        backgroundColor: "#e2ebff",
        height: height * 1,
        width: width * 1,
        alignItems: "center"
    },
    bartTextContainer: {
        marginTop: height * 0.14,
        height: height * 0.3,
        width: width * 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    baTextContainer: {
        height: 77,
    },
    bartText: {
        fontFamily: 'Vidaloka',
        fontSize: 107,
    },
    mediaTextContainer: {
        height: height * 0.06,
    },
    mediaText: {
        fontFamily: 'Asap',
        fontSize: 16,
        letterSpacing: '3px'
    },
    spaceOne: {
        height: height * 0.1,
    },
    textFieldContainer: {
        height: height * 0.22,
        alignItems: "center",
        justifyContent: "space-around",
    },
    textField: {
        backgroundColor: 'white',
        width: width * 0.67,
        fontFamily: 'Bodoni',
        fontSize: 10,
        height: 30,
        letterSpacing: "1.3px",
    },
    loginButton: {
        width: width * 0.67 + 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'black',
    },
    loginButtonText: {
        color: 'white',
        fontFamily: 'Bebas',
        fontSize: 19.9
    },
    detailContainer: {
        width: width * 1,
        height: height * 0.18,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    detailsDetailContainer: {
        marginTop: -10,
        alignItems: "center"
    },
    forgotPasswordText: {
        fontFamily: 'Bebas',
        fontWeight: 'bold',
        fontSize: 15.5
    },
    termsText: {
        fontFamily: 'Bebas',
        color: "#a6a6a6",
        fontSize: 10,

    },
    registerText: {
        fontFamily: 'Bebas',
        fontWeight: 'bold',
        fontSize: 18
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },


});
export default LoginPage;