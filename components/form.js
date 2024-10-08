import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({addHandler}) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впишите задачу..."
            />
            <Button
                color= "#000080"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        width: "60%",
        textAlign: "center",
        color: "#fff",
        marginTop: "3%",
        marginBottom: "3%",
        paddingTop: "1%",
        paddingBottom: "1%",
    },
});