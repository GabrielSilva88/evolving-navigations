import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text> Pagina Sobre. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});