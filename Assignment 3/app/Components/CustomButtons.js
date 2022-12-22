
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({Button, buttonPressed}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={buttonPressed}>
                <Text>
                    {Button}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quitButton} onPress={()=>{console.log('Quit Button tapped.')}}>
                <Text>
                    QUIT
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginButton: {
        alignItems: "center",
        backgroundColor: "dodgerblue",
        paddingHorizontal: 100,
        paddingVertical: 10
      },
      quitButton: {
        top: 10,
        alignItems: "center",
        backgroundColor: "tomato",
        paddingHorizontal: 105,
        paddingVertical: 9
      },
    container: {
        bottom: 20,
        flexDirection: "column",
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4660',
    },
});

export default CustomButton;
