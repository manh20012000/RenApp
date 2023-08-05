import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity,
  KeyboardAvoidingView,ActivityIndicator,
  } from 'react-native'
  import React, { Component,useState,useEffect} from 'react'
  import {LinearGradient} from 'expo-linear-gradient';
import styles from './StyleLogin'
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign,Entypo,MaterialCommunityIcons  } from '@expo/vector-icons';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';


const Login=({navigation})=>{
        const[name,setName]=useState('');
         const[pass,setPass]=useState('');
         const [loading, setLoading] = useState(false);
         const login=()=>{
          // if(pass.length==0||name.length==0){
          //   alert('nhap thong tin')
          // }else if(pass==='123'&& name==='user'){
               setLoading(true);
          // Giả sử rằng việc đăng nhập mất 2 giây
                setTimeout(() => {
                setLoading(false);
                navigation.navigate('Home'); 
                 setPass('');
                setName(''); 
            // Sau đó, điều hướng đến trang Home
            // navigation.navigate('Home');
          }, 2000);
         
           
           
           
           
            // }else{
            //   alert('thong tin nhập sai')
            // }
          }
  const[hienthi,setHienthi]=useState(true);
         
  const anhien=()=>{
       setHienthi(!hienthi);
      
  }

 
 
  return (
    <View style={styles.container}>
            <View style={styles.header}>
                  <Text style={styles.font}> Dang Nhap</Text>
                  <Image source={require('../Image/logo.png')}
                     style={styles.image}
                  ></Image>
            </View>
            <View style={styles.body}>
               <View style={styles.bodycon}>
                  <Text tyle={styles.Txt}>UserName</Text>
                  <View style={styles.IuserName}>
                  <FontAwesome name="user" size={24} color="black" />
                      <TextInput
                          placeholder="nhap user name"
                          style={styles.textinput}
                          value={name}
                          onChangeText={(name) => setName(name)}
                        />  
                  </View>
                  <Text tyle={styles.Txt}>PassWord</Text>
                  <View style={[styles.IPass,styles.IuserName]}>
                     <Ionicons name="key-sharp" size={24} color="black" />
                     <TextInput
                          placeholder="nhap pass word"
                          style={styles.textinput}
                          secureTextEntry={hienthi}
                          titleAler='vui long nhap thong tin chinh sac'
                          value={pass}
                          onChangeText={(pass) => setPass(pass)}
                        /> 
                        <TouchableOpacity
                          onPress={anhien}
                        > 
                            <Ionicons name={hienthi? 'eye-off' : 'eye'} size={30} color="black"
                              style={styles.eye}
                            />
                            </TouchableOpacity>
                      
                   </View>
                      <TouchableOpacity style={styles.foget}
                            
                      >
                          <Text style={styles.txtfoget}>Fot paswwod?</Text>
                      </TouchableOpacity>  
                      <TouchableOpacity 
                         style={styles.button}
                         onPress={login}
                      >
                        <LinearGradient colors={['#faf', '#3b5998', '#192f6a']}
                                    style={styles.linagradine} > 
                                 <Text style={styles.btnTxt}>Login</Text>
                          </LinearGradient>  
                          <Spinner
                            visible={loading}
                            textContent={'Đangs tải...'}
                            textStyle={{ color: '#FFF' }}
                          />
                         </TouchableOpacity>
                         <View style={styles.ViewIcon}>

                        <Text 
                            style={styles.labelwith} >Login With</Text>
                          <TouchableOpacity style={styles.icon} >
                          <FontAwesome5 name="facebook-f" size={34} color="black"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} >
                            <AntDesign name="google" size={34} color="red"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icon} >
                            <AntDesign name="twitter" size={34} color="black"/>
                            </TouchableOpacity>
                        </View>
                 </View>
                      
            </View>
            <View style={styles.flooter}>
                 
            </View>

    </View>
  )
}
export default Login
