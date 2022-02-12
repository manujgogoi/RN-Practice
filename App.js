import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // Event Handlers
  // ================================
  const handlePress = () => {
    Alert.alert(
      "Warning!",
      "The name must be longer than 3 characters",
      [
        {
          text: "Don't show again",
          onPress: () => console.warn("Don't show again!"),
        },
        { text: "Cancel", onPress: () => console.warn("Cancel!") },
        { text: "OK", onPress: () => console.warn("OK pressed!") },
      ],
      { cancelable: true, onDismiss: () => console.warn("Alert closes!") }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Text style={styles.text}>Enter your name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Text"
          placeholderTextColor={"#fff"}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={[styles.textInput, { height: 200 }]}
          multiline
          textAlignVertical="top"
          placeholder="Address"
          placeholderTextColor={"#fff"}
          onChangeText={(value) => setAddress(value)}
        />
        <Text style={styles.text}>You have entered {name}.</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={"#fff"}
        />
        <Pressable
          android_ripple={{ color: "#00f" }}
          onPress={handlePress}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#6a2a78" : "#666" },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Click Me!</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#222",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 8,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
  },
  textInput: {
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 18,
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default App;
