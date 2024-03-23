import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAQsScreen from '../Screens/FAQsScreen';
import DigiMineChatScreen from '../Screens/DigiMineChat';
import ProfileScreen from '../Screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import UserChat from '../Screens/UserChat';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SplashScreen from '../Screens/SplashScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          // size = 25;
          let iconName: any;
          if (route.name === 'Home') {
            iconName = <Ionicons name='home' size={size} color={color} />;
          } else if (route.name === 'FAQs') {
            iconName = <FontAwesome name={'question-circle'} size={size} color={color} />;
          } else if (route.name === 'Chats') {
            iconName = <MaterialCommunityIcons name={'message'} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = <FontAwesome name={'user'} size={size} color={color} />;
          }
          
          return iconName;
        },
        
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
          marginTop: -5,
          marginBottom: 10
        },

        tabBarStyle: {
          // backgroundColor:'white',
          height: 70,
          borderRadius: 10,
          padding: 0,
          margin: 5,
          marginHorizontal: 10,
          backgroundColor:"#FFFFFF",
        },
        tabBarIconStyle: {
          width: 50,
          maxHeight: 35,
          marginBottom: 5,
          // backgroundColor:'skyblue',
          borderRadius: 20,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="FAQs" component={FAQsScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="Chats" component={DigiMineChatScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}

      />
    </Tab.Navigator>
  );
}
const MyStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="UserChat" component={UserChat} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack;