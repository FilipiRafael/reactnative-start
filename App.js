import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>My App</Text>
      <ScrollView>
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 82,
  },
  title: {
    color: "#fff",
    fontSize: "24",
    marginBottom: 24,
  },
});
