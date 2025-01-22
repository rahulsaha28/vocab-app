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
          fontSize: 20,
          textTransform: "capitalize",
        },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Home" }} />
      <MaterialTopTabs.Screen name="item" options={{ title: "Phrases" }} />
    </MaterialTopTabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
