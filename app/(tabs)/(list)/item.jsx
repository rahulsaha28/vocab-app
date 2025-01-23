import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { usePhraseStore } from "../../../store/usePhraseStore";
import PhraseItem from "../../../components/PhraseItem";
import { size } from "../../../config/GlobalSetting";
const max = 5;
const { height, padding }= size
const item = () => {
  const { phraseStore,setPhrase } = usePhraseStore(state=>state);
    useEffect(()=>{
        setPhrase(max);
    },[])
  return (
    <View>
      <FlatList keyExtractor={(item)=>item['word']}
       data={phraseStore}
      renderItem={({item, index})=><PhraseItem item={item} id={index} />}
      snapToInterval={height/10+padding}
      onEndReached={()=>setPhrase(max)}
      onEndReachedThreshold={0.6}
      ListFooterComponent={<ActivityIndicator size="large" color={"tomato"}/>}
      />
      
    </View>
  );
};

export default item;

const styles = StyleSheet.create({
  
});
