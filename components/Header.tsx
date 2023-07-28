import { Divider, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../src/assets/logo.png";

const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" padding="24px">
        <Heading fontFamily="inter" fontSize="24px" fontWeight="bold">
          Pasio Cafe
        </Heading>
        <Image
          src={logo}
          boxSize="48px"
          border="2px"
          borderRadius="8px"
          alt="Pasio Cafe Logo"
        ></Image>
      </Flex>
      <Divider />
    </>
  );
};

export default Header;
