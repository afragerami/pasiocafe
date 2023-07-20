import React from "react";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  List,
  ListItem,
  Show,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name : <Text>{product.name}</Text>;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{product.price}</Td>
    </Tr>
  );
};

export default ProductRow;
