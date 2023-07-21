import React from "react";
import { Text, Image, Icon, Box, Card } from "@chakra-ui/react";
import placeholder from "../src/assets/placeholder.svg";

const FeaturedProductCard = ({ product }) => {
  return (
    <>
      <Card
        minW={164}
        borderRadius={8}
        alignContent="space-evenly"
        alignItems="center"
        bg="transparent"
      >
        <Image
          src={placeholder}
          borderRadius="8"
          boxSize={164}
          objectFit="cover"
        ></Image>
        <Text>{product.name}</Text>
        <Text>Price: {product.price}$</Text>
      </Card>
    </>
  );
};

export default FeaturedProductCard;
