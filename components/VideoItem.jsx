import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, font, size } from "../config/GlobalSetting.js";

const { largeFont } = font;
const { padding, height } = size;

const VideoItem = ({ Type, index, video_id }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({ pathname: "videoDetail", params: { videoId: video_id } });
      }}
      style={[styles.container]}
    >
      <Text style={[styles.text]}>{Type}</Text>
    </TouchableOpacity>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding,
    paddingVertical: 20,
    height: height / 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: padding,
    borderRadius: padding,
  },
  text: {
    textAlign: "center",
    fontSize: largeFont,
    fontWeight: "500",
    color: colors["color-3"],
  },
});
