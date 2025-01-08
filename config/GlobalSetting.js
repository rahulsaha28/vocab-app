import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const colors = {
  "bg-color": "rgb(212, 211, 221)",
  "active-color": "rgb(144, 125, 205)",
  "color-1": "rgb(154, 126, 221)",
  "color-2": "rgb(242, 244, 246)",
  "color-3": "rgb(250, 93, 66)",
  "color-4": "rgb(109, 74, 228)",
  yellow: "rgb(247, 215, 47)",
  "h-yellow": "rgb(255, 229, 0)",
};

export const size = {
  iconSize: 24,
  tabWidth: 60,
  tabHeight: 60,
  padding: 10,
  width,
  height,
};

export const font = {
  smallFont: 12,
  mediumFont: 16,
  largeFont: 24,
};
