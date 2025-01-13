import { Image, KeyboardAvoidingView, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/images/Logos.png"
import Input from '../../components/Input'
import {SignIntoAccount} from "../../functions/auth"

const signin = () => {
  const [email, setemail] =  useState("kjh");
  const [password, setpassword] = useState("klajdf");

  const handlebutton = ()=>{
    SignIntoAccount(email,password);
  }
  return (
    <SafeAreaView className='bg-background h-[100vh] justify-center p-[20px]'>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'} 
        >

        <View className=''>
            <Image source={logo} style={{width :100, height: 100}} resizeMode='contain'/>
            <Text className="text-white text-4xl ml-[14px]"><Text className="font-extrabold tracking-widest text-white">Open</Text>DoSocial</Text>
            <Text className='text-white ml-[14px] text-xl mt-[10px]'>Log in to your account</Text>
            <Input name="Email" value={email} onChangeIn={(e)=>{
                setemail(e.nativeEvent.text);
            }} security={false}></Input>
            <Input name="Password" value={password} onChangeIn={(e)=>{

                setpassword(e.nativeEvent.text)
            }} security={true}></Input>
            <TouchableOpacity className='w-full h-16 bg-purple-950 rounded-xl mt-[40px] justify-center items-center flex' onPress={handlebutton}>
                <Text className='text-center text-white text-xl font-sans'>Log in</Text>
            </TouchableOpacity>
            
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signin

const styles = StyleSheet.create({})