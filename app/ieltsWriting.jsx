import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors, size } from "../config/GlobalSetting";
import { useStructureVocab } from "../store/useWritingStructureVocab";

const { padding } = size;
const ieltsWriting = () => {
  const { itemID, text } = useLocalSearchParams();
  const { str, setStr } = useStructureVocab((state) => state);
  useEffect(() => {
    setStr(itemID);
  }, [itemID]);
  return (
    <SafeAreaView>
      <Text>ieltsWriting</Text>
      {str["Total"] && (
        <FlatList
          data={str["Total"]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={[styles.container]}>
              {item["Structure"] && (
                <Text
                  style={[
                    styles.title,
                    {
                      color: "blue",
                    },
                  ]}
                >
                  {item["Structure"]}
                </Text>
              )}
              {text && <Text style={[styles.subText]}>{text}</Text>}
              {item["Use"] && (
                <Text style={[styles.subText]}>{item["Use"]}</Text>
              )}
              {item["Example"] && (
                <View>
                  <FlatList
                    data={item["Example"]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <View style={[styles.item]}>
                        {item["Sentence"] && (
                          <Text style={[styles.subTitle]}>
                            {item["Sentence"]}
                          </Text>
                        )}
                        {item["Meaning"] && (
                          <Text style={[styles.border]}></Text>
                        )}
                        {item["Meaning"] && (
                          <Text style={[styles.subTitle]}>
                            Meaning: {item["Meaning"]}
                          </Text>
                        )}
                      </View>
                    )}
                  />
                </View>
              )}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default ieltsWriting;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  item: {
    padding: 10,
    backgroundColor: "white",
    marginVertical: 8,
  },
  title: {
    fontSize: 25,
  },
  subTitle: {
    fontSize: 20,
  },
  subText: {
    backgroundColor: colors["h-yellow"],
    padding,
    fontSize: padding * 2,
    marginHorizontal: padding,
    borderRadius: padding,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: "black",
    marginVertical: 8,
  },
});
