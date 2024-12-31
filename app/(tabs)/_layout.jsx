import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import CustomTabBar from "../../components/CustomTabBar";
import CustomTextInput from "../../components/CustomTextInput";
import { size } from "../../config/GlobalSetting";
import { TabItem } from "../../config/TabSetting";

const { padding, tabHeight, tabWidth } = size;

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} tabItem={TabItem} />}>
      {TabItem.map(({ name, label, icon }) => (
        <Tabs.Screen
          options={{
            headerRight: () => (label === "index" ? <CustomTextInput /> : null),
            title: name,
          }}
          key={name}
          name={label}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
