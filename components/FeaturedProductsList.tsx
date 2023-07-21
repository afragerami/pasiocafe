import React from "react";

import FeaturedProductCard from "./FeaturedProductCard";
import { Product } from "../hooks/useProducts";
import { HStack, Heading } from "@chakra-ui/react";

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
      <Heading>Featured</Heading>
      <HStack overflowX="scroll" width="100%" marginBlock={3} spacing="8px">
        {featuredProdcuts.map((element) => (
          <FeaturedProductCard key={element} product={element} />
        ))}
      </HStack>
    </>
  );
};

export default FeaturedProductsList;
