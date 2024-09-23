import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";

export default function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.input}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 200,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
});
