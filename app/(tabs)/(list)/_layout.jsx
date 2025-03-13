import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          textTransform: "capitalize",
        },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Home" }} />
      <MaterialTopTabs.Screen name="item" options={{ title: "Phrases" }} />
      <MaterialTopTabs.Screen name="list" options={{ title: "Writing" }} />
    </MaterialTopTabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
