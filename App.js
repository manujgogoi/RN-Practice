import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TextInput,
  Pressable,
  Alert,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowheight = Dimensions.get("window").height;
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.length < 3) {
      setSubmitted(false);
      Alert.alert(
        "Name error",
        "Minimum 3 characters long",
        [
          {
            text: "Cancel",
            onPress: () => console.warn("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.warn("OK Pressed") },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      setSubmitted(true);
    }
  };
  return (
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      style={{ width: windowWidth, height: windowheight }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View>
          <Text>Enter your name</Text>
          <LinearGradient
            colors={[
              "#00FFFF",
              "#17C8FF",
              "#329BFF",
              "#4C64FF",
              "#6536FF",
              "#8000FF",
            ]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.grediant}
          >
            <TextInput
              style={styles.textInput}
              placeholder="e.g Manuj Gogoi"
              onChangeText={(value) => setName(value)}
            />
          </LinearGradient>

          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "#1183ca" : "#24A0ED" },
              styles.button,
            ]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <View style={{ alignItems: "center" }}>
            {submitted ? (
              <Image
                source={require("./assets/images/HappyThumbsUp.png")}
                style={styles.image}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("./assets/images/Angry.png")}
                style={styles.image}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 8,
  },
  grediant: {
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 1,
    paddingVertical: 2,
  },
  textInput: {
    flex: 1.0,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#333",
    width: "99%",
    margin: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  button: {
    marginVertical: 5,
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default App;
