import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./src/Screens/Home/HomeScreen";
import ProductScreen from "./src/Screens/ProductScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
