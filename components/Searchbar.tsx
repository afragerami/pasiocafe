import { SearchIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
  onFilterTextChange: (filterText: string) => void;
}
const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
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
