import FeaturedProductCard from "./FeaturedProductCard";
import { Box, HStack, Heading } from "@chakra-ui/react";

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
      <Box paddingX="24px">
        <Heading>Featured</Heading>
        <HStack overflowX="scroll" width="100%" marginBlock={3} spacing="8px">
          {featuredProdcuts.map((element) => (
            <FeaturedProductCard key={element.name} product={element} />
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default FeaturedProductsList;
