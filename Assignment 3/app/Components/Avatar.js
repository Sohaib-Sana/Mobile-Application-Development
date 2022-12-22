import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Avatar(){
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/Sohaib.JPG')}
                style={styles.avatar}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10 ,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e4660',
    },

    avatar:{
        width: 100,
        height: 100,
        borderRadius:80,
        // top: 20,
        backgroundColor: 'green'
    }
});


