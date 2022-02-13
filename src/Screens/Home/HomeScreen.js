import { View, Text, StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./Tabs/HomeTab";
import ChatTab from "./Tabs/ChatTab";
import ArticleTab from "./Tabs/ArticleTab";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "beer";
            size = focused ? 30 : 25;
            color = focused ? "#f0f" : "#555";
          } else if (route.name === "Chat") {
            iconName = "cafe";
            size = focused ? 30 : 25;
            color = focused ? "#f0f" : "#555";
          } else if (route.name === "Article") {
            iconName = "document";
            size = focused ? 30 : 25;
            color = focused ? "#f0f" : "#555";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Chat" component={ChatTab} />
      <Tab.Screen name="Article" component={ArticleTab} />
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
