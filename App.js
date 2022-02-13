import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
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
          <TextInput style={styles.textInput} placeholder="e.g Manuj Gogoi" />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  grediant: {
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    padding: 1,
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
  },
});

export default App;
