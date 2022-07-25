import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import sanityClient from "../sanity";

import CategoryCard from "./CategoryCard";
import { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  //load on  component when it renders
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
      console.log(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddintTop: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 15,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}

      {/* 
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="img1" /> */}
    </ScrollView>
  );
};

export default Categories;
