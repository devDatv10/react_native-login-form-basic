import { View, Text, StyleSheet, Button } from "react-native";


const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Setting Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: "bold"
    }
})