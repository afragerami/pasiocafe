import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";

function CategoryListScrolable({ products }) {
  const categories: string[] = [];

  for (const item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
  return (
    <>
      <HStack overflowX="scroll" width="100%" marginBlock={3} spacing="8px">
        {categories.map((category) => (
          <CategoryRow key={category} category={category} />
        ))}
      </HStack>
    </>
  );
}

function CategoryRow({ category, onSelectedCategoryChange, selectedCategory }) {
  return (
    <>
      <HStack>
        <Button
          key={category}
          value={selectedCategory}
          onClick={(e) => onSelectedCategoryChange(e.target.value)}
        >
          {category}
        </Button>
      </HStack>
    </>
  );
}

export default CategoryListScrolable;
