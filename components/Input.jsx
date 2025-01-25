import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Input = ({name, security, value, onChangeIn}) => {
  const [sec, setsec] = useState(false)

  useEffect(()=>{
    console.log(value)
    console.log(security)
    if(security){
        setsec(security);
    }
  },[])

  return (
    <View className='mt-[20px]'>
      <Text className='text-white'>{name}</Text>
      <View className="w-full h-16 px-4 bg-input rounded-[5px] items-center justify-center flex-row pr-[20px]">
        <TextInput className='text-white text-base w-full relative z-10' placeholder="Enter here..." placeholderTextColor={"gray"} secureTextEntry={sec} value={value} onChange={onChangeIn}></TextInput>
        {security && (
          <View className='items-end absolute w-full'>
            <TouchableOpacity onPress={()=> setsec(!sec)} className='z-30'>
                <View className='z-30'>
                    <Icon 
                        name={sec ? 'eye-off' : 'eye'}
                        size={24}
                        color="white"
                        onPress={()=>{
                            setsec(!sec)
                        }}
                    ></Icon>
                </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})