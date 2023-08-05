import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trangchu from '../../Home/TrangChu/Trangchu';
import Danhmuc from '../../Home/Danhmuc/Danhmuc';
import GioHang from '../../Home/GioHang/GioHang';
import Infor from '../../Home/Information/Infor';

const bottonTad=createBottomTabNavigator();

const BootonGate=(navigation)=>{
  return (
    
    <bottonTad.Navigator    
   
          screenOptions={{
             tabBarStyle:{backgroundColor:'black',paddingTop:10},
             headerShown:false,
             tabBarActiveTintColor:'red',
          }}
    >
      <bottonTad.Screen 
         name='TrangChu' 
         component={Trangchu}
        //  options={{
        //      tabBarIcon:({focused})=>(
        //       //  <Image
        //       //  source={require('RenApp/src/Image/home.png')} 
                 
        //       // />
        //      )
        //  }}
          
      />
       <bottonTad.Screen 
         name='Danhmuc' 
         component={Danhmuc}
        //  options={{
        //      tabBarIcon:({focused})=>(
        //        <Image
        //            source={require('./Image/message.png')}
        //           style={[styles.imgstyle,
        //          focused&& styles.bottonFoucused]}
        //       />
        //      )
        //  }}
          
      />
      <bottonTad.Screen 
         name='GioHang' 
         component={GioHang}
        //  options={{
        //      tabBarLabel:()=>null,
        //      tabBarIcon:({focused})=>(
        //        <Image
        //            source={require('./Image/plus-button.png')}
        //           style={[styles.newstyle,
        //          focused&& styles.bottonFoucused]}
        //       />
        //      )
        //  }}
          
      />

       <bottonTad.Screen 
         name='Infor' 
         component={Infor}
        //  options={{
        //      tabBarIcon:({focused})=>(
        //        <Image
        //         source={require('./Image/user.png')}
        //           style={[styles.imgstyle,
        //          focused&& styles.bottonFoucused]}
        //       />
        //      )
        //  }}
          
      />
      
       
    </bottonTad.Navigator>


  );
}
export default BootonGate;