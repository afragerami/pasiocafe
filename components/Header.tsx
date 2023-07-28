import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../src/assets/logo.png";

const Header = () => {
  return (
    <>
      <Flex>
        <Heading>Pasio Cafe</Heading>
        <Image src={logo}></Image>
      </Flex>
    </>
  );
};

export default Header;
