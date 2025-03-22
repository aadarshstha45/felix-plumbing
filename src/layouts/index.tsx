import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutWrapper = () => {
  return (
    <Flex flexDir={"column"} maxW={"100vw"} w={"full"} overflowX={"hidden"}>
      <Navbar />
      <Box as={"main"}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default LayoutWrapper;
