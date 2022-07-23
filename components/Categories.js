import { View, Text, ScrollView } from "react-native";
import React from "react";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddintTop: 10,
        paddingHorizontal : 15,
        marginHorizontal: 10,
        marginTop : 15,
    }}
  showsHorizontalScrollIndicator={false}
  
    horizontal>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
    </ScrollView>
  );
};

export default Categories;
