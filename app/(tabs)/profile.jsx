import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { NameAtom, PostsAtom} from '../../stats/atom';
import { Image } from 'react-native';
import { FlatList } from 'react-native';

const profile = () => {
  const Name = useRecoilValue(NameAtom);
  const Posts = useRecoilValue(PostsAtom);
  return (
    // <RecoilRoot>

    <SafeAreaView>
      <View className='bg-background h-full pt-[80px]'>
        <Image source={require('../../assets/images/Logos.png')} style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} className='border border-e-white' />
        <Text className='text-white text-center font-serif font-bold '>{Name}</Text>
        <View className='h-[1px] w-[100vw] bg-[#ffffff92] mt-[40px]'></View>
        <View>
          <Text className='ml-[15px] text-[#000000] font-bold'>Your Posts:</Text>
          <FlatList 
            data={Posts}
            renderItem={({item})=>(
              <View className='bg-[#ffffff1b] p-[10px] m-[10px] rounded-l-[10px] pt-[20px] pb-[20px]'>
                <Text className='text-white font-bold'>{item.title}</Text>
                <Text className='text-[#c0fcffac] mt-[10px]'>{item.content}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
    // </RecoilRoot>
  )
}

export default profile

const styles = StyleSheet.create({})