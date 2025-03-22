import {
  Box,
  Card,
  Container,
  Flex,
  Image,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  CameraInspectionIcon,
  GasLineIcon,
  SewerIcon,
  TapoutTrimIcon,
  WaterHeaterIcon,
} from "@plumbing/assets/icons";
import { imageAssets } from "@plumbing/assets/images";
import Navigation from "@plumbing/components/Swiper/Navigation";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakPoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1130: {
    slidesPerView: 3,
  },
};

const ourServices = [
  {
    image: imageAssets.WaterHeaterService,
    title: "Water Heater Service",
    icon: <WaterHeaterIcon boxSize={"100px"} />,
    description:
      "We offer water heater repair, installation, and maintenance services.",
    services: [
      "Installation and Replacement",
      "Repairs and Troubleshooting",
      "Routine Maintenance",
      "Emergency Services",
    ],
  },
  {
    image: imageAssets.DrainService,
    title: "Drain Service",
    icon: <SewerIcon boxSize={"100px"} />,
    description:
      "For reliable sewer services, choose us. We specialize in sewer installation, maintenance, and repair, providing solutions that keep your system running smoothly and efficiently.",
    services: [
      "Drain Cleaning and Unclogging",
      "Hydro Jetting",
      "Video Camera Inspection",
    ],
  },
  {
    image: imageAssets.GasLineService,
    title: "Gas Line Service",
    icon: <GasLineIcon boxSize={"100px"} />,

    description:
      "Depend on us for professional gas line services. From leak repairs to line replacement, our skilled gas line plumbers ensure your safety and compliance with the highest standards",
    services: [
      "Gas Line Installation & Replacement",
      "Leak Detection &  Repair",
      "Gas Line Inspection & Maintenance",
    ],
  },
  {
    image: imageAssets.CameraInspectionService,
    title: "Camera Inspection",
    icon: <CameraInspectionIcon boxSize={"100px"} />,
    description:
      "Our advanced camera inspection services allow us to detect hidden issues in your plumbing system, ensuring precise diagnostics and effective solutions.",
    services: [
      "Sewer Line Video Inspection",
      "Leak and Blockage Detection",
      "Pre-Purchase Plumbing Inspections",
      "Routine Maintenance Checks",
    ],
  },
  {
    image: imageAssets.UndergroundTapoutTrimService,
    title: "Underground Tapout & Trim",
    icon: <TapoutTrimIcon boxSize={"100px"} />,
    description:
      "We specialize in underground tapout and trim services, ensuring secure connections and proper functionality for your underground water and sewer lines.",
    services: [
      "Underground Pipe Installation",
      "Tapout for New Connections",
      "Pipe Trimming and Adjustments",
      "Compliance and Safety Checks",
    ],
  },
];
const OurServices = () => {
  return (
    <Flex py={{ base: "40px", md: "60px", xl: "80px" }} id="our-services">
      <Container maxW="1260px">
        <Text color="primary.500" textAlign="center" textStyle="heading">
          Quality Services You Can Rely On
        </Text>
        <Text
          textAlign="center"
          color="#626262"
          my="10px"
          textStyle={"caption"}
        >
          Trust Felix's Plumbing LLC for reliable and efficient plumbing
          solutions. We are your local experts in Tucson, AZ, dedicated to
          exceptional service. Discover why our customers keep coming back.
          Click to learn more about our services!
        </Text>
        <Box mt="10px">
          <Swiper
            slidesPerView={3}
            loop
            autoplay={{ delay: 2000 }}
            speed={1500}
            modules={[Autoplay]}
            spaceBetween={50}
            breakpoints={breakPoints}
          >
            {[...ourServices, ...ourServices, ...ourServices].map(
              (service, index) => {
                const [isHovered, setIsHovered] = useState(false); // Local state for each card
                return (
                  <SwiperSlide key={index}>
                    <Stack
                      pos={"relative"}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <Card.Root
                        pos="relative"
                        aspectRatio={0.8}
                        minW={{ base: "full", sm: "350px" }}
                        maxW="354px"
                        mx="auto"
                        minH={"max-content"}
                        transform={isHovered ? "rotateY(180deg)" : "rotateY(0)"}
                        transformStyle="preserve-3d"
                        transition="transform 0.5s"
                      >
                        {/* Front Side */}

                        <Card.Body
                          pos="absolute"
                          w="full"
                          h="full"
                          backfaceVisibility="hidden"
                          py={{ base: "20px", sm: "50px" }}
                          px={{ base: "20px", sm: "40px" }}
                        >
                          <Stack gap="20px">
                            {service.icon}
                            <Card.Title fontSize="22px" lineHeight="26px">
                              {service.title}
                            </Card.Title>
                            <Card.Description
                              fontSize={{ base: "16px", sm: "18px" }}
                              lineHeight="26px"
                            >
                              {service.description}
                            </Card.Description>
                          </Stack>
                        </Card.Body>

                        {/* Back Side */}
                        <Card.Body
                          p={0}
                          w="full"
                          h="full"
                          transform="rotateY(180deg)"
                          backfaceVisibility="hidden"
                          overflow={"hidden"}
                          pos={"relative"}
                        >
                          <Box
                            pos="absolute"
                            top={0}
                            left={0}
                            w={"full"}
                            h={"full"}
                            bg={"rgba(0,0,0,0.5)"}
                            zIndex={0}
                          />
                          <Image
                            h="full"
                            w="full"
                            src={service.image}
                            top={0}
                            borderRadius={"md"}
                            left={0}
                          />
                          <Stack
                            pos="absolute"
                            top={0}
                            left={0}
                            w={"full"}
                            h={"full"}
                            justify={"center"}
                            align={"center"}
                            color="white"
                            gap={"30px"}
                            px={4}
                          >
                            <Text
                              textAlign={"center"}
                              fontWeight={600}
                              fontSize={"24px"}
                            >
                              {service.title}
                            </Text>
                            <List.Root>
                              {service.services.map((service, index) => (
                                <List.Item letterSpacing={"0.08px"} key={index}>
                                  {service}
                                </List.Item>
                              ))}
                            </List.Root>
                          </Stack>
                        </Card.Body>
                      </Card.Root>
                    </Stack>
                  </SwiperSlide>
                );
              }
            )}

            <Navigation hideBelow={"md"} colorPalette="gray" variant="subtle" />
          </Swiper>
        </Box>
      </Container>
    </Flex>
  );
};

export default OurServices;
