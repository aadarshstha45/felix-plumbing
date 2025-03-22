import { HStack, Icon, Image, Link, Stack } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { contactData } from "@plumbing/layouts/data";

const Section1 = () => {
  return (
    <Stack gap={"10px"} color={"#FFF"} w={"full"}>
      <Image
        src={imageAssets.LogoJPG}
        alt={"Plumbing"}
        w={"170px"}
        height={"auto"}
      />
      {/* <Text>License Fully Insured</Text> */}

      {contactData.map((contactDetail, index) => (
        <HStack key={index} gap={1}>
          <Icon asChild boxSize={"24px"}>
            {contactDetail.icon}
          </Icon>
          <Link
            fontSize={{ base: "14px", md: "16px", xl: "18px" }}
            wordBreak={"break-word"}
            outline={"none"}
            color={"#FFF"}
            target="_blank"
            href={contactDetail.link}
            whiteSpace={"nowrap"}
            lineClamp={1}
          >
            {contactDetail.value}
          </Link>
        </HStack>
      ))}
    </Stack>
  );
};

export default Section1;
