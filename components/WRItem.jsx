import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { font, size } from '../config/GlobalSetting'

const WRItem = ({ incorrect, correct }) => {
  return (
    <View style={[styles.container]}>
        <View style={[styles.incorrect]}>
          <Text style={[styles.text]}>{incorrect}</Text>  
        </View>
      
        <View style={[styles.correct]}>
          <Text style={[styles.text]}>{correct}</Text>  
        </View>
    </View>
  )
}

export default WRItem

const styles = StyleSheet.create({
    container:{
       // backgroundColor:'white',
        paddingVertical:20

    },
    incorrect:{
        backgroundColor:'#FFCDD2',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        marginBottom:size['padding']*2
    },
    correct:{
        backgroundColor:'#9DAEFF',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        marginBottom:size['padding']*2
    },
    text:{
        fontSize:font['mediumFont']+5,
        textTransform:'capitalize'
    }
})