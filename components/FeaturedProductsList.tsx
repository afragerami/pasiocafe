import FeaturedProductCard from "./FeaturedProductCard";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";

interface Props {
  productsin: [];
}

const FeaturedProductsList = ({ productsin }: Props) => {
  let featuredProdcuts: (typeof productsin)[] = [];

  console.log(productsin);

  productsin.forEach((element) => {
    if (element.featured) {
      console.log(element);
      featuredProdcuts.push(element);
    }
  });

  //products.forEach((item) => {
  // if (item.featured === true) {
  // featuredProdcuts.push(item);
  // }
  //});

  return (
    <>
      {/* <Heading paddingX="24px">Featured</Heading>
      <Flex paddingX="24px">
        <HStack w="100%" overflowX="scroll" marginBlock={3} spacing="8px">
          {featuredProdcuts.map((element) => (
            <FeaturedProductCard key={element.name} product={element} />
          ))}
        </HStack>
      </Flex> */}

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
