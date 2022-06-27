import react, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");


const SearchField = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <View style={styles.searchField}>

            <View style={styles.searchSection}>
                <View style={{ marginHorizontal: 5 }}>
                    <Feather name="search" color="black" size={18} />
                </View>
                <TextInput
                    style={styles.textField}
                    placeholderTextColor="#d9d9d9"
                    value={inputValue}
                    onChangeText={(text) => {
                        setInputValue(text);
                    }}
                />
                <TouchableOpacity onPress={() => {
                    setInputValue("");
                }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <Feather name="x" color="#464746" size={22} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    searchField: {
        width: width * 0.725,

    },
    textField: {
        backgroundColor: 'white',
        width: width * 0.725,
        fontFamily: 'Bodoni',
        fontSize: 10,
        height: 37,
        letterSpacing: "1.3px",
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: width * 0.725

    },
    searchIcon: {
        padding: 10,
    },


})

export default SearchField;
