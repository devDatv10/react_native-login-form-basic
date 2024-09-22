import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRefreshing = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    const postData = {
      title: postTitle,
      body: postBody,
    };

    console.log("Data post API:", postData);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });

    const newPost = await response.json();
    setPostList([newPost, ...postList]);
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000fff"></ActivityIndicator>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title post"
          value={postTitle}
          onChangeText={setPostTitle}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Enter body post"
          value={postBody}
          onChangeText={setPostBody}
        ></TextInput>
        <Button
          title={isPosting ? "Adding..." : "Add Post"}
          onPress={addPost}
          disabled={isPosting}
        ></Button>
      </View>
      <View style={styles.listContainer}>
        {postList.length > 0 ? (
          <FlatList
            data={postList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Text>No Post NotFound</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}> Header Post</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}> Bottom Post</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefreshing}
          />
        ) : (
          <Text style={styles.noDataText}>No data available</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },

  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },

  titleText: {
    fontSize: 30,
  },

  bodyText: {
    fontSize: 24,
    color: "#666666",
  },

  noDataText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },

  headerText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 5,
  },

  footerText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
