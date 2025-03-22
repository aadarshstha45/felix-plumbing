import { Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";

const OurOffers = () => {
  return (
    <Flex
      bg={`url(${imageAssets.OurOffers})`}
      bgSize={"cover"}
      bgPos={"center"}
      aspectRatio={1920 / 368}
      id="our-offers"
    >
      <Stack
        maxW={"490px"}
        gap={"10px"}
        my={10}
        ml={{ base: "10px", sm: "30px", lg: "382px" }}
      >
        <Text
          textStyle={"caption"}
          color={"gray.50"}
          textTransform={"capitalize"}
        >
          See our offers
        </Text>
        <Text textStyle={"heading"} color={"gray.50"}>
          Free Estimate
        </Text>
        <Text textStyle={"caption"} color={"gray.50"}>
          Whether it's a small repair or a major installation, we've got you
          covered. Don't let plumbing issues disrupt your day. Reach out to us -
          your trusted plumbing partner!
        </Text>
        <Button asChild>
          <Link
            className="dark"
            colorPalette={"gray"}
            outline={"none"}
            href="#request-an-appointment"
            mt={4}
          >
            Let's Talk
            <Icon asChild boxSize={"20px"} color={"#05035F"}>
              <ArrowRight />
            </Icon>
          </Link>
        </Button>
      </Stack>
      {/* Add your code here */}
    </Flex>
  );
};

export default OurOffers;
