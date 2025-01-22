import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="detail" />
      <Stack.Screen name="videoDetail" />
      <Stack.Screen name="phrase"/>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
