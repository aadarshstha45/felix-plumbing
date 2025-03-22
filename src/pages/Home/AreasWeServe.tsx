import {
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";

const areasWeServe = [
  "Oro Valley",
  "Marana",
  "Río Rico",
  "Sahuarita",
  "Vail",
  "Green valley",
];

const AreasWeServe = () => {
  return (
    <Container
      id="areas-we-serve"
      maxW={"1250px"}
      py={{ base: "60px", md: "100px", xl: "120px" }}
    >
      <Stack gap={"20px"}>
        <Text textStyle={"heading"} color={"primary.500"} textAlign={"center"}>
          Areas We Serve
        </Text>
        <Text textAlign={"center"} textStyle={"caption"} color={"#626262"}>
          We're proud to serve Tucson,AZ, and the surrounding areas with our
          quality services.
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} gap={4}>
          {areasWeServe.map((area, index) => (
            <HStack
              key={index}
              p={"33px 21.47px 25px 25px"}
              borderRadius={"12px"}
              border={"1px solid rgba(98, 98, 98, 0.24)"}
              gap={"8px"}
              color={"#626262"}
              _hover={{
                bg: "primary.500",
                color: "white",
              }}
              transition={"all 0.3s"}
            >
              <Icon asChild boxSize={"24px"}>
                <MapPin />
              </Icon>
              <Text
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "18px",
                  xl: "20px",
                }}
              >
                {area}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default AreasWeServe;
