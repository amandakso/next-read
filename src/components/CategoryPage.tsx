//import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import GenrePage from "./category-pages/GenrePage";
import ThemePage from "./category-pages/ThemePage";
import PublishDatePage from "./category-pages/PublishDatePage";
import BestSellersPage from "./category-pages/BestSellersPage";
import PersonalFavesPage from "./category-pages/PersonalFavesPage";
import CustomizePage from "./category-pages/CustomizePage";

interface CategoryPageProps {
  category: string | undefined;
}

export default function CategoryPage(props: CategoryPageProps) {
  const category = props.category;
  const validCategories = [
    "genre",
    "theme",
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
  if (category) {
    switch (category) {
      case "genre":
        return <GenrePage />;
      case "theme":
        return <ThemePage />;
      case "publish-date":
        return <PublishDatePage />;
      case "best-sellers":
        return <BestSellersPage />;
      case "faves":
        return <PersonalFavesPage />;
      default:
        return <CustomizePage />;
    }
  }

  return <h1>Category: {category}</h1>;
}
