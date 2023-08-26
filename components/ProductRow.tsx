import { Text, Image, Flex, Box } from "@chakra-ui/react";

import placeholder from "../src/assets/placeholder.svg";

import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

const ProductRow = ({ product }: Props) => {
  return (
    <Flex padding="24px" justifyContent="space-between">
      <Box>
        <Text fontStyle="b" fontWeight="bold" fontSize="12px">
          {product.name}
        </Text>
        <Text fontSize="10px">a short description about it.</Text>
        <Text fontSize="12px">${product.price}</Text>
      </Box>
      <Box className="container">
        <Image
          src={placeholder}
          boxSize="64px"
          objectFit="cover"
          borderRadius="8px"
        />
      </Box>
    </Flex>
  );

  // return (
  //   <>
  //     <Tr>
  //       <Td>
  //         <Text fontStyle="b" fontWeight="bold" fontSize="12px">
  //           {product.name}
  //         </Text>
  //         <Text fontSize="10px">a short description about it.</Text>
  //         <Text fontSize="12px">${product.price}</Text>
  //       </Td>
  //       <Td>
  //         <div className="container">
  //           <Image
  //             src={placeholder}
  //             boxSize="64px"
  //             objectFit="cover"
  //             borderRadius="8px"
  //           />
  //           <AddIcon
  //             className="fas fa-download"
  //             boxSize="16px"
  //             border="2px"
  //             borderRadius="full"
  //             borderColor={"gray.700"}
  //             bg="gray.700"
  //           />
  //         </div>
  //       </Td>
  //     </Tr>
  //   </>
  // );
};

export default ProductRow;
