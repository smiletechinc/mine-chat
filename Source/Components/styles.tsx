import { StyleSheet } from "react-native"

export const txtLogin = StyleSheet.create({
    txtBox:{
        fontSize: 16,
        borderWidth: 0,
        borderRadius:10,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        marginHorizontal: '15%',
        marginVertical:20,
        paddingHorizontal:10,
    },
})

export const txtSignUp = StyleSheet.create({
    txtBox:{
        fontSize: 16,
        borderWidth: 0,
        borderRadius:10,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        marginHorizontal: '15%',
        marginVertical:12,
        paddingHorizontal:10,
    },
})

export const btnLogin = StyleSheet.create({
    btn: {
        fontSize: 20,
        borderWidth: 0,
        borderRadius:50,
        backgroundColor: 'darkblue',
        alignItems: 'center',
        marginHorizontal: '15%',
        marginVertical:10,
        paddingVertical: 10,
        marginTop: 20,
        
        //height: 30
    }
})
export const ic = StyleSheet.create({
    icon:{
        width:100, 
        height:100, 
        backgroundColor:'black', 
        alignSelf:'center', 
        marginTop:150
    }
})