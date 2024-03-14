interface CategoryPageProps {
  category: string | undefined;
}

export default function CategoryPage(props: CategoryPageProps) {
  const category = props.category;
  const validCategories = [
    "title",
    "publish-date",
    "best-sellers",
    "faves",
    "customize",
  ];

  return <h1>Category: {category}</h1>;
}
