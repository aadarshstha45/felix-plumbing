import { Icon, IconButton } from "@chakra-ui/react";
import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <IconButton
      pos="fixed"
      bottom={4}
      right={4}
      colorScheme="blue"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      display={isVisible ? "block" : "none"}
      animation={"bounce"}
      animationDuration={"2s"}
      rounded={"full"}
    >
      <Icon asChild boxSize={6}>
        <ArrowUp />
      </Icon>
    </IconButton>
  );
}
