import CategoryTitleRow from "../components/CategoryTitleRow";
import ProductRow from "../components/ProductRow";
import { TableContainer, Table, Tbody } from "@chakra-ui/react";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
  filterCategory,
  searchCaterogyIN,
}) => {
  const rows = [];
  let lastCategory: null = null;

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
    if (inStockOnly && !product.stocked) {
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

  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>{rows}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
