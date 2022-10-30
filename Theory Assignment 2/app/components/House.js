import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const House = (props) => {
    return (
        <View style={[styles.wrapper, props.style]}>
            <View style={[styles.container, props.style]}>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 2,
        width: 210,
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"flex-start",
        backgroundColor: 'hotpink',
    },
    container: {
        width: '68%',
        height: '68%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
        // opacity:"10%"
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'white'
    }
});

export default House;
