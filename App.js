import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Platform,
  RefreshControl,
} from "react-native";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Dipankar", age: 28 },
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

  const [sectionData, setSectionData] = useState([
    {
      category: "Grocery",
      data: [
        { id: 1, title: "Potato" },
        { id: 2, title: "Oniion" },
        { id: 3, title: "Masoor Dal" },
        { id: 4, title: "Biscuit" },
      ],
    },
    {
      category: "Electronics",
      data: [
        { id: 1, title: "Smartphone" },
        { id: 2, title: "Feature Phone" },
        { id: 3, title: "LED TV" },
        { id: 4, title: "Monitor" },
      ],
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  // Refresh Event Handler
  // ==========================================
  const onRefresh = () => {
    setRefreshing(true);
    setItems([
      ...items,
      {
        id: Math.floor(Math.random() * 1000).toString(),
        name: "Ajay",
        age: "55",
      },
    ]);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {/* Refresh control */}
      <View style={styles.itemsContainer}>
        <SectionList
          sections={sectionData}
          numColumns={1}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.category}>{section.category}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#992222"]}
            />
          }
        />
      </View>
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
  category: {
    color: "#fff",
    fontSize: 30,
  },
  itemText: {
    fontSize: 25,
  },
});

export default App;
