import { useState } from "react";
import "./App.css";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

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
            Aside
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
            filterCategory={""}
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

function CategoryList({ products }) {
  const categories: string[] = [];

  products.forEach((element) => {
    categories.push(element.category);
  });

  const result: string[] = [];

  for (const item of categories) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return <Text> {result}</Text>;
}
// products.forEach((product) => {
//if(categories.find(product.category)) {
//  return (null);
// }
//categories.push(product.name);
// }
// return (null);

function CategoryRow({ string: category }) {
  //<span style={{ color: "red" }}>{product.name}</span>
  <Text>{category}</Text>;
  return (
    <Tr>
      <Td>{category}</Td>
    </Tr>
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

const PRODUCTS = [
  { category: "Coffee", price: "$1", stocked: true, name: "Espresso" },
  { category: "Coffee", price: "$1", stocked: true, name: "Late" },
  { category: "Cold Drinks", price: "$2", stocked: false, name: "Mojito" },
  { category: "Cold Drinks", price: "$2", stocked: true, name: "Lemonade" },
  { category: "Cakes", price: "$4", stocked: false, name: "Choclate Cake" },
  { category: "Cakes", price: "$1", stocked: true, name: "Cheesecake" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
