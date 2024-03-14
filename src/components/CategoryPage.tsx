//import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
interface CategoryPageProps {
  category: string | undefined;
}

export default function CategoryPage(props: CategoryPageProps) {
  const category = props.category;
  const validCategories = [
    "genre",
    "title",
    "publish-date",
    "best-sellers",
    "faves",
    "customize",
  ];

  if (category && !validCategories.includes(category)) {
    return (
      <Text>
        Category selected does not exist. Select another category &#40;See
        sidebar to select a category&#41;
      </Text>
    );
  }

  return <h1>Category: {category}</h1>;
}
