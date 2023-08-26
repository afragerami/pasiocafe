import { SearchIcon } from "@chakra-ui/icons";
import { Flex, FormControl, Input } from "@chakra-ui/react";

interface Props {
  filterText: string;

  onFilterTextChange: (filterText: string) => void;
}
const SearchBar = ({
  filterText,

  onFilterTextChange,
}: Props) => {
  return (
    <>
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
      </FormControl>
    </>
  );
};
export default SearchBar;
