import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";

const ContactUs = () => {
  return (
    <Flex
      bg={`url(${imageAssets.ContactBanner})`}
      pos={"relative"}
      bgSize={"cover"}
      aspectRatio={2.58}
      justify={"right"}
      pr={{ base: 0, md: 20 }}
    >
      <Stack my={4} maxW={"800px"} p={{ base: 4, md: 10 }} justify={"center"}>
        <Text textStyle={"heading"} color={"primary.100"}>
          Contact Us Today!
        </Text>
        <Text textStyle={"caption"} color={"gray.50"}>
          Need reliable plumbing services in Tucson, AZ? Look no further than
          Felix's Plumbing LLCOur team is ready to tackle your plumbing
          challenges. We're committed to delivering top-quality service with a
          focus on customer satisfaction. Whether it’s a small repair or a major
          installation, we've got you covered. Don’t let plumbing issues disrupt
          your day. Reach out to us – your trusted plumbing partner!
        </Text>
        <Button size={"lg"} asChild>
          <Link outline={"none"} href="#request-an-appointment">
            Reach Out
          </Link>
        </Button>
      </Stack>
    </Flex>
  );
};

export default ContactUs;
