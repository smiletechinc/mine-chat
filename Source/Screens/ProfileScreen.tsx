import { FunctionComponent } from "react";
import {
    ScrollView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';

type Props = {
    navigation: any;
}
const ProfileScreen: FunctionComponent<Props> = (props) => {


    const Logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      props.navigation.replace("LoginScreen");
    }
    return (
        <ScrollView>
            <View>
                <View style={{ width: '100%', height: 180, backgroundColor: 'skyblue' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 50, aspectRatio: 1, backgroundColor: 'grey', marginLeft: 20, marginTop: 20, borderRadius: 50 }}>
                        </View>
                        <Text style={{ color: 'white', marginLeft: 20, marginTop: 40, borderRadius: 50, fontSize: 20, fontWeight: 'bold' }}>User ID: 100213</Text>
                    </View>


                    <Text style={{ marginTop: 15, color: 'white', fontSize: 25, fontWeight: 'bold', marginLeft: 20 }}>Muhammad Umer Farooq</Text>
                    <Text style={{ color: '#FAFAFA', fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Assistant Project Manager</Text>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <TouchableHighlight style={{ backgroundColor: 'skyblue', padding: 10, margin: 10, borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Edit Profle</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: 'skyblue', padding: 10, margin: 10, borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Share Profle</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black', fontWeight:'bold', fontSize:16 }}>Age: 26</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black' , fontWeight:'bold', fontSize:16}}>Date of Birth: 02/04/1999</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black', fontWeight:'bold', fontSize:16}}>Email: mr.umerfarooq@icloud.com</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black', fontWeight:'bold', fontSize:16 }}>Contact: +92 3337600088</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black', fontWeight:'bold', fontSize:16 }}>Age: 26</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ backgroundColor: '#EEEEEE', padding: 10, marginHorizontal: 10, borderRadius: 0 }}>
                            <Text style={{ color: 'black', fontWeight:'bold', fontSize:16 }}>Date of Birth: 02/04/1999</Text>
                        </TouchableHighlight>

                    </View>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 10, height: 45, alignContent: 'center', width: '95%', margin: 10, padding: 10 }} onPress={() => props.navigation.navigate("UserChat")}>
                    <Text style={{ color: 'white', alignItems: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle' }}>Contact an agent!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 10, height: 45, alignContent: 'center', width: '95%', margin: 10, padding: 10 }} onPress={Logout}>
                    <Text style={{ color: 'white', alignItems: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle' }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
export default ProfileScreen;