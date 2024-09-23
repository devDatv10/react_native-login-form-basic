import { View, Text, StyleSheet, Button } from "react-native";


export default function CartScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cart Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

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