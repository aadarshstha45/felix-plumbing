import { Flex } from "@chakra-ui/react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <Flex flexDir={"column"}>
      <TopNav />
      <BottomNav />
    </Flex>
  );
};

export default Navbar;
