import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  //splash screen

  //when screen renders, set the title of the header to false
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="mt-9 bg-white pt-2 flex-column">
      {/* header */}
      <View className="flex-row  pb-3 space-x-2 align-center mx-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-8 h-8 rounded-full mt-3 p-4"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 flex-1 items-center pl-2">
          <SearchIcon color="gray" size={20} />

          <TextInput placeholder="Hotel and quicins" keyboardTypes="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      <ScrollView>
        {/* category */}
        <Categories />
     
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
