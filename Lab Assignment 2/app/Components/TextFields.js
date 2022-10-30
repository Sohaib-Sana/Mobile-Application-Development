
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';


export default function TextFields(){
    const [textEmail, onChangeTextEmail] = React.useState("Admin");
    const [textPass, onChangeTextPass] = React.useState("*******");

    return (
        <View style={styles.wrapper}>
        <View style={styles.container}>
            <Image source={require('../assets/user.jpg')} style={{width:40,height:40}}/>
            <View style={{left:10}}>
            <TextInput
                style={{top: 8, left: 5, color: 'white'}}
                onChangeText={onChangeTextEmail}
                value={textEmail}
            />
                <Text style={{bottom:3, color:'white'}}>____________________________</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image source={require('../assets/pass.jpg')} style={{width:40,height:40}}/>
            <View style={{left:10}}>
            <TextInput
                style={{top: 8, left: 5, color: 'white'}}
                onChangeText={onChangeTextPass}
                value={textPass}
            />
                <Text style={{bottom:3, color:'white'}}>____________________________</Text>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        top: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "blue"
    },
    wrapper: {
        left: -10,
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center',
        // backgroundColor: "red"
    }
});
