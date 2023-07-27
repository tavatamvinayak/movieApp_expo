import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";


const Rows = ({ title, movies , navigation}) => {

  return (
    <View className="pt-4">
      <Text className="text-center text-2xl font-bold">{title}</Text>
      {/* <ScrollView horizontal showsVerticalScrollIndicator={false} className="w-full"> */}


        <FlatList
          data={movies}
          renderItem={({ item }) => (
               <TouchableOpacity className="inline-block" >
            <View>
              
              <View className="m-2">
                  <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}} className="w-[170] rounded-xl h-[200]"/>
              </View>
            
          </View>
          </TouchableOpacity>)}
          keyExtractor={(item) => item.id}
          horizontal
        />




      {/* </ScrollView> */}
    </View>
  );
};

export default Rows;
