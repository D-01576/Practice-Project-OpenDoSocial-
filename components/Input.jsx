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
    <View>
      <Text>{name}</Text>
      <View className="w-full h-16 px-4 bg-violet-900 rounded-[5px] items-center justify-center flex-row pr-[20px]">
        <TextInput className='text-white text-base w-full relative h-full' placeholder={name} placeholderTextColor={"gray"} secureTextEntry={sec} value={value} onChange={onChangeIn}></TextInput>
        {security && (
            <TouchableOpacity onPress={()=> setsec(!sec)} className='items-end w-full absolute'>
                <View className='z-30 bg-blue-50'>
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
        )}
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})