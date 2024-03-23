import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import 'react-native-gesture-handler';
import { FunctionComponent, useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import { btnLogin, txtSignUp } from '../Components/styles';
const Stack = createNativeStackNavigator();
type Props = {
  navigation: any;
}


///===================================Firebase Auth=================================================

const SignUpScreen: FunctionComponent<Props> = (props, {navigation}) => {
  const navigateToLoginScreen = () => {

      props.navigation.navigate("LoginScreen");

  }
//   const navigaToHomeScreen = () => {
//     props.navigation.navigate("Welcome");
// }
  var [email, setEmail]: any = useState('');
  var [password, setPassword]: any = useState('');

  const handleEmailText = (text: string) => setEmail(text);
  const handlePassText = (text: string) => setPassword(text);

  const SignUp = (email: string, pass: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
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
  return (
    <View style={{ backgroundColor: 'skyblue', flex: 1 }}>
      <TextInput style={txtSignUp.txtBox} placeholder='Email...' onChangeText={handleEmailText} value={email} />
      <TextInput style={txtSignUp.txtBox} placeholder='Password...' secureTextEntry onChangeText={handlePassText} value={password} />
      <TouchableOpacity style={btnLogin.btn} onPress={() => SignUp(email, password)}>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>SignUp Now</Text>
      </TouchableOpacity>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Already have an Account?</Text>
      <TouchableOpacity style={btnLogin.btn} onPress= {navigateToLoginScreen}>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}  >Login Now</Text>
      </TouchableOpacity>
    </View>


  )
}
export default SignUpScreen;