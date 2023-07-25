import { useState } from "react";
import productData from "../data/ProductsData";
import useProducts from "../hooks/useProducts";
import placeholder from "../src/assets/placeholder.svg";
import FeaturedProductsList from "../components/FeaturedProductsList.tsx";
import CategoryListScrolable from "../components/CategoryListScrolable.tsx";

import ProductRow from "../components/ProductRow.tsx";
import CategoryRow from "../components/CategoryRow.tsx";

import "./App.css";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Show,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  position,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";

let filterCategoryNew = "";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"heading" "nav" "main" "footer"`,
          lg: `"heading heading" "nav nav" "aside main" "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {" "}
      </Grid>
      <GridItem area="heading" minW="100%">
        <Center minW="100%">
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
            onSearchCategoryChange={setFilterCategory}
            searchCaterogy={undefined}
          />
        </Center>
      </GridItem>
      <GridItem area="nav" minW="100%">
        <CategoryListScrolable products={PRODUCTS}></CategoryListScrolable>
        <FeaturedProductsList productsin={PRODUCTS}></FeaturedProductsList>
      </GridItem>
      <HStack>
        <Show above="lg">
          <GridItem area="aside" bg="gray.300" paddingX={5}>
            {" "}
            Categories
            <CategoryList
              products={PRODUCTS}
              //onSelectedCategoryChange={setFilterCategory}
            />
          </GridItem>
        </Show>
      </HStack>
      <Center>
        <GridItem
          area="main"
          // alignContent="center"
          //justifyContent="center"
          minW="100%"
        >
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
            filterCategory={filterCategory}
            searchCaterogyIN={filterCategory}
          />
        </GridItem>
      </Center>

      <GridItem area="footer" bg="gold">
        <Text> this is the footer</Text>
      </GridItem>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <Tr width="100%" bg={"gray.700"}>
      <Th colSpan={2}>{category}</Th>
    </Tr>
  );
}

// will return a non duplicated category list

function CategoryList({ products }) {
  const categories: string[] = [];

  for (const item of products) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
  return (
    <>
      {categories.map((category) => (
        <CategoryRow key={category} category={category} />
      ))}
    </>
  );
}

function SetFilterCategoryNew(category) {
  filterCategoryNew = category;
  console.log(filterCategoryNew);
}

function ProductTable({
  products,
  filterText,
  inStockOnly,
  filterCategory,
  searchCaterogyIN,
}) {
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
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
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
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
  searchCaterogy,
  onSearchCategoryChange,
}) {
  return (
    <>
      <form>
        <Box padding="5">
          <SearchIcon />
          <input
            type="text"
            value={filterText}
            placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)}
          />
        </Box>
        <Box paddingX="5">
          <input
            type="text"
            value={searchCaterogy}
            placeholder="Search the categories..."
            onChange={(e) => onSearchCategoryChange(e.target.value)}
          />
        </Box>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </form>
    </>
  );
}

const PRODUCTS = useProducts();
//const PRODUCTS = productData;

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
