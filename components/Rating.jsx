import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/GlobalSetting";

const Rating = ({ rating }) => {
  return (
    <View style={[styles.container]}>
      {Array(rating)
        .fill(0)
        .map((item, index) => (
          <AntDesign
            key={index}
            name="star"
            size={14}
            color={colors["yellow"]}
          />
        ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
