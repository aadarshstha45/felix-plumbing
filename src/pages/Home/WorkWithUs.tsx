import {
  Card,
  Link as CLink,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";
import { contactData } from "@plumbing/layouts/data";
import { Link } from "react-router-dom";

const WorkWithUs = () => {
  return (
    <Flex id="about-us" py={{ base: "20px", md: "44px" }}>
      <Card.Root maxW={"1256px"} mx={"auto"} w={"full"} variant={"subtle"}>
        <Card.Body>
          <SimpleGrid alignItems={"start"} columns={{ base: 1, md: 2 }} gap={8}>
            <Stack>
              <Text
                color={"#212B36"}
                fontSize={{ base: "20px", md: "30px", xl: "36px" }}
                fontWeight={700}
                lineHeight={"36px"}
                letterSpacing={"0.18px"}
              >
                Premier Plumbing Services in&nbsp;
                <Text fontWeight={400} as={"span"} color={"#05035F"}>
                  Tucson, AZ,&nbsp;
                </Text>
                and the Surrounding Areas
              </Text>
              <Text
                mt={{ base: "10px", sm: "20px", lg: "30px" }}
                fontSize={{ base: "14px", lg: "16px" }}
                lineHeight={"26px"}
                letterSpacing={"0.08px"}
              >
                In Tucson, AZ,Felix's Plumbing LLC stands out with a commitment
                to excellence and customer satisfaction. Our unique approach
                ensures we're always there when you need us. With over 18 years
                of personal experience, our team excels in delivering
                comprehensive plumbing services – from routine maintenance to
                emergency repairs and complex installations. Experience the
                difference with US Plumbing – your trusted partner for quality
                plumbing services in Tucson, AZ. Contact us today for a free
                estimate!
              </Text>
              <Button mt={"10px"} asChild>
                <CLink outline={"none"} href="#request-an-appointment">
                  Work With Us
                </CLink>
              </Button>
            </Stack>
            <Stack gap={"22px"} maxW={"540px"}>
              {contactData.map((item, index) => (
                <Flex
                  p={{ base: "10px", xl: "21.5px 37.5px 20px 25px" }}
                  alignItems={"start"}
                  key={index}
                  gap={4}
                  bg={"rgba(255, 255, 255, 0.00)"}
                  boxShadow={"0px 0px 2px 1px rgba(145, 158, 171, 0.32)"}
                  borderRadius={"8px"}
                  asChild
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Link to={item.link}>
                    <Icon asChild boxSize={"25px"}>
                      {item.icon}
                    </Icon>
                    <Text
                      fontWeight={500}
                      color={"#626262"}
                      lineHeight={"26px"}
                      letterSpacing={"0.08px"}
                      wordBreak={"break-word"}
                    >
                      {item.value}
                    </Text>
                  </Link>
                </Flex>
              ))}
              <Link
                // outline={"none"}
                to="https://www.bbb.org/us/az/tucson/profile/plumber/felix-plumbing-llc-1286-20125615"
                target="_blank"
              >
                <Image
                  justifySelf={"center"}
                  mt={4}
                  src={imageAssets.BBBLogo}
                  alt={"Logo"}
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default WorkWithUs;
