import { View, Text, Platform, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([{ id: 1, name: "Avengers" }]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text>App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17a8d4",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
