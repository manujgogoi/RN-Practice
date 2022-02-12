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
  const [sectionData, setSectionData] = useState([
    {
      title: "Title 1",
      data: [{ item: "Item 1-1" }, { item: "Item 1-2" }],
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  // Refresh Event Handler
  // ==========================================
  const onRefresh = () => {
    setRefreshing(true);
    const length = sectionData.length;
    setSectionData([
      ...sectionData,
      {
        title: `Title ${length + 1}`,
        data: [
          { item: `Item ${length + 1}-1` },
          { item: `Item ${length + 1}-2` },
        ],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <SectionList
          sections={sectionData}
          numColumns={1}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.title}>{section.title}</Text>
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
  title: {
    color: "#fff",
    fontSize: 30,
  },
  itemText: {
    fontSize: 25,
  },
});

export default App;
