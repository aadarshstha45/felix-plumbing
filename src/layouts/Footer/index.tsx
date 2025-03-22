import {
  Box,
  Container,
  Flex,
  Link,
  Separator,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

const Footer = () => {
  return (
    <Box
      w={"full"}
      bg={"gray.700"}
      color={"white"}
      pt={"40px"}
      textAlign={"center"}
    >
      <Container maxW={"1440px"}>
        <SimpleGrid
          minChildWidth={"300px"}
          alignItems={"start"}
          columns={[1, 2, 3]}
          gap={42}
        >
          <Section1 />
          <Section2 />
          <Section3 />
        </SimpleGrid>
      </Container>
      <Separator mt={4} borderColor={"gray.500"} />
      <Flex
        maxW={"90dvw"}
        mx={"auto"}
        py={"15px"}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={{ base: "14px", md: "16px", xl: "18px" }}>
          Copyright © 2025 - Felix's Plumbing LLC. All Rights Reserved.&nbsp;
          <Text as={"span"}>
            Designed By:&nbsp;
            <Link
              href="https://www.infowavesolution.com"
              target="_blank"
              color={"primary.100"}
              fontWeight={500}
              outline={"none"}
            >
              Infowave Solution
            </Link>
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
