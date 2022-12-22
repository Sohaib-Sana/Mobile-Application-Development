
import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';


export default function TextFields(){
    const [textEmail, onChangeTextEmail] = React.useState("");
    const [textPass, onChangeTextPass] = React.useState("");

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image source={require('../assets/user.jpg')} style={{width:25,height:40}}/>
                <View style={{left:10}}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(value)=>{onChangeTextEmail(value)}}
                    value={textEmail}
                    placeholder= "Email"
                />
                </View>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/pass.jpg')} style={{width:25,height:40}}/>
                <View style={{left:10}}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(value)=>{onChangeTextPass(value)}}
                    value={textPass}
                    placeholder= "Password"
                />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        top: 20,
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
    },
    TextInput : {
        top: 8, 
        left: 5, 
        color: 'white', 
        borderBottomWidth: 1, 
        borderBottomColor: "white"
    }
});
