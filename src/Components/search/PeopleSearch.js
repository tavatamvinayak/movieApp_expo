import { AntDesign } from '@expo/vector-icons'
import {API_KEY , BASE_URL} from '../../utils/request'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PeopleSearch = ({SearchData}) => {
  const [text, settext] = useState("");
  const navigation = useNavigation();
  const [Search_data, setSearch_data] = useState([])

  const url =`${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
useEffect(()=>{
      fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
          setSearch_data(json.results);
      })
      .catch((error) => console.error(error))
  },[text])
  // console.warn(text)

  return (
    <>
     <View className="border border-gray-300 rounded-xl flex-row py-2">
         <TextInput
             placeholder="search movies"
             onChangeText={settext}
             className="px-2 w-[90%]"
         />
         <TouchableOpacity  className="">
             <AntDesign name="search1" size={24} color="black" />
         </TouchableOpacity>
     </View>

     {
     Search_data.length === 0 ? (<>
       <View >

           <ActivityIndicator
             color='#bc2b78'
             size="large"
           />

       </View>
     </>) : <FlatList
       data={Search_data}
       renderItem={({ item }) => {
         const movieId = item.id
         return(
         <>
          <TouchableOpacity className="inline-block"  
          onPress={() => navigation.navigate('Movie', { movieId })} >
             <View>

               <View className="m-2">
                 <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}` }} className="w-full rounded-xl h-[240]" />
                 <Text className="font-bold text-center bg-gray-300 rounded-br-full rounded-bl-full">{item.title}</Text>
               </View> 
             </View>
           </TouchableOpacity>
         </>
       )}}

       
     />
   }
    </>
 )
}

export default PeopleSearch