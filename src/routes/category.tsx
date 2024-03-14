import { useParams } from "react-router-dom";

import CategoryPage from "../components/CategoryPage";

export default function Category() {
  const { category } = useParams();

  return (
    <>
      <CategoryPage category={category} />
    </>
  );
}
