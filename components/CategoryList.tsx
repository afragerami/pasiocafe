import React from "react";
import CategoryRow from "./CategoryRow";

const CategoryList = ({ products }) => {
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
          onSelectedCategoryChange={(category) => category}
        />
      ))}
    </>
  );
};

export default CategoryList;
