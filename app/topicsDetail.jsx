import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../config/GlobalSetting";
import { useTopicsDetailStore } from "../store/useIeltsTopicsStore";

const topicsDetail = () => {
  const { id } = useLocalSearchParams();
  const { eachTopicDetail, getEachTopicDetail } = useTopicsDetailStore(
    (state) => state
  );
  useEffect(() => {
    getEachTopicDetail(id);
  });
  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={eachTopicDetail["Subtopics"]}
      renderItem={({ item, index }) => (
        <View style={[styles.card]}>
          {item["Type"] && (
            <View>
              <Text>
                {item["Type"] == "Positive" && (
                  <FontAwesome5 name="plus" size={10} />
                )}
                {item["Type"] == "Negative" && (
                  <Entypo name="minus" size={15} />
                )}
              </Text>
            </View>
          )}
          {item["Word"] && (
            <View
              style={[
                {
                  padding: 10,
                  margin: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                },
              ]}
            >
              <Text style={[styles.text, { color: colors["color-3"] }]}>
                {item["Word"]}
              </Text>
              <View>
                <Text style={[styles.subText]}>{item["Meaning"]}</Text>
              </View>
            </View>
          )}
          {
            <FlatList
              keyExtractor={(item, index) => index}
              data={item["Example"]}
              renderItem={({ item, index }) => (
                <View style={[styles.listContainer]}>
                  {item["Sentence"] && (
                    <Text style={[styles.listText]}>
                      <AntDesign
                        color={colors["color-4"]}
                        name="checkcircle"
                        size={20}
                      />{" "}
                      {item["Sentence"]}
                    </Text>
                  )}
                </View>
              )}
            />
          }
        </View>
      )}
    />
  );
};
export default topicsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  subText: {
    fontSize: 16,
    color: colors["color-text"],
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 20,
  },
  list: {
    padding: 10,
    fontSize: 20,
    backgroundColor: "white",
  },
  listContainer: {
    padding: 10,
  },
  listText: {
    fontSize: 20,
  },
});
