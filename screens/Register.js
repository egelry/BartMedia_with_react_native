import react from "react";
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AppLoading from 'expo-app-loading';


const { height, width } = Dimensions.get("window");

const RegisterPage = ({ navigation }) => {

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
                    <Text style={styles.bartText}>
                        BART
                    </Text>

                </View>

                {/* MEDİA text */}
                <View style={styles.mediaTextContainer}>
                    <Text style={styles.mediaText}>
                        MEDİA
                    </Text>
                </View>

                <View style={styles.loginWithBartArea}>
                    <View style={styles.bIcon}>
                        <Text style={styles.bText}>B</Text>
                    </View>
                    <TouchableOpacity onPress={()=> {
                        alert('there is no such a thing as bart account')
                    } }>
                        <View style={styles.loginWithBartTextArea}>
                            <Text style={styles.loginWithBartText}>REGISTER WITH BART ACCOUNT</Text>

                        </View>
                    </TouchableOpacity>
                </View>


                {/* Or Area */}
                <View style={styles.orArea}>
                    <View style={styles.orDivider}/>

                    <View style={styles.orAreaTextArea}>
                        <Text style={styles.orAreaText}>OR</Text>
                    </View>
                    <View style={styles.orDivider}/>

                </View>

                {/* textfields and login button */}
                <View style={styles.textFieldContainer}>
                    <View style={styles.formArea}>
                        <View style={styles.searchSection}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Feather name="mail" color="black" size={10} />
                            </View>
                            <TextInput
                                placeholder="E-MAIL"
                                text
                                style={styles.textField}
                                placeholderTextColor="#d9d9d9"
                            />

                        </View>
                        <View style={styles.searchSection}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Feather name="user" color="black" size={10} />

                            </View>
                            <TextInput
                                secureTextEntry={true}
                                placeholder="USER NAME"
                                style={styles.textField}
                                placeholderTextColor="#d9d9d9"
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
                            />

                        </View>
                        <View style={styles.searchSection}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Feather name="key" color="black" size={10} />

                            </View>
                            <TextInput
                                secureTextEntry={true}
                                placeholder="CONFIRM PASSWORD"
                                style={styles.textField}
                                placeholderTextColor="#d9d9d9"
                            />

                        </View>

                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>REGISTER</Text>
                        </TouchableOpacity></View>

                    <TouchableOpacity onPress={() => { navigation.navigate('LoginPage') }}>
                        <Text style={styles.termsText}>OR LOGIN</Text>

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

    /* Main Container */
    mainContainer: {
        backgroundColor: "#e2ebff",
        height: height * 1,
        width: width * 1,
        alignItems: "center"
    },

    /* "BART" Text */
    bartTextContainer: {
        marginTop: height * 0.12,
        width: width * 0.5,
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: "center",
    },
    bartText: {
        fontFamily: 'Vidaloka',
        fontSize: 75.4,
        letterSpacing: 4
    },

    /* "MEDİA" Text */
    mediaTextContainer: {
        height: height * 0.06,
    },
    mediaText: {
        fontFamily: 'Asap',
        fontSize: 16,
        letterSpacing: 3
    },


    /* Or Area */
    orArea: {
        flexDirection: 'row',
        width: width * 0.67 + 20,
        height: height * 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orDivider: {
        height: 4,
        width: width * 0.27,
        backgroundColor: '#d9d9d9'
    },
    orAreaTextArea: {
        width: 20,
        textAlign: "center"
    },
    orAreaText: {
        fontFamily: "Bebas",
        fontSize: 18,
        color: "#d9d9d9"
    },

    /* Register With Bart */
    loginWithBartArea: {
        width: width * 0.67 + 20,
        height: height * 0.055,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'


    },

    /* TextFields */
    textFieldContainer: {
        height: height * 0.52,
        alignItems: 'center',
        justifyContent: "space-around",
    },
    formArea: {
        height: height * 0.37,
        justifyContent: "space-around",
    },

    textField: {
        backgroundColor: 'white',
        width: width * 0.67,
        fontFamily: 'Bodoni',
        fontSize: 10,
        height: 33.5,
        letterSpacing: 1.3,
    },

    /* Login Button */
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
    bIcon: {
        height: 26,
        width: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    bText: {
        fontFamily: 'Bebas',
        fontSize: 24,
        color: 'white',
        marginTop: 3.2
    },
    loginWithBartText: {
        fontFamily: 'Bebas',
        marginTop: 3.2,
        fontSize: 18,
        marginLeft: 6
    },


    termsText: {
        fontFamily: 'Bebas',
        color: "#a6a6a6",
        fontSize: 14,

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


export default RegisterPage;
