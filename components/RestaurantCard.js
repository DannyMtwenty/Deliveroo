import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";
import { Rating } from "react-native-elements";
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  title,
  description,
  imgUrl,
  rating,
  address,
  genre,
}) => {
  return (
    <View>
      <TouchableOpacity className="bg-white mr-3  shadow-lg">
        <Image source={{ uri: urlFor(imgUrl).url() }} className="h-36 w-64 rounded-sm" />


      <View className="px-3 pb-2">
        <Text className="font-bold text-lg pt-3">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" size={22} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            {rating} - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" size={22} />
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>


      </View>

      </TouchableOpacity>

    </View>
  );
};

export default RestaurantCard;
