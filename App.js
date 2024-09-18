import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  Platform,
  SafeAreaView,
  TextInput,
  Switch,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Box from "./components/Box";
import CustomFunction from "./components/Component";
import { useState, useEffect } from "react";
const imageLogo = require("./assets/adaptive-icon.png");

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", email, password);
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.form}>
        <Image source={require("./assets/icon.png")} style={styles.image} />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        {errors.email ? (
          <Text style={styles.errorsText}>{errors.email}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        {errors.password ? (
          <Text style={styles.errorsText}>{errors.password}</Text>
        ) : null}
        <Button style={styles.button} title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  form: {
    backgroundColor: "#fff",
    shadowColor: "#333",
    borderRadius: 10,
    padding: 20,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  image: {
    height: 200,
    width: 200,
    marginBottom: 50,
    alignSelf: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },

  errorsText: {
    color: "red",
    marginBottom: 15,
    fontSize: 16
  },

  // button: {
  //   height: 30,
  //   width: 30,
  //   backgroundColor: "green"
  // }
});
