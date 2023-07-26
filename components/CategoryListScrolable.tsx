import { Button, HStack } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

import CategoryRow from "./CategoryRow";

interface Props {
  products: Product[];
  selectedCategory: string;
  onSelectedCategoryChange: (category: string) => void;
}

function CategoryListScrolable({
  products,
  selectedCategory,
  onSelectedCategoryChange,
}: Props) {
  const categorySelected: string | null = null;
  const categories: string[] = [];

  for (const item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
  return (
    <>
      <HStack overflowX="scroll" width="100%" marginBlock={3} spacing="8px">
        <Button
          key={""}
          value={""}
          onClick={() => onSelectedCategoryChange("")}
        >
          All
        </Button>
        {categories.map((category) => (
          <>
            <HStack>
              <Button
                key={category}
                value={category}
                onClick={() => onSelectedCategoryChange(category)}
              >
                {category}
              </Button>
            </HStack>
          </>
        ))}
      </HStack>
    </>
  );
}

export default CategoryListScrolable;
