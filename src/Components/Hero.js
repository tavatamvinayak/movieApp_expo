import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MainPoster = ({ imgUrl, Movie_name }) => {
  return (
    <View>
      <Image
        source={{ uri: imgUrl }}
        className="w-full h-[400] object-center"
      />
      <View className="absolute bottom-0  w-full  ">
      <Text className="text-center font-bold text-red-500 text-4xl">
          {Movie_name} spider man
        </Text>
        <View className="my-5 flex-row px-6">
          <TouchableOpacity className="border items-center rounded-lg py-2  border-gray-600 w-28">
            <Text className="font-bold">Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border items-center rounded-lg py-2  border-gray-600 w-28">
            <Text className="font-bold">more</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default MainPoster;
