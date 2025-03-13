import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { font, size } from "../config/GlobalSetting";

const { padding, height, width } = size;
const IELTSItem = ({ item, id }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "ielts",
          params: { id },
        });
      }}
      style={[styles.content]}
    >
      <Text style={[styles.title]}>
        {id + 1}. {item["Word"]}
      </Text>
    </TouchableOpacity>
  );
};

export default IELTSItem;

const styles = StyleSheet.create({
  content: {
    height: height / 12,
    padding,
    backgroundColor: "white",
    marginVertical: padding,
    borderRadius: padding,
  },
  title: {
    fontSize: font["largeFont"],
  },
});
