import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

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
      {/* <Flex justifyContent="space-between">
        <form just>
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
      </Flex> */}

      <FormControl justifyContent="space-between" alignItems="center">
        <Flex paddingX="24px" paddingY="20px" justifyItems="center">
          <SearchIcon boxSize="32px" paddingRight="8px" />
          <Input
            type="text"
            value={filterText}
            placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)}
            border="none"
            fontSize="16px"
            fontFamily="inter"
          />
        </Flex>
        <Divider />
        <FormLabel paddingX="24px" paddingY="20px" justifyItems="center">
          <Checkbox
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
          Only show products in stock
        </FormLabel>
      </FormControl>
    </>
  );
};
export default SearchBar;
