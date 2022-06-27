import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase/compat/app';



const Chat = ({ route }) => {
    const [messages, setMessages] = useState([]);

    const [uid, setUID] = useState("");

    useEffect(() => {
        return firebase.auth().onAuthStateChanged((user) => {
            setUID(user?.uid);
        })
    })

    useEffect(() => {
        firebase
            .firestore()
            .doc("chats/" + route.params.id)
            .onSnapshot((doc) => {
                setMessages(
                    doc.data().messages.map((message) => ({
                        ...message,
                        createdAt: message.createdAt.toDate(),
                    }))
                )
            })
    }, [route.params.id])

    const onSend = useCallback((m = []) => {
        firebase.firestore()
            .doc("chats/" + route.params.id)
            .set({ messages: GiftedChat.append(messages, m) }, { merge: true })
    }, [route.params.id, messages])

    return (
        <GiftedChat
        

            messages={messages}
            onSend={messages => onSend(messages)}
            showAvatarForEveryMessage ={true}
            user={{
                _id: uid,
                name :  'ege',
                avatar: 'https://placeimg.com/640/480/any'
            }}
            
        />
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: { // safe are for android notch devices
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    ChatScreen: {


    }
})

export default Chat;
