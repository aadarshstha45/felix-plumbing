import { Container, Flex, HStack, Image, Link } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";
import { contactData, navItems } from "../data";
import MobileNav from "./MobileNav";

const BottomNav = () => {
  return (
    <Flex
      w={"full"}
      bg={"#FBFBFB"}
      boxShadow={
        "0px 18px 25px 0px rgba(0, 0, 0, 0.08), 0px 6.933px 7.963px 0px rgba(0, 0, 0, 0.05), 0px 1.467px 2.037px 0px rgba(0, 0, 0, 0.03)"
      }
      h={"80px"}
      align={"center"}
    >
      <Container maxW={"1440px"}>
        <HStack gap={"20px"} mx={"auto"} w={"full"} justify={"space-between"}>
          <Image w={"100px"} src={imageAssets.LogoPNG} alt={"Logo"} />
          <MobileNav />
          <HStack gap={"40px"} hideBelow={"950px"}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                color={"#626262"}
                fontSize={"16px"}
                lineHeight={"24px"}
                letterSpacing={"0.07px"}
                outline={"none"}
                href={item.to}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size={"lg"}>
              <Link
                href={
                  contactData.find((contact) => contact.label === "Phone")?.link
                }
                outline={"none"}
              >
                Call Now
              </Link>
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
};

export default BottomNav;
