import { Button, HStack, Text } from "@chakra-ui/react";
import { Provider as CProvider } from "@plumbing/components/ui/provider";

import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "swiper/swiper-bundle.css";
import BackToTop from "./components/BackToTop";
import { Toaster } from "./components/ui/toaster";
import { globalStyles } from "./theme/global";

const ErrorFallback = () => {
  return (
    <HStack justify={"center"}>
      <Text>Something went wrong:</Text>
      <Button
        style={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          border: "1px solid #333",
          padding: "8px",
        }}
        onClick={() => window.location.reload()}
      >
        Retry
      </Button>
    </HStack>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <CProvider>
          <HelmetProvider>{children}</HelmetProvider>
          {globalStyles()}
          <BackToTop />
          <Toaster />
        </CProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Providers;
