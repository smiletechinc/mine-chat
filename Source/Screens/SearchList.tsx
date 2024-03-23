import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { FunctionComponent } from "react";
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
const Stack = createNativeStackNavigator();
type Props = {
  navigation:any;
}

const SearchScreen: FunctionComponent<Props> = (props) => {
    return(
    <View>

    </View>

    )
}
export default SearchScreen;