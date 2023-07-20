import { useState } from "react";
import productData from "../data/ProductsData";
import "./App.css";
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
      ></Grid>
      <GridItem area="heading"></GridItem>
      <GridItem area="nav">
        {" "}
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </GridItem>
      <HStack>
        <Show above="lg">
          <GridItem area="aside" bg="gray.300" paddingX={5}>
            {" "}
            Categories
            <CategoryList products={PRODUCTS} />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          paddingX={5}
          alignContent="center"
          justifyContent="center"
        >
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
            filterCategory={filterCategoryNew}
          />
        </GridItem>
      </HStack>
      <GridItem area="footer" bg="gold">
        <Text> this is the footer</Text>
      </GridItem>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <Tr>
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

function CategoryRow({ category }) {
  return (
    <>
      <HStack>
        <Button key={category} onClick={() => SetFilterCategoryNew(category)}>
          {category}
        </Button>
      </HStack>
    </>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    //<span style={{ color: "red" }}>{product.name}</span>
    <Text>{product.name}</Text>
  );

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{product.price}</Td>
    </Tr>
  );
}

function ProductTable({ products, filterText, inStockOnly, filterCategory }) {
  const rows = [];
  let lastCategory: null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (
      product.category.toLowerCase().indexOf(filterCategory.toLowerCase()) ===
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
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default function App() {
  return <FilterableProductTable products={productData} />;
}
