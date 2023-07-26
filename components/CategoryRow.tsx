import { HStack, Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  category: string;
  selectedCategory: string;
  onSelectedCategoryChange: (selectedCategory: string) => void;
}

const CategoryRow = ({
  category,
  selectedCategory,
  onSelectedCategoryChange,
}: Props) => {
  return (
    <>
      <HStack>
        <Button
          key={category}
          value={selectedCategory}
          onClick={() => onSelectedCategoryChange(category)}
        >
          {category}
        </Button>
      </HStack>
    </>
  );
};

export default CategoryRow;
