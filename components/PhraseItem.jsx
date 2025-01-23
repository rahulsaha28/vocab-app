import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { font, size } from '../config/GlobalSetting'
import { router, useNavigation } from 'expo-router';

const { padding, height  } = size;
const PhraseItem = ({ item, id}) => {
    
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={(()=>{
        router.push({
            pathname:'phrase',
            params:{id}
        })
      })} style={[styles.itemContainer]}>
        <Text style={[styles.textItem]}>{id+1}. {item['meaning']}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default PhraseItem

const styles = StyleSheet.create({
    container: {
        gap:10,
        marginHorizontal:padding,
        marginVertical:padding,
        
    },
    itemContainer: {
        //alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height:height/10,
        paddingHorizontal:padding*2,
        backgroundColor: "white",
        borderRadius:padding,
        
      },
      textItem:{
        
        fontSize:font['largeFont'],
        // textTransform:'capitalize'
      }
})