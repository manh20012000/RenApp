import {
  StyleSheet, Text, View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import {
  AntDesign,
  MaterialCommunityIcons, MaterialIcons
} from '@expo/vector-icons';

import React, { useState } from 'react';
import styles from './StyleTrangchu'
import TopNavigate from './TopNavigate';
const Trangchu = (navigation) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>

      <View style={styles.searchInput}>
        <TextInput style={styles.TxtInput}
          placeholder='Nhập tìm kiếm'
        >
        </TextInput>
        <TouchableOpacity style={styles.Touchsearch}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.option}>
                           <TouchableOpacity style={styles.Touchufo}
                            >
                              <MaterialCommunityIcons name="ufo-outline" size={44} color="black" />
                              <Text> OMG!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Touchufo}
                            >
                              <MaterialIcons name="beach-access" size={44} color="black" />
                              <Text>breach</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Touchufo}
                            >
                            <MaterialCommunityIcons name="pool" size={44} color="black" />
                              <Text>Pools</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Touchufo}
                            >
                            <MaterialCommunityIcons name="island" size={44} color="black" />
                              <Text>Island</Text>
                            </TouchableOpacity>
                        
                      </View> */}

      <TopNavigate />
    </View>
  )
}
export default Trangchu;
