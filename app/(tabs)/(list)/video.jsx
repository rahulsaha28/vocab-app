import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStructureVocab } from "../../../store/useWritingStructureVocab.js";

const Video = () => {
  const { structureVocab, setStructureVocab } = useStructureVocab(
    (state) => state
  );
  useEffect(() => {
    setStructureVocab();
    console.log("hi", structureVocab);
  }, []);
  return (
    <View>
      <FlatList
        data={structureVocab}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "ieltsWriting",
                params: {
                  itemID: index,
                  text: item["Meaning"] || null,
                },
              });
            }}
            style={[styles.item]}
          >
            <Text style={styles.title}>
              {index + 1}. {item["Word"]}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
});
