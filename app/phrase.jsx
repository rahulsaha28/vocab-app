import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { usePhraseStore } from '../store/usePhraseStore';
import WRItem from '../components/WRItem';

const phrase = () => {
    const { id } = useLocalSearchParams();
    const { phraseIT, setPhraseIT } = usePhraseStore(state=>state);
    useEffect(()=>{
        setPhraseIT(id);
    },[id])
  return (
    <View>
      <Text>{phraseIT['word']}</Text>
      {
       phraseIT["correct"] && phraseIT["incorrect"].map((item,index)=>(<WRItem key={index} incorrect={item} correct={phraseIT["correct"][index]} />))
      }
    </View>
  )
}

export default phrase

const styles = StyleSheet.create({})