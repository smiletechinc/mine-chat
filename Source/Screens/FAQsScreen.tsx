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
type Props = {
    navigation: any;
}
const FAQsScreen: FunctionComponent<Props> = (props) => {
    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{ width: '100%', height: 'auto', backgroundColor: 'skyblue', padding: 10, marginBottom: 4 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center', paddingVertical: 8 }}>
                    Frequently Asked Questions (FAQs)
                </Text>
            </View>
            <View>
                <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, marginHorizontal: 6, marginVertical: 2, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            Q
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ padding: 8, margin: 6, backgroundColor: '#DEDEDE', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', width: 50, borderRadius: 50, aspectRatio: 1 }}>
                        <Text style={{ fontSize: 28, color: 'white', alignContent: 'center', alignSelf: 'center', textAlignVertical: 'center', verticalAlign: 'middle', flex: 1 }}>
                            1
                        </Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Title one</Text>
                        <Text style={{ fontSize: 16 }}>Description One</Text>
                    </View>
                </View>
            </View>



        </ScrollView>
    )
}
export default FAQsScreen;