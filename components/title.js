import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ titleText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '900',
    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d2f7fc",
        borderRadius: 10
    },
});