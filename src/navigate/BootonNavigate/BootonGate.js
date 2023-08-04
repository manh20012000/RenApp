import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trangchu from '../../Home/TrangChu/Trangchu';
import Danhmuc from '../../Home/Danhmuc/Danhmuc';
import GioHang from '../../Home/GioHang/GioHang';
import Infor from '../../Home/Information/Infor';

const bottonTad=createBottomTabNavigator();

const BootonGate=()=>{
  return (
    
    <bottonTad.Navigator    
    
          screenOptions={{
             tabBarStyle:{backgroundColor:'black'},
             headerShown:true,
             tabBarActiveTintColor:'white',
          }}
    >
      <bottonTad.Screen 
         name='TrangChu' 
         component={Trangchu}
        //  options={{
        //      tabBarIcon:({focused})=>(
        //        <Image
        //         source={require('./Image/home.png')}
        //           style={[styles.imgstyle,
        //          focused&& styles.bottonFoucused]}
        //       />
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