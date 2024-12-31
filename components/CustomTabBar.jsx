import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors, size } from "../config/GlobalSetting";

const { padding, tabHeight, tabWidth } = size;
const CustomTabBar = ({ state, descriptors, navigation, tabItem }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          padding,
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Pressable
            onPress={onPress}
            key={route.key}
            style={[
              {
                backgroundColor: isFocused ? colors["bg-color"] : "white",
                width: tabWidth,
                height: tabHeight,
                borderRadius: tabHeight / 2,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            {tabItem[index].icon(
              isFocused ? colors["active-color"] : colors["bg-color"]
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({});
