
import React, { useState, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import { Alert } from 'react-native';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
type Props = {
  navigation: any;
}
const UserChat: FunctionComponent<Props> = (props) => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: string }>>([]);
  const [newMessage, setNewMessage] = useState<string>('');


  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevState) => [
        ...prevState,
        { text: newMessage, sender: 'me' },
      ]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mastermine Support</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'me' ? styles.myMessage : styles.theirMessage}>
            <Text style={{ color: '#222' }}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#20129D',
    padding: 10,
    paddingVertical:15,
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontWeight:'bold',

    fontSize: 20,
    marginHorizontal: 20,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    marginLeft:8
  },
  sendButton: {
    padding: 10,
    marginRight: 6,
    borderRadius: 50,
    backgroundColor: '#20129D',
  },
  sendButtonText: {
    color: 'white',
  },
});

export default UserChat;
