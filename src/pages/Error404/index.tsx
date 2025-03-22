import { Center, HStack, Image } from "@chakra-ui/react";
import { imageAssets } from "@plumbing/assets/images";
import { Button } from "@plumbing/components/ui/button";
import { EmptyState } from "@plumbing/components/ui/empty-state";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Center w={"100dvw"} h={"100vh"}>
      <EmptyState
        icon={
          <Image
            w={"200px"}
            aspectRatio={1}
            src={imageAssets.Error404}
            alt="404"
          />
        }
        title="Page not found"
        description="The page you are looking for does not exist."
      >
        <HStack>
          <Button variant={"outline"} onClick={() => navigate(-1)}>
            Go back
          </Button>
          <Button onClick={() => navigate("/")}>Go to home</Button>
        </HStack>
      </EmptyState>
    </Center>
  );
};

export default Error404;
