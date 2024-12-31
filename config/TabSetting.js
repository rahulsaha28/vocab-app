import { Entypo, Feather } from "@expo/vector-icons";
import { size } from "./GlobalSetting";

export const TabItem = [
  {
    label: "index",
    name: "Home",
    icon: (color) => <Feather name="home" size={size.iconSize} color={color} />,
  },
  {
    label: "about",
    name: "About",
    icon: (color) => (
      <Entypo name="info-with-circle" size={size.iconSize} color={color} />
    ),
  },
];
