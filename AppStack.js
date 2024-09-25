import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { View, Text, StyleSheet, Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home Page",
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Done"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Cart Page",
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            title: "Create Post Page",
            headerBackTitle: "Back",
            headerBackTitleStyle: { fontSize: 18 },
            headerStyle: { backgroundColor: "#333" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
