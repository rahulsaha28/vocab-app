import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detail" />
      <Stack.Screen name="videoDetail" />
      <Stack.Screen name="phrase" />
      <Stack.Screen
        name="ielts"
        options={{ headerTitle: "IELTS WRITTEN WORD" }}
      />
      <Stack.Screen
        name="ieltsWriting"
        options={{ headerTitle: "IELTS WRITING STRUCTURE" }}
      />
      <Stack.Screen
        name="topicsDetail"
        options={{ headerTitle: "TOPICS DETAIL" }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
