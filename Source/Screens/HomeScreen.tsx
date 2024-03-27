// import { getHeaderTitle } from '@react-navigation/elements';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  FlatList,
  View,
} from 'react-native';
import UserChat from "./UserChat";
// const Stack = createNativeStackNavigator();
type Props = {
  navigation: any;
}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'THARSIS Mining',
    location: 'Spain',
    logo: "llll",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tapojärvi Mining',
    location: 'Finland',
    logo: "llll",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jastrzębska Spółka Węglowa SA', 
    location: 'Poland',
    logo: "llll",
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab338ba',
    title: 'TERNA MAG',
    location: 'Greece',
    logo: "llll",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9asa97f63',
    title: 'Sibanye-StillwaterM',
    location: 'South Africa',
    logo: "llll",
  },
  // {
  //   id: '58694a0f-3da1-47dsf-bd96-145571e29d72',
  //   title: 'Akita University',
  //   location: 'South Africa',
  //   logo: "llll",
  // }, {
  //   id: 'bd7acbea-c1b1-46c2-aadfed5-3ad53abb28ba',
  //   title: 'BBE Group',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aafa97f63',
  //   title: 'BGRIMM',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-3da1-471fsf-bd96-145571dgae29d72',
  //   title: 'CONSPEC',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '5869SDF4a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'detnet',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-ss3da1-471f-bd96-145571dgae29d72',
  //   title: 'DIGGER',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '5869EPA4a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'EPA',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: 'esri58694a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'esri',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: 'HORTS58694a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'HORTS',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: 'HUAWEI58694a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'HUAWEI',
  //   location: 'South Africa',
  //   logo: "llll",
  // }, {
  //   id: 'Leica58694a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: 'Leica Geosystems',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: 'LETSTALK58694a0f-3da1-471f-bd96-145571dgae29d72',
  //   title: `LET'S TALK`,
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-14SD5571dgae29d72',
  //   title: 'Ninth Item',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-1455ADF71dgae29d72',
  //   title: 'Ninth Item',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571SDFGdgae29d72',
  //   title: 'Ninth Item',
  //   location: 'South Africa',
  //   logo: "llll",
  // }, {
  //   id: '58694a0f-3da1-471f-bd96-145571dgHFDGHae29d72',
  //   title: 'Ninth Item',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571SDFdgae29d72',
  //   title: 'Ninth Item',
  //   location: 'South Africa',
  //   logo: "llll",
  // },
];
type companies = { title: string, logo: string, location: string };
const Item = ({ title, logo, location }: companies) => (

  <View>

    {/* 
    <View style={styles.item}>
      <Text style={[styles.title,]} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      <Text style={styles.title}>{logo}</Text>
      <Text style={styles.title}>{location}</Text>
    </View> */}
    <TouchableOpacity>
      <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, borderRadius: 10, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 5, aspectRatio: 1 }}>
          <Text style={{ fontSize: 26, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }} numberOfLines={1} ellipsizeMode='tail'>
            Q
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.title, { fontWeight: 'bold', fontSize: 20, marginRight: 30 }]} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
          <Text style={{ fontSize: 16, paddingBottom: -10 }}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const HomeScreen: FunctionComponent<Props> = (props) => {

  return (
    <View style = {{backgroundColor:"white"}}>
      <View style={{ width: '100%', height: 180, backgroundColor: '#20129D', paddingTop:20 }}>
        <View style={{ width: 50, aspectRatio: 1, backgroundColor: 'grey', marginLeft: 20, marginTop: 20, borderRadius: 50 }}>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={{ marginLeft: 20, marginTop: 15, color: 'white', fontSize: 25 }}>
            Hello,
          </Text >
          <Text style={{ marginTop: 15, color: 'white', fontSize: 25, fontWeight: 'bold', marginLeft: 6 }}>Ahsan Mahboob</Text>
        </View>
        <Text style={{ marginLeft: 20, marginTop: 10, color: 'white', fontSize: 20 }}>
          {/* Welcome to DigiMine Live Chat... */}
        </Text>
      </View>
      <View>
        <View style={{ backgroundColor: '#20129D' }}>
          <Text style={{ backgroundColor: '#FFFFFF', padding: 10, fontSize: 20, fontWeight: 'bold', color: 'black', paddingLeft: 15 }}>Welcome to mastermine live chat.</Text>
        </View>
        <View style={{ flexDirection: 'column', flexWrap: 'wrap', marginTop: 0, height:490 }}>

          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} location={item.location} logo={item.logo} />}
            keyExtractor={item => item.id}
          />
        </View>

        {/* <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 10, height: 'auto', alignContent: 'center', width: '95%', margin: 10, padding: 10 }} onPress={() => props.navigation.navigate("UserChat")}>
          <Text style={{ color: 'white', alignItems: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Contact an agent!</Text>
        </TouchableOpacity> */}

      </View>
      <View>
      <TouchableOpacity style={{ backgroundColor: '#20129D', borderRadius: 10, height: 'auto', alignContent: 'center', width: '95%', margin: 10, padding: 10 }} onPress={() => props.navigation.navigate("UserChat")}>
          <Text style={{ color: 'white', alignItems: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', fontWeight: 'bold' }}>Select Your Mining Partner</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexWrap: 'nowrap',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,

  },
});


export default HomeScreen;