import FeaturedProductCard from "./FeaturedProductCard";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import { useState } from "react";

interface Props {
  productsin: Product[];
}

const FeaturedProductsList = ({ productsin }: Props) => {
  let featuredProdcuts: Product[] = [];
  const [hasScrolled, setHasScrolled] = useState(false);
  console.log(productsin);

  productsin.forEach((element: Product) => {
    if (element.featured) {
      console.log(element);
      featuredProdcuts.push(element);
    }
  });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    // Get the amount scrolled horizontally
    const scrollAmount = event.currentTarget.scrollLeft;

    // Check if the scroll amount is greater than or equal to 50 pixels
    if (scrollAmount >= 24) {
      setHasScrolled(true);
    }
  };

  return (
    <>
      <Box
        paddingY="16px"
        paddingLeft={!hasScrolled ? "24px" : "0px"}
        scrollPadding={0}
        transition="padding 0.3s ease-in-out"
      >
        <Heading paddingBottom="16px" paddingX="24px">
          Featured
        </Heading>
        <Flex>
          <HStack
            w="100%"
            overflowX="scroll"
            className="FeaturedProducts"
            //marginBlock={3}
            spacing="8px"
            onScroll={handleScroll}
          >
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
