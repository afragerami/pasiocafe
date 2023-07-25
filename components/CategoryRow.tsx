import { HStack, Button } from "@chakra-ui/react";
import React from "react";

const CategoryRow = ({
  category,
  onSelectedCategoryChange,
  selectedCategory,
}) => {
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
};

export default CategoryRow;
