import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Path = (props) => {

    const boxes = [];
    for (let index = 0; index < 18; index++) {
        if (index==2 || index>6&&index<12 || index==13){
            boxes.push(<View style={[styles.box, props.style]}></View>);
        }else{boxes.push(<View style={styles.box}></View>);}
    }
    return (
        <View style={[styles.wrapper,props.style]}>
            {boxes}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexWrap: 'wrap',
        flex:1,
        backgroundColor: '#2c3e50',
    },
    box: {
        width:35,
        height:35,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.1
    }
});

export default Path;
