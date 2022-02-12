import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <Text style={styles.text}>Hello</Text>
      </View>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Click Me!</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        hardwareAccelerated
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Hello I am a Modal!!</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal End */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#63e0d4",
  },
  text: {
    color: "#2f2f2f",
    fontSize: 66,
  },
  button: {
    backgroundColor: "#313ab0",
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
  },
  modalBackdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000aa",
  },
  modalView: {
    backgroundColor: "pink",
    width: 300,
    height: 400,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
