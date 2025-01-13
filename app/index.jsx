import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import log from "../assets/images/Logos.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const index = () => {
  return (
    <SafeAreaView className="bg-background h-[100vh] flex pt-[20px] text-white items-center">
        <View className="flex justify-center items-center mt-[100px]">
            <Image
                style={{width: 100, height: 100}}
                source={log}
                placeholder="hello"
                contentFit="cover"
                transition={1000}
            />
            <Text className="text-white text-4xl"><Text className="font-extrabold tracking-widest text-white">Open</Text>DoSocial</Text>
        </View>
        <View className= "flex justify-center items-center w-[90vw]">
            <Text className="text-white text-center mt-[20px]">Discover, Connect, and Share</Text>
            <Text className="mt-[10px] text-[12px] text-center text-blue-200 font-semibold tracking-wide leading-7">OpenDoSocial allows you to follow others, share your thoughts, and stay connected with the community.</Text>
            <View className="flex w-[100%] gap-[20px] mt-[20px] justify-center items-center">
                <Text className="font-bold text-white tracking-widest text-center">✔️ Follow people you care about</Text>
                <Text className="font-bold text-white tracking-widest text-center">✔️ Share posts with the world</Text>
                <Text className="font-bold text-white tracking-widest text-center">✔️ Stay updated with real-time posts</Text>
            </View>
        </View>
        <View>
            <TouchableOpacity className="bg-indigo-950 p-[10px] w-[70vw] h-[40px] justify-center items-center mt-[50px] rounded-[5px]" 
            >
                <Link className="text-white text-center w-[100%] h-[100%]" href="/signin" >Lets Start</Link>
            </TouchableOpacity>
        </View>
        <StatusBar backgroundColor='#754683' style='light'/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})