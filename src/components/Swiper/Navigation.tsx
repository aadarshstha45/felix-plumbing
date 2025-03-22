import { HStack, Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { FC } from "react";
import { useSwiper } from "swiper/react";

const Navigation: FC<IconButtonProps> = ({ ...rest }) => {
  const swiper = useSwiper();
  return (
    <HStack>
      <IconButton
        onClick={() => swiper.slidePrev()}
        pos={"absolute"}
        left={0}
        top={"50%"}
        borderRadius={"full"}
        transform={"translateY(-50%)"}
        zIndex={99}
        size={{ base: "xs", md: "sm" }}
        {...rest}
      >
        <Icon asChild boxSize={{ base: 4, md: 6 }}>
          <CaretLeft weight="bold" />
        </Icon>
      </IconButton>
      <IconButton
        onClick={() => swiper.slideNext()}
        pos={"absolute"}
        right={0}
        top={"50%"}
        size={{ base: "xs", md: "sm" }}
        borderRadius={"full"}
        transform={"translateY(-50%)"}
        zIndex={99}
        {...rest}
      >
        <Icon asChild boxSize={{ base: 4, md: 6 }}>
          <CaretRight weight="bold" />
        </Icon>
      </IconButton>
    </HStack>
  );
};

export default Navigation;
