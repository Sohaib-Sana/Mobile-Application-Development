import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { storeData,getData } from '../Components/localStorage';

export default function ProfileScreen({navigation, route}){
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Profile</Text>
            <Text>Muhammad Sohaib Sana</Text>
            <Text>Sp20-Bse-015</Text>
            <Text>Sp20-bse-015@cuiatk.edu.pk</Text>
            <Text>0310-5100606</Text>
            <Text>20 Years</Text>
            <Text>Male</Text>
            <Pressable style={styles.Button} onPress={()=>{
                storeData({key:'status', value:'loggedOut'});
                navigation.navigate('Login');
                }}>Log Out</Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignItems: 'start', 
    },
    Button: {
        margin: 20,
        alignItems: "center",
        backgroundColor: "dodgerblue",
        paddingHorizontal: 20,
        paddingVertical: 10
      }
});
