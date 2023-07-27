
import { View, Text, FlatList, TouchableOpacity,ActivityIndicator, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../store/MovieContext";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeTab = () => {
  const navigation = useNavigation()


  const {
    MoviePoster,
    TrandingNow,
    TopRated,
  } = useContext(MovieContext);
  // console.warn(MoviePoster[0])
  return (
    <ScrollView className="mb-[60]">
      <View className="px-5 flex-row justify-between py-5">
        <Text className="text-4xl font-bold">MoviesApp</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name={"search-sharp"}
            size={44}
          />
        </TouchableOpacity>
      </View>


      {/*  poster new movies */}
      <Text className="text-xl px-5">MoviePoster</Text>

      {
        MoviePoster.length === 0 ?
          <ActivityIndicator
            color='#bc2b78'
            size="large"
            /> :
          <FlatList
            data={MoviePoster}
            renderItem={({ item }) => {
              const movieId = item.id
              // console.warn(movieId)

              return (<TouchableOpacity className="inline-block" onPress={() => navigation.navigate('Movie', { movieId })} >
                <View>

                  <View className="m-2">
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}` }} className="w-[170] rounded-xl h-[200]" />
                  </View>

                </View>
              </TouchableOpacity>)
            }}
            keyExtractor={item => item.id}
            horizontal
          />}


      {/* tranding Now */}
      <Text className="text-xl px-5">TrandingNow</Text>

{   TrandingNow.length === 0 ?
          <ActivityIndicator
            color='#bc2b78'
            size="large"
            /> :
   <FlatList
        data={TrandingNow}
        renderItem={({ item }) => {
          const movieId = item.id
          // console.warn(movieId)

          return (<TouchableOpacity className="inline-block" onPress={() => navigation.navigate('Movie', { movieId })} >
            <View>

              <View className="m-2">
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}` }} className="w-[170] rounded-xl h-[200]" />
              </View>

            </View>
          </TouchableOpacity>)
        }}
        keyExtractor={item => item.id}
        horizontal
      />
}
      {/* Top rated */}
      <Text className="text-xl px-5">TopRated</Text>
{
TopRated.length === 0 ?
<ActivityIndicator
  color='#bc2b78'
  size="large"
  /> :
      <FlatList
        data={TopRated}
        renderItem={({ item }) => {
          const movieId = item.id
          // console.warn(movieId)

          return (<TouchableOpacity className="inline-block" onPress={() => navigation.navigate('Movie', { movieId })} >
            <View>

              <View className="m-2">
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}` }} className="w-[170] rounded-xl h-[200]" />
              </View>

            </View>
          </TouchableOpacity>)
        }}
        keyExtractor={item => item.id}
        horizontal
      />
      }
    </ScrollView>
  )
}

export default HomeTab

