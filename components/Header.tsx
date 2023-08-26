import { Divider, Flex, Heading, Image } from "@chakra-ui/react";

import logo from "../src/assets/logo.png";

const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" padding="24px">
        <Heading fontFamily="inter" fontSize="24px" fontWeight="bold">
          Pasio Cafe
        </Heading>
        <Image src={logo} boxSize="48px" alt="Pasio Cafe Logo"></Image>
      </Flex>
      <Divider />
    </>
  );
};

export default Header;
