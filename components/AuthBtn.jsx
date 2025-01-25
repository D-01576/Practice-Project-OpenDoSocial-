import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AuthBtn = ({name, handleBtn, loading}) => {
  return (
    <View>
        <TouchableOpacity className={`w-full h-16 rounded-xl mt-[40px] justify-center items-center flex ${loading ? "bg-black": "bg-buttonsign"}`} disabled={loading} onPress={handleBtn}>
            <Text className='text-center text-white text-xl font-sans'>{!loading  ? name : "loading"}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AuthBtn

const styles = StyleSheet.create({})