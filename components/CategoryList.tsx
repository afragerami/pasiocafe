import CategoryRow from "./CategoryRow";
import { Product } from "../hooks/useProducts";

interface Props {
  products: Product[];
}

const CategoryList = ({ products }: Props) => {
  const categories: string[] = [];

  for (const item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
  return (
    <>
      {categories.map((category) => (
        <CategoryRow
          key={category}
          category={category}
          selectedCategory=""
          onSelectedCategoryChange={(category) => category}
        />
      ))}
    </>
  );
};

export default CategoryList;
