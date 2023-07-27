import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Movies from "../Components/search/Movies";
import Series from "../Components/search/Series";
import PeopleSearch from "../Components/search/PeopleSearch";

const SearchTab = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: "Search" });
  }, []);

  const [Tab, setTab] = useState(0)


  return (
    <View className="px-5 mt-5 ">

      <View className="py-3">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => setTab(0)} className={`border border-gray-300 rounded-full p-3 ${Tab == 0 ? "bg-black" : " "}`}>
            <Text className={`text-lg font-bold ${Tab == 0 ? "text-white" : " "}`}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(1)} className={`border border-gray-300 rounded-full p-3  ${Tab == 1 ? "bg-black" : " "}`}>
            <Text className={`text-lg font-bold ${Tab == 1 ? "text-white" : " "}`}>Series</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(2)} className={`border border-gray-300 rounded-full p-3 ${Tab == 2 ? "bg-black" : "  "}`}>
            <Text className={`text-lg font-bold ${Tab == 2 ? "text-white" : " "}`}>PeopleSearch</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* tabs select the search engine  */}
      <View>
        {
          Tab === 0 ? <Movies  /> : Tab === 1 ? <Series  /> : <PeopleSearch  />
        }
      </View>

      {/* <Movies/> */}

    </View>
  );
};

export default SearchTab;
