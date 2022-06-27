import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./screens/Login"
import RegisterPage from "./screens/Register"
import Chats from "./screens/Chats";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";


const Stack = createStackNavigator();
const App = () => {
  return (
    // Navigation
    <NavigationContainer>

      {/* inital route is "LoginPage" */}
      <Stack.Navigator initialRouteName="LoginPage">

        {/* LoginPage, appbar is invisible*/}
        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />

        {/* RegisterPage, appbar is invisible */}
        <Stack.Screen options={{ headerShown: false }} name="RegisterPage" component={RegisterPage} />

        {/* Chats Screen */}
        <Stack.Screen options={{ headerShown: false }} name="ChatsPage" component={Chats} />

        {/* Chat Screen */}
        <Stack.Screen  name="ChatPage" component={Chat} />

        {/* Profile Screen */}
        <Stack.Screen  name="ProfilePage" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;





