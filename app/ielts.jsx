import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { colors, font, size } from "../config/GlobalSetting";
import { useWritingStore } from "../store/useWritingStore";

const { padding } = size;
const ielts = () => {
  const { id } = useLocalSearchParams();
  const { IELTSItem, setIELTSItem } = useWritingStore((state) => state);
  useEffect(() => {
    setIELTSItem(id);
  }, [id]);
  return (
    <View>
      {IELTSItem["Total"] && (
        <FlatList
          data={IELTSItem["Total"]}
          keyExtractor={(item, index) => "Total" + index}
          renderItem={({ item, index }) => (
            <View key={index} style={[styles.sentenceContainer]}>
              {item["Replace"] && (
                <Text style={[styles.title]}>{item["Replace"]}</Text>
              )}
              {item["Structure"] && (
                <Text style={[styles.subText]}>STR: {item["Structure"]}</Text>
              )}
              {item["Meaning"] && (
                <Text style={[styles.subText]}>Meaning: {item["Meaning"]}</Text>
              )}
              {item["Example"] && (
                <FlatList
                  data={item["Example"]}
                  keyExtractor={(item, index) => "Example" + index}
                  renderItem={({ item, index }) => (
                    <View key={index} style={[styles.subSentenceContainer]}>
                      <Text
                        style={[styles.text, { color: colors["color-text"] }]}
                      >
                        {item["Sentence"]}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ielts;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: font["largeFont"],
    padding,
    width: "50%",
    backgroundColor: colors["yellow"],
    borderRadius: padding,
  },
  titleContainer: {
    alignItems: "center",
  },
  sentenceContainer: {
    backgroundColor: "white",
    borderRadius: padding,
    padding: padding,
    margin: padding,
  },
  subSentenceContainer: {
    backgroundColor: colors["bg-color-text"],
    borderRadius: padding,
    padding: padding,
    margin: padding,
  },
  text: {
    fontSize: font["largeFont"],
  },
  subText: {
    fontSize: 1.7 * font["smallFont"],
    color: "gray",
    padding: padding / 2,
  },
});
