import {
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { List } from "@phosphor-icons/react";
import { imageAssets } from "@plumbing/assets/images";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@plumbing/components/ui/drawer";
import { useState } from "react";
import { contactData, navItems } from "../data";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerTrigger asChild hideFrom={"950px"}>
        <IconButton variant={"ghost"}>
          <Icon asChild boxSize={8}>
            <List />
          </Icon>
        </IconButton>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
          py={"10px"}
          pos={"relative"}
        >
          <Image
            src={imageAssets.LogoPNG}
            alt={"Plumbing"}
            w={"80px"}
            height={"auto"}
          />
          <DrawerCloseTrigger />
        </DrawerHeader>
        <DrawerBody p={0}>
          <Stack gap={"20px"} p={"24px"}>
            {navItems.map((item, index) => (
              <Link
                fontSize={{ base: "18px", sm: "22px" }}
                fontWeight={500}
                outline={"none"}
                href={item.to}
                onClick={() => setOpen(false)}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </DrawerBody>
        <DrawerFooter hideFrom={"950px"} px={2} py={6}>
          <Stack w={"full"}>
            {contactData.map((item, index) => (
              <HStack key={index} className="group" asChild>
                <Link
                  outline={"none"}
                  target="_blank"
                  href={item.link}
                  color={"#626262"}
                >
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
                    whiteSpace={"nowrap"}
                    letterSpacing={"0.07px"}
                    lineClamp={1}
                  >
                    {item.value}
                  </Text>
                </Link>
              </HStack>
            ))}
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileNav;
