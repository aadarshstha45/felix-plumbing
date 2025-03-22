import { GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";

const whyChooseUsData = [
  {
    caption: "Why Choose Us",
    title: "Your Trusted Plumbing Partner",
    body: "At Felix's Plumbing LLC, we understand the importance of prompt and reliable plumbing services. Our team of skilled professionals is dedicated to resolving your plumbing issues efficiently. We're always ready to assist, especially in emergencies. Customers choose us for our commitment to satisfaction, transparent pricing, and the values we uphold. Let us be your go-to plumbing service provider in Tucson, AZ.",
    image: imageAssets.RepairingGas,
  },
  {
    caption: "Expert Experience Guaranteed!",
    title: "Excellence in Every Service",
    body: "Felix's Plumbing LLC offers a diverse range of services, each designed to meet your specific needs. Our runs efficiently, offering both installation and maintenance. With our gas line services, , we focus on safety, providing leak detection and repairs. Our sewer services  are aimed at preventing blockages and maintaining system health. Each service is delivered with our signature commitment to customer satisfaction, efficiency, and technical excellence.",
    image: imageAssets.RepairingWater,
  },
];

const WhyChooseUs = () => {
  return whyChooseUsData.map((item, index) => (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      bg={index % 2 === 0 ? "primary.500" : "gray.700"}
      key={index}
    >
      <GridItem order={index % 2 === 0 ? 0 : 1} w={"full"}>
        <Image
          minH={"100%"}
          maxH={"450px"}
          objectFit={"cover"}
          objectPosition={"center"}
          src={item.image}
          alt={item.caption}
          w={"full"}
        />
      </GridItem>
      <GridItem
        order={index % 2 === 0 ? 1 : 0}
        color="white"
        w={"full"}
        justifyItems={index % 2 === 0 ? "start" : "end"}
        p={{ base: 4, md: 10 }}
      >
        <Stack
          maxW={"521px"}
          w={"full"}
          alignSelf={index % 2 === 0 ? "start" : "end"}
          ml={{ md: index % 2 === 0 ? 10 : "auto" }}
          mr={{ md: index % 2 === 0 ? "auto" : 10 }}
          h={"full"}
          justify={"center"}
        >
          <Text fontSize={"16px"} lineHeight={"26px"} letterSpacing={"0.08px"}>
            {item.caption}
          </Text>
          <Text
            mt={"5px"}
            fontSize={"36px"}
            fontWeight={700}
            lineHeight={"46px"}
            letterSpacing={"0.18px"}
          >
            {item.title}
          </Text>
          <Text
            mt={"10px"}
            fontSize={"16px"}
            lineHeight={"26px"}
            letterSpacing={"0.08px"}
          >
            {item.body}
          </Text>
        </Stack>
      </GridItem>
    </SimpleGrid>
  ));
};

export default WhyChooseUs;
