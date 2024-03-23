import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

import { FunctionComponent, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import UserChat from "./UserChat";
import { TextInput } from 'react-native-gesture-handler';
import { btnLogin, txtLogin } from '../Components/styles';
const Stack = createNativeStackNavigator();
type Props = {
  navigation:any;
}

const LoginScreen: FunctionComponent<Props> = (props, {navigation}) => {
    const navigateToSignUpScreen = () => {
        // console.warn('navigation to signup called')
        props.navigation.replace("SignUpScreen");
      }
    //   const navigaToHomeScreen = () => {
    //       props.navigation.navigate("Welcome");
    //   }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (email: string, pass: string) => {
        auth()
          .signInWithEmailAndPassword(email, pass)
          .then(() => {
            console.log('User account signed in!');
            props.navigation.replace("Welcome");
            // navigaToHomeScreen;
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            console.error(error);
          });
      }
    return(
        <View style = {{backgroundColor:'skyblue', flex:1}}>
            <TextInput style = {txtLogin.txtBox} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Email...'>


            </TextInput>
            <TextInput style = {txtLogin.txtBox} value={password} onChangeText={text=>setPassword(text)} placeholder='Password' secureTextEntry>

            </TextInput>
            <TouchableOpacity style = {btnLogin.btn} onPress={() => Login(email, password)}>
                <Text style={{ color: '#FFFFFF', fontWeight:'bold' }}>Login Now</Text>

            </TouchableOpacity>
            <Text>Don't have an Account?</Text>
            <TouchableOpacity style = {btnLogin.btn} onPress={navigateToSignUpScreen}>
                <Text style={{ color: '#FFFFFF', fontWeight:'bold' }} >SignUp Now</Text>

            </TouchableOpacity>

        </View>


        )
    }
    export default LoginScreen;