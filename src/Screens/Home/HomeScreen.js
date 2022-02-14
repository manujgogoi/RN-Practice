import { View, Text, StyleSheet, Pressable } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeTab from "./Tabs/HomeTab";
import ChatTab from "./Tabs/ChatTab";
import ArticleTab from "./Tabs/ArticleTab";
// import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#166478" }}
      activeColor="#f0edf6"
      inactiveColor="#6f9f9f"
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatTab}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Article"
        component={ArticleTab}
        options={{
          tabBarLabel: "Article",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
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

export default HomeScreen;
