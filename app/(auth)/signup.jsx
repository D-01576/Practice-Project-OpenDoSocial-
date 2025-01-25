import { Image, KeyboardAvoidingView, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/images/Logos.png"
import Input from '../../components/Input'
import {SignUp} from "../../functions/auth"
import { Link, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import AuthBtn from '../../components/AuthBtn'
import { IsLogin } from '../../functions/auth'

const signup = () => {
  const [email, setemail] =  useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);  
  const router = useRouter();
  useEffect(() => {
      IsLogin(router)
  }, [])

  const handlebutton = ()=>{
    SignUp(email,password,setloading,router);
  }
  return (
    <SafeAreaView className='bg-background h-[100vh] justify-center p-[20px]'>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'} 
        >
        <View className='z-[-10]'>
            <Image source={logo} style={{width :100, height: 100, zIndex : -10}} resizeMode='contain'/>
            <Text className="text-white text-4xl ml-[14px]"><Text className="font-extrabold tracking-widest text-white">Open</Text>DoSocial</Text>
            <Text className='text-white ml-[14px] text-xl mt-[10px]'>Create an Account</Text>
            <Input name="Email" value={email} onChangeIn={(e)=>{
                setemail(e.nativeEvent.text);
            }} security={false}></Input>
            <Input name="Password" value={password} onChangeIn={(e)=>{

                setpassword(e.nativeEvent.text)
            }} security={true}></Input>
            <AuthBtn name= "Sign Up" handleBtn={handlebutton} loading={loading}></AuthBtn>
            <View className='text-center'>
                <Text className='text-center text-white mt-[10px] font-bold'>already have an account <Link href={"/signin"} className='text-purple-300'>Sign In</Link></Text>
            </View>
        </View>
        
        <Toast></Toast>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({})