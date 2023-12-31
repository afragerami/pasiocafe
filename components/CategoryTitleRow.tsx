import { Text, Divider } from "@chakra-ui/react";

interface Props {
  category: string;
}

const CategoryTitleRow = ({ category }: Props) => {
  return (
    <>
      <Text fontFamily="inter" fontSize="16px" fontWeight="bold" padding="24px">
        {category}
      </Text>
      <Divider />
    </>
  );
};

export default CategoryTitleRow;
