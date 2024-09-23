import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation, route }) {
  // Xử lý khi `post` được cập nhật
  React.useEffect(() => {
    if (route.params?.post) {
      console.log("Post updated:", route.params.post);
      // Ví dụ: Gửi post đến server nếu cần
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={styles.text}>Post: {route.params?.post}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
  },
});
