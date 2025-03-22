import { List, Stack, Text } from "@chakra-ui/react";

const quickLinks = [
  { label: "Monday - Friday", value: "7am - 5pm" },
  { label: "Saturday", value: "By Appointment" },
  { label: "Sunday", value: "Closed" },
];

const Section3 = () => {
  return (
    <Stack
      textAlign={"start"}
      fontSize={{ base: "16px", md: "18px", xl: "20px" }}
    >
      <Text fontWeight={500}>Hours of Operation</Text>
      <List.Root ml={4} gap={2}>
        {quickLinks.map((service, index) => (
          <List.Item
            fontSize={{ base: "14px", md: "16px", xl: "18px" }}
            color={"white"}
            key={index}
          >
            {service.label}: {service.value}
          </List.Item>
        ))}
      </List.Root>
    </Stack>
  );
};

export default Section3;
