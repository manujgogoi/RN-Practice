import {
  View,
  Text,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useToast } from "react-native-toast-notifications";

const Temp = () => {
  const toast = useToast();

  const handlePress = () => {
    toast.show(
      "Button clicked !!",
      {
        type: "custom",
        placement: "bottom",
        offset: 300,
        duration: 8000,
        animationType: "zoom-in",
      },
      { data: { title: "Toast Title" } }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text style={styles.text}>Enter Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Rajib Gogoi"
          placeholderTextColor={"#fff"}
        />
        <Pressable
          style={styles.button}
          android_ripple={{ color: "#ff0033" }}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Click Me!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17a8d4",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 8,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  textInput: {
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 3,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    textTransform: "uppercase",
    paddingVertical: 10,
  },
});

export default Temp;
