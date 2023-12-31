import CategoryTitleRow from "../components/CategoryTitleRow";
import ProductRow from "../components/ProductRow";
import { Flex } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

interface Props {
  products: Product[];
  filterText: string;

  filterCategory: string;
  searchCaterogyIN: string;
}

const ProductTable = ({
  products,
  filterText,

  searchCaterogyIN,
}: Props) => {
  const rows: Array<any> = [];
  //const rows = [] = <ProductRow>[];
  let lastCategory: string = "";

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (
      product.category.toLowerCase().indexOf(searchCaterogyIN.toLowerCase()) ===
      -1
    ) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <CategoryTitleRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  // return (
  //   <TableContainer>
  //     <Table variant="simple">
  //       <Tbody>{rows}</Tbody>
  //     </Table>
  //   </TableContainer>
  // );

  return <Flex flexDirection="column">{rows}</Flex>;
};

export default ProductTable;
