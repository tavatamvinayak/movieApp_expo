import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeList from '../Components/HomeList'

const Categories = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title:"Categories"})
    },[])
  return (
    <View className="mb-[60]">
       <HomeList/>
    </View>
  )
}

export default Categories