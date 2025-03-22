import {
  Container,
  Flex,
  HStack,
  Icon,
  Separator,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { contactData } from "../data";

const TopNav = () => {
  return (
    <Flex
      id="nav"
      w={"full"}
      h={"60px"}
      align={"center"}
      bg={"#FBFBFB"}
      boxShadow={"0px -1px 14px 0px rgba(0, 0, 0, 0.08) inset"}
      hideBelow={"920px"}
    >
      <Container maxW={"1440px"}>
        <HStack gap={"20px"} w={"full"} justify={"space-between"}>
          <HStack gap={"20px"}>
            <Text
              hideBelow={"1040px"}
              color={"#626262"}
              fontSize={"14px"}
              lineHeight={"24px"}
              letterSpacing={"0.07px"}
            >
              Reach out to us!
            </Text>
            {contactData.map((item, index) => (
              <HStack key={index} className="group" asChild>
                <Link to={item.link} color={"#626262"}>
                  <Icon asChild boxSize={"20px"}>
                    {item.icon}
                  </Icon>
                  <Text
                    key={index}
                    color={"#626262"}
                    fontSize={"14px"}
                    lineHeight={"24px"}
                    _groupHover={{
                      textDecoration: "underline",
                    }}
                    letterSpacing={"0.07px"}
                  >
                    {item.value}
                  </Text>
                  <Separator
                    orientation={"vertical"}
                    height={"20px"}
                    display={
                      index === contactData.length - 1 ? "none" : "block"
                    }
                    borderWidth={"1px"}
                    borderColor={"#919EAB"}
                  />
                </Link>
              </HStack>
            ))}
          </HStack>
          <Text
            textTransform={"capitalize"}
            color={"#626262"}
            fontSize={"14px"}
            lineHeight={"24px"}
            _groupHover={{
              textDecoration: "underline",
            }}
            letterSpacing={"0.07px"}
          >
            licenses number [355085]
          </Text>
        </HStack>
      </Container>
    </Flex>
  );
};

export default TopNav;
