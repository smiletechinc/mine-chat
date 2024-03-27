import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, TouchableOpacity, Text, TextInput, View, Alert, Image, StyleSheet } from "react-native"
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ic } from '../Components/styles';

type Props = {
  navigation: any;
}

const SplashScreen: FunctionComponent<Props> = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  var currentUser: any;
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
    <View style={{ display: 'flex', flex: 1, padding: 20 }}>
      <Image
        source={require('../Screens/assets/masterminelogo.png')} // Local image
        // OR
        // source={{ uri: 'https://example.com/image.png' }} // Remote image
        style={{ width: 250, height: 200, alignSelf: 'center', marginTop: 50 }} // Adjust width and height as needed
      />
      {/* <View style={[ic.icon, { marginTop: 150 }]}></View> */}

      <Text style={{ alignSelf: 'center', marginTop: 50, color: '#20129D', fontSize: 30, fontWeight: 'bold' }}>mastermine chat!</Text>


      <View style={{ width: 400, height: 200, marginHorizontal: 0, marginEnd: 10, alignContent: 'flex-end', marginBottom:0, marginTop:250 }}>
        <Image
          source={require('../Screens/assets/cofounder2.png')} // Local image
          // OR
          // source={{ uri: 'https://example.com/image.png' }} // Remote image
          style={[styles.container, { width: 300, height: 200, alignSelf: 'center', marginTop: 140 }]} // Adjust width and height as needed
        />
      </View>
    </View>)

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400, // Adjust the width to fit your layout
    height: 200, // Adjust the height to fit your layout
  },
});
export default SplashScreen;

