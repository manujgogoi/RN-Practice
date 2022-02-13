import { View, Text, StyleSheet, Pressable } from "react-native";

const ProductScreen = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Screen</Text>
      <Pressable
        onPress={handleNavigation}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#000" : "#24a0ed" },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#66ffff",
  },
  title: {
    fontSize: 45,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ProductScreen;
