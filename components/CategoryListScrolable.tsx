import { Box, Button, Divider, Flex, HStack } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

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
      <Divider></Divider>
      <Box paddingX="24px" paddingY="16px">
        <Flex
          overflowX="scroll"
          width="100%"
          gap={3}
          alignContent="space-evenly"
          className="CategoryListScrollable"
        >
          <Button
            bg="transparent"
            fontFamily="inter"
            fontSize="16px"
            key={"all"}
            value={""}
            onClick={() => onSelectedCategoryChange("")}
          >
            All
          </Button>
          {categories.map((category) => (
            <>
              <HStack>
                <Button
                  bg="transparent"
                  fontFamily="inter"
                  fontSize="16  px"
                  key={category}
                  value={category}
                  onClick={() => onSelectedCategoryChange(category)}
                >
                  {category}
                </Button>
              </HStack>
            </>
          ))}
        </Flex>
      </Box>
      <Divider />
    </>
  );
}

export default CategoryListScrolable;
