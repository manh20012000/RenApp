import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DataOjs from '../../DataObj.js'
import FlatItem from '../Omg/FlatItem.js'
import styles from './StyleOmg.js'


const Omg = () => {
 
  return (
    <View style={styles.container}>
      <FlatList
        data={DataOjs}
        renderItem={({ item, index }) => {
          return (
            <FlatItem item={item} index={index} >

            </FlatItem>
          )
        }}
      >
      </FlatList>
       
      
           
    </View>
  )
}
export default Omg;