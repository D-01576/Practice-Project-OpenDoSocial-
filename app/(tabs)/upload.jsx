import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/Input'
import AuthBtn from '../../components/AuthBtn'
import { Upload } from '../../functions/auth'
import Toast from 'react-native-toast-message'
import { useRecoilState } from 'recoil'
import { PostsAtom } from '../../stats/atom'

const upload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setloading] = useState(false);
  const [posts,setposts] = useRecoilState(PostsAtom);

  const handlebutton = ()=>{
    Upload(title, content, setloading, setposts, posts);
  }
  return (
    <SafeAreaView className='bg-background h-[100vh]  p-[20px]'>
      
      <Text className='text-white text-center text-[20px] font-extrabold border-b pb-[20px]'>Upload</Text>
      <View className='justify-center h-[65vh]'>
        <Input name="Content" security={false} value={title} onChangeIn={(e)=>{
                setTitle(e.nativeEvent.text);
        }}></Input>
        <Input name="Title" security={false} value={content} onChangeIn={(e)=>{
                setContent(e.nativeEvent.text);
        }} ></Input>
        
        <AuthBtn name= "Upload" handleBtn={handlebutton} loading={loading}></AuthBtn>
      </View>
      
      <Toast></Toast>
    </SafeAreaView>
  )
}

export default upload

const styles = StyleSheet.create({})