import { Image, List, Stack, Text } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";

const services = [
  { label: "Water Heater Service" },
  { label: "Gas Line Service" },
  { label: "Sewer Service" },
];

const Section2 = () => {
  return (
    <Stack textAlign={"start"}>
      <Text
        fontSize={{ base: "16px", md: "18px", xl: "20px" }}
        fontWeight={500}
      >
        Our Services
      </Text>
      <List.Root ml={4} gap={2}>
        {services.map((service, index) => (
          <List.Item
            fontSize={{ base: "14px", md: "16px", xl: "18px" }}
            key={index}
          >
            {service.label}
          </List.Item>
        ))}
      </List.Root>
      <Image
        src={imageAssets.License}
        alt={"Plumbing"}
        w={"100px"}
        height={"auto"}
      />
    </Stack>
  );
};

export default Section2;
