import { View, Text } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import Temp from "./src/components/sample/Temp";

const App = () => {
  return (
    <ToastProvider
      renderType={{
        custom: (toast) => (
          <View
            style={{ backgroundColor: "#666", padding: 10, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>{toast.message}</Text>
          </View>
        ),
      }}
    >
      <Temp />
    </ToastProvider>
  );
};

export default App;
