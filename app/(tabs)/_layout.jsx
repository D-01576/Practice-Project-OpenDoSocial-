import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import home from "../../assets/images/home.png";
import profile from "../../assets/images/profile.png"
import upload from "../../assets/images/upload.png"

const TabIcon = ({ name, color, focused, icon }) => {
  return (
    <View className={`flex justify-center items-center h-[100%] mt-[20px]`}>
      <Image source={icon} style={{ width: 50, height: 35}} resizeMode='contain' alt="hello" tintColor={focused ? color : "#C0C0C0"} />
      <Text className={`text-[10px] mt-1 ${focused ? `font-extrabold text-[#ff8e00]` : "text-gray-200"}`}>
        {name}
      </Text>
    </View>
  );
};

const Tabs_layout = () => {
  return (
    <Tabs
    options= {{
      headerShown: false
    }}
    screenOptions={{
      // options : false,
      tabBarShowLabel:false,
      tabBarActiveTintColor : "#ff8e00",
      tabBarInactiveTintColor : "gray",
      tabBarStyle : {
        backgroundColor : "#754683",
        height: 60,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        border : "none"
      }
    }}
    >
      <Tabs.Screen
        className="bg-background"
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Home" color={color} focused={focused} icon={home}/>
          ),
        }}
      />
      <Tabs.Screen
        className="bg-background"
        name="upload"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Upload" color={color} focused={focused} icon={upload}/>
          ),
        }}
      />
      <Tabs.Screen
        className="bg-background"
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="profile" color={color} focused={focused} icon={profile}/>
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabs_layout;

const styles = StyleSheet.create({});
