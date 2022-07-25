import { View, Text, ScrollView } from "react-native";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import React, { useLayoutEffect, useState, useEffect } from "react";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = React.useState([]);

  //load on  component when it renders
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "featured" && _id == $id
    ] {
      ...,
      restaurants[]->
     
     
     }[0]`, { id })
      .then((data) => {
        setRestaurants(data?.restaurants);
     
      });
  }, [id]);

  return (
    <View>
      <View className="flex-row justify-between mt-4 items-center px-4">
        <Text className="font-bold text-lg">{title}</Text>
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

        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            description={restaurant.description}
            imgUrl={restaurant.image}            
            rating={restaurant.rating}
            address={restaurant.address}
            genre={restaurant.genre}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
