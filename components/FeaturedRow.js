import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between mt-4 items-center px-4">
        <Text className="text-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      {/* scroll view */}


      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal>

 
<RestaurantCard

id="234"
title="Hot Foodie"
description="img1"
imgUrl="https://links.papareact.com/gn7"
rating={4.5}
address="0015 vietnam"
genre="Nyerian"
/>

<RestaurantCard

id="234"
title="Hot Foodie"
description="img1"
imgUrl="https://links.papareact.com/gn7"
rating={4.5}
address="0015 vietnam"
genre="Nyerian"
/>



        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
