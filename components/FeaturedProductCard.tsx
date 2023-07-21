import React from "react";
import { Text, Image, Icon, Box } from "@chakra-ui/react";
import placeholder from "../src/assets/placeholder.svg";

const FeaturedProductCard = ({ product }) => {
  return (
    <>
      <Box minWidth="200px" bg="gray.700" borderRadius={8}>
        <Image src={placeholder} boxSize={164} borderRadius={16}></Image>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </Box>
    </>
  );
};

export default FeaturedProductCard;
