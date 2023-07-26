import { SearchIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
  onFilterTextChange: (filterText: string) => void;
  searchCaterogy: string;
  onSearchCategoryChange: (searchCategory: string) => void;
}

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
  searchCaterogy,
  onSearchCategoryChange,
}: Props) => {
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
};
export default SearchBar;
