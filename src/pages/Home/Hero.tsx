import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";

const Hero = () => {
  return (
    <Flex
      bg={`url(${imageAssets.HomeBanner})`}
      pos={"relative"}
      bgSize={"cover"}
      aspectRatio={2.58}
    >
      <Stack
        ml={{ base: "10px", md: "34px" }}
        maxW={{ sm: "700px", xl: "1000px" }}
        p={{ base: "50px 10px", sm: "60px 20px", lg: "50px 106px 50px 34px" }}
        gap={8}
        h={"full"}
        justify={"center"}
      >
        <Text
          fontSize={{ base: "20px", sm: "24px", md: "36px", xl: "48px" }}
          lineHeight={{ base: "36px", md: "56px" }}
          letterSpacing={"0.02em"}
          color={"#FFFFFF"}
          fontWeight={700}
        >
          Round-the-Clock Pipes, Infinite Solutions: Your Plumbing Partner,
          Always Available!
        </Text>
        <Text
          fontSize={{ base: "14px", md: "17px", xl: "20px" }}
          lineHeight={"32px"}
          letterSpacing={"0.02em"}
          color={"#FFFFFF"}
        >
          Welcome to Felix's Plumbing LLC, where we bring over 18 years of
          personal expertise to your doorstep. Specializing in residential
          plumbing services, we offer unparalleled reliability and efficiency.
          Our team ensures your plumbing needs are met with precision and care.
        </Text>
        <Button asChild>
          <Link href="#request-an-appointment">Send us a message</Link>
        </Button>
      </Stack>
    </Flex>
  );
};

export default Hero;
