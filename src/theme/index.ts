import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ColorStyle } from "./ColorStyle";
import { textStyles } from "./components/TextStyle";
import { buttonRecipes } from "./recipes/button.recipe";

const config = defineConfig({
  globalCss: {
    "html, body": {},
  },

  theme: {
    recipes: {
      button: buttonRecipes,
    },
    tokens: {
      colors: ColorStyle,
    },
    textStyles,
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.gray.100}" },
          emphasized: { value: "{colors.primary.900}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
