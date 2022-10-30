import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Triangle = (props) => {
    return <View style={[styles.triangle, props.style]} />;
  };

const CenterHome = () => {
    return (
        <View style={styles.container}>
            <Triangle style={styles.triangleUp}/>
            <Triangle style={styles.triangleDown}/>
            <Triangle style={styles.triangleLeft}/>
            <Triangle style={styles.triangleRight}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: 105,
      height: 105,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: 'black',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 52.5,
        borderRightWidth: 52.5,
        borderBottomWidth: 52.5,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        position: "absolute"
      },
      triangleUp: {
        top: 52.5,
        borderBottomColor: 'red',
      },
      triangleDown: {
        bottom: 52.5,
        borderBottomColor: 'yellow',
        transform: [{ rotate: "180deg" }],
      },
      triangleLeft: {
        right: 26,
        borderBottomColor: 'green',
        transform: [{ rotate: "90deg" }],
      },
      triangleRight: {
        left: 26,
        borderBottomColor: 'blue',
        transform: [{ rotate: "270deg" }],
      },
});

export default CenterHome;