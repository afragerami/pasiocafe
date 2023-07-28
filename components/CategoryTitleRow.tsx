import { Tr, Th, Text } from "@chakra-ui/react";
import React from "react";

const CategoryTitleRow = ({ category }) => {
  return (
    // <Tr width="100%" bg={"gray.700"}>
    //   <Th colSpan={2}>{category}</Th>
    // </Tr>

    <Text fontFamily="inter" fontSize="16px" fontWeight="bold" padding="24px">
      {category}
    </Text>
  );
};

export default CategoryTitleRow;
