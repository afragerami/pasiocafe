import { Tr, Th } from "@chakra-ui/react";
import React from "react";

const CategoryTitleRow = ({ category }) => {
  return (
    <Tr width="100%" bg={"gray.700"}>
      <Th colSpan={2}>{category}</Th>
    </Tr>
  );
};

export default CategoryTitleRow;
