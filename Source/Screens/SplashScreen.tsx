import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, TouchableOpacity, Text, TextInput, View, Alert } from "react-native"
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ic } from '../Components/styles';

type Props = {
  navigation: any;
}

const SplashScreen: FunctionComponent<Props> = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  var currentUser:any;
  useEffect(() => {

    const checkLoginStatus = async () => {
    // const currentUser:FirebaseAuthTypes = auth().currentUser;
        currentUser = auth().currentUser;
        if (currentUser) {
          navigation.replace('Welcome')
        } else {
      
          navigation.replace('LoginScreen')
        }
    };
    // Alert.alert('splash screen');
    setTimeout(() => {
      checkLoginStatus();
    }, 2500)
   

  }, []);
  // if (user) {
  //   navigation.replace('Welcome')
  // } else {

  //   navigation.replace('LoginScreen')
  // }
  // console.log('User', user)

  return (
    <View style={{ backgroundColor: 'skyblue', display: 'flex', flex: 1 }}>
      <View style={[ic.icon, { marginTop: 150 }]}></View>
      <Text style={{ alignSelf: 'center', marginTop: 120, color: '#fff', fontSize: 30, fontWeight: 'bold' }}>DigiMine Chat!</Text>
    </View>)
}
export default SplashScreen;

