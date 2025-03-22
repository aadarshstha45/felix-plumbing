import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  caption: {
    value: {
      lineHeight: {
        base: "22px",
        md: "28px",
        xl: "32px",
      },
      letterSpacing: "0.08px",
      fontSize: {
        base: "12px",
        md: "14px",
        xl: "16px",
      },
      fontWeight: 500,
    },
  },
  heading: {
    value: {
      lineHeight: {
        base: "36px",
        md: "40px",
        xl: "46px",
      },
      letterSpacing: "0.18px",
      fontSize: {
        base: "24px",
        md: "30px",
        xl: "36px",
      },
      fontWeight: 700,
    },
  },
});
