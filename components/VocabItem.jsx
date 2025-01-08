import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, font, size } from "../config/GlobalSetting";
import { useVocabStore } from "../store/useVocabStore";
import Player from "./Player";
import Rating from "./Rating";

const { padding, height, width } = size;
const { mediumFont, largeFont } = font;

const VocabItem = ({ item, index }) => {
  const [isItemHide, setIsItemHide] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { show } = useVocabStore((state) => state);

  useEffect(() => {
    if (show == false) {
      setIsItemHide(false);
    }
  }, [show]);

  const footerTag = item["Synonym"] ? item["Synonym"].split(";") : [];

  const toggleItemVisibility = () => {
    setIsItemHide((pre) => !pre);
  };
  return (
    <View style={[styles.cartContainer]}>
      <View style={[styles.cartHeading]}>
        <Text style={[styles.headingStyle]}>{item["Word"]}</Text>
        {item["rate"] && <Rating rating={parseInt(item["rate"])} />}
        <View style={[styles.indexStyle]}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            {index + 1}
          </Text>
        </View>
      </View>
      <Pressable onPress={toggleItemVisibility} style={[styles.cartBody]}>
        {show && !isItemHide ? (
          <Text style={[styles.bodyText]}>{item["Meaning"]}</Text>
        ) : isItemHide ? (
          <Text style={[styles.bodyText]}>{item["Meaning"]}</Text>
        ) : (
          <Text></Text>
        )}
      </Pressable>
      <View style={[styles.footerBody]}>
        {footerTag.map((item, i) => (
          <Text style={[styles.footerTag]} key={`tag-${i}`}>
            {item}
          </Text>
        ))}
      </View>
      <View style={[styles.footerBase]}>
        {item["VideoID"] && (
          <Pressable onPress={() => setModalVisible(true)}>
            <AntDesign name="play" size={32} color={colors["color-4"]} />
          </Pressable>
        )}
      </View>
      <View>
        {item["Sentence"] && (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "detail",
                params: { index },
              });
            }}
          >
            <FontAwesome5 name="list" size={24} color="green" />
          </TouchableOpacity>
        )}
      </View>
      {item["VideoID"] && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={[styles.modalContainerBack]}>
            <View style={[styles.modalContainer]}>
              <Pressable
                style={{ backgroundColor: "rgba(0,0,0,.5)", borderRadius: 5 }}
                onPress={() => setModalVisible(false)}
              >
                <Entypo name="cross" size={32} color="white" />
              </Pressable>
              <Player videoID={item["VideoID"]} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default VocabItem;

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: largeFont,
    fontWeight: "bold",
  },
  indexStyle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: colors["color-3"],
  },
  cartContainer: {
    padding,
    marginVertical: padding / 2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: padding / 2,
    height: height / 3.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cartHeading: {
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: padding / 2,
  },
  cartBody: {
    backgroundColor: "tomato",
    padding,
    borderRadius: padding,
    marginVertical: padding / 2,
  },
  bodyText: {
    fontSize: mediumFont + 4,
    color: "white",
  },
  footerBody: {
    flexDirection: "row",
    marginVertical: padding,
  },
  footerTag: {
    backgroundColor: colors["color-2"],
    color: colors["color-3"],
    fontSize: mediumFont,
    padding,
    marginRight: 20,
    borderRadius: padding,
    fontWeight: "700",
  },
  footerBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding,
  },
  modalContainerBack: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.56)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    width: width * 0.8,
    height: 500,
    alignItems: "center",
    justifyContent: "center",

    //overflow: "hidden",
  },
});
