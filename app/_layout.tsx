import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from  "expo-status-bar"
import React, { useEffect } from 'react'
import "../global.css";
import { Stack } from 'expo-router'

import { RecoilRoot } from 'recoil';

const _layout = () => {
  return (
      <RecoilRoot>
    <Stack>
      <StatusBar backgroundColor='#3D0031' style='light'/>
      <Stack.Screen name="index" options={{headerShown : false}}></Stack.Screen>
      <Stack.Screen name="(auth)" options={{headerShown : false}} />
      <Stack.Screen name="(tabs)" options={{headerShown : false}} />
    </Stack>
      </RecoilRoot>
  )
}

export default _layout

const styles = StyleSheet.create({})