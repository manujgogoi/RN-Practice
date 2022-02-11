import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.row1Col1}>
          <Text>1</Text>
        </View>
        <View style={styles.row1Col2}>
          <Text>2</Text>
        </View>
        <View style={styles.row1Col3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <Text>4</Text>
      </View>
      <View style={styles.row3}>
        <Text>5</Text>
      </View>
      <View style={styles.row4}>
        <View style={styles.row4Col1}>
          <Text>6</Text>
        </View>
        <View style={styles.row4Col2}>
          <Text>7</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#229999",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  row1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#9988aa",
  },
  row1Col1: {
    flex: 1,
    backgroundColor: "#03ecfc",
    alignItems: "center",
    justifyContent: "center",
  },
  row1Col2: {
    flex: 2,
    backgroundColor: "#c203fc",
    alignItems: "center",
    justifyContent: "center",
  },
  row1Col3: {
    flex: 3,
    backgroundColor: "#f8fc03",
    alignItems: "center",
    justifyContent: "center",
  },
  row2: {
    flex: 1,
    backgroundColor: "#fc030f",
    alignItems: "center",
    justifyContent: "center",
  },
  row3: {
    flex: 1,
    backgroundColor: "#03fc0b",
    alignItems: "center",
    justifyContent: "center",
  },
  row4: {
    flex: 5,
    flexDirection: "row",
  },
  row4Col1: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  row4Col2: {
    flex: 1,
    backgroundColor: "#3333ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
