import { Text, View, StyleSheet } from 'react-native'

export default function Box({children, style}){
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor:"#fff",
        padding:20,
        flexGrow: 1
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }
})