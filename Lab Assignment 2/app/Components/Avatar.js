
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Avatar(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Admin Login Page
            </Text>
            <Image 
                source={require('../assets/avatar.png')}
                style={styles.avatar}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 140,
        flex: 4,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4660',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    avatar:{
        borderRadius:80,
        top: 20
    }
});


