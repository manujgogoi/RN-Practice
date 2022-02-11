import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Manuj Gogoi", age: 36 },
    { id: 2, name: "Dinesh Gowala", age: 35 },
    { id: 3, name: "Bhaskar Baruah", age: 36 },
    { id: 4, name: "Uttam Sarkar", age: 35 },
    { id: 5, name: "Manash Saikia", age: 36 },
    { id: 6, name: "Diganta Saikia", age: 39 },
    { id: 7, name: "Pranab Kalita", age: 40 },
    { id: 8, name: "Pabitra", age: 33 },
    { id: 9, name: "Niren", age: 26 },
    { id: 10, name: "Hemanta", age: 20 },
    { id: 11, name: "Gautam", age: 34 },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  // Refresh Event Handler
  // ==========================================
  const onRefresh = () => {
    setRefreshing(true);
    setItems([
      ...items,
      { id: Math.floor(Math.random() * 1000), name: "Ajay", age: 55 },
    ]);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {/* Refresh control */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff0033"]}
          />
        }
      >
        <View style={styles.itemsContainer}>
          {items.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>Age: {item.age}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#42f5ce",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  itemsContainer: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "blue",
  },
  item: {
    flex: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  name: {
    fontSize: 50,
    color: "#666",
  },
  age: {
    fontSize: 30,
    color: "#666",
  },
});

export default App;
