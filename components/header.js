import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#000080",
        width: "100%",
        
    },

    text: {
        textAlign: "center",
        padding: "4%",
        fontSize: "22px",
        color: "#fff",
    },
});