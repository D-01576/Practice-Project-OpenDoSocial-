import { Image, KeyboardAvoidingView, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/images/Logos.png"
import Input from '../../components/Input'
import { Link, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import AuthBtn from '../../components/AuthBtn';
import { SignIntoAccount } from "../../functions/auth";
import { useNavigation } from '@react-navigation/native'
import { IsLogin } from '../../functions/auth';

const signin = () => {
  const [email, setemail] =  useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  useEffect(() => {
          IsLogin(router)
  }, [])
  const handlebutton = ()=>{
    SignIntoAccount(email,password,setloading,router);
  }
  return (
    <SafeAreaView className='bg-background h-[100vh] justify-center p-[20px] '>
        <Toast className="z-30"></Toast>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'} 
        >
        <View className='z-[-1]'>
            <Image source={logo} style={{width :100, height: 100, zIndex : -10}} resizeMode='contain'/>
            <Text className="text-white text-4xl ml-[1px]"><Text className="font-extrabold tracking-widest text-white">Open</Text>DoSocial</Text>
            <Text className='text-white ml-[1px] text-xl mt-[10px]'>Log in to your account</Text>
            <Input name="Email" value={email} onChangeIn={(e)=>{
                setemail(e.nativeEvent.text);
            }} security={false}></Input>
            <Input name="Password" value={password} onChangeIn={(e)=>{

                setpassword(e.nativeEvent.text)
            }} security={true}></Input>
            <AuthBtn name="Sign In" handleBtn={handlebutton} loading={loading}></AuthBtn>
            <View className='text-center'>
                <Text className='text-center text-white mt-[10px] font-bold'>don't have an account <Link href={"/signup"} className='text-purple-300'>Sign Up</Link></Text>
            </View>
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signin

const styles = StyleSheet.create({})