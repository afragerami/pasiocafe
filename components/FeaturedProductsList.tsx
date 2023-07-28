import FeaturedProductCard from "./FeaturedProductCard";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Product } from "../hooks/useProducts";

interface Props {
  productsin: Product[];
}

const FeaturedProductsList = ({ productsin }: Props) => {
  let featuredProdcuts: Product[] = [];

  console.log(productsin);

  productsin.forEach((element: Product) => {
    if (element.featured) {
      console.log(element);
      featuredProdcuts.push(element);
    }
  });

  return (
    <>
      <Box paddingY="16px" paddingX="24px">
        <Heading>Featured</Heading>
        <Flex>
          <HStack w="100%" overflowX="scroll" marginBlock={3} spacing="8px">
            {featuredProdcuts.map((element) => (
              <FeaturedProductCard key={element.name} product={element} />
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default FeaturedProductsList;
