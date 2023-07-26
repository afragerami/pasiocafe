import { useState } from "react";

import { Grid, GridItem, Center, HStack, Show, Text } from "@chakra-ui/react";

import FeaturedProductsList from "../components/FeaturedProductsList";
import CategoryListScrolable from "../components/CategoryListScrolable";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/Searchbar";
import ProductTable from "../components/ProductTable";

const FilterableProductTable = ({ products }) => {
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
          />
        </Center>
      </GridItem>
      <GridItem area="nav" minW="100%">
        <CategoryListScrolable
          products={products}
          selectedCategory={filterCategory}
          onSelectedCategoryChange={setFilterCategory}
        ></CategoryListScrolable>
        <FeaturedProductsList productsin={products}></FeaturedProductsList>
      </GridItem>
      <HStack>
        <Show above="lg">
          <GridItem area="aside" bg="gray.300" paddingX={5}>
            {" "}
            Categories
            <CategoryList
              products={products}
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
};

export default FilterableProductTable;
