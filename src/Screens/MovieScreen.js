import {
  View,
  Text,
 
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../utils/request";
import { FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import YoutubePlayer from 'react-native-youtube-iframe';
import { ScrollView } from 'react-native-virtualized-view'

const MovieScreen = ({ route }) => {
  // const route =useRoute()
  const { movieId } = route.params;
  // console.warn(movieId)

  const [data, setData] = useState({});
  const [Player, setPlayer] = useState(false);

  // // dynamic id movieDetails
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=119459bb9eb7b105439655ecd7f9d1b1&language=en-us&append_to_response=videos`;
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      
  }, []);

  // console.warn(data)
  return (
    <ScrollView>
      <View>

        <View>
          <View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path
                  }`,
              }}
              className="w-full h-[300] "
            />
          </View>
          <View className="p-5">
            <Text className="text-4xl font-extrabold">
              {data.title}
            </Text>

            <Text className="my-2">overview : <Text className="font-bold">{data.overview}</Text></Text>
            <Text className="my-2">release_date : <Text className="font-bold">{data.release_date}</Text></Text>
            <Text className="my-2">status : <Text className="font-bold">{data.status}</Text></Text>
            <Text className="my-2">runtime : <Text className="font-bold">{data.runtime}</Text></Text>

            <View className="flex-row">
              <Text className="my-2">Trailer : </Text>
              <TouchableOpacity onPress={() => setPlayer(true)} className="px-5 py-2 rounded-full border border-gray-400">
                <Text className="font-bold">Play</Text>
              </TouchableOpacity>
            </View>

            <Text> language : <Text className="font-bold">{data.original_language}</Text></Text>
            
            <Text>tagline : <Text className="font-bold">{data.tagline}</Text></Text>
            
            <View className="flex-row">
            <Text className="text-5">
              {" "}
              genres :</Text>
              <FlatList
                data={data.genres}
                renderItem={({ item }) => <Text> <Text className="font-bold">{item.name}</Text></Text>}
              />
            </View>
            
            <View className="flex-row">
              <Text>production_companies : </Text>
              <View className="flex-1">
                <FlatList
                  data={data.production_companies}
                  renderItem={({ item }) => (
                    <>
                      <View>
                        <Image
                          source={{
                            uri: `https://image.tmdb.org/t/p/w500${item.logo_path}`,
                          }}
                          className="w-[20] h-[30]"
                        />
                        <Text>name : <Text className="font-bold">{item.name}</Text></Text>
                        <Text>country : <Text className="font-bold">{item.origin_country}</Text></Text>
                      </View>
                    </>
                  )}
                />
              </View>
            </View>
          </View>
        </View>

        {/* youtube player model */}

        {
          Player ?

            (
              <View className="w-full h-[300] absolute top-0 z-10 " >
                <View className="items-end p-3 bg-gray-100">
                  <TouchableOpacity onPress={() => setPlayer(false)}>
                    <MaterialIcons name="highlight-remove" size={34} color="red" />
                  </TouchableOpacity>
                </View>

                <View>
                  <YoutubePlayer
                    height={300}
                    play={true}
                    videoId={data.videos.results[0].key}
                  />
                </View>
              </View>
            ) :
            null

        }
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
