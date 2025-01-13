import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from  "expo-status-bar"
import React, { useEffect } from 'react'
import "../global.css";
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <StatusBar backgroundColor='#754683' style='light'/>
      <Stack.Screen name="index" options={{headerShown : false}}></Stack.Screen>
      <Stack.Screen name="(auth)" options={{headerShown : false}} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})