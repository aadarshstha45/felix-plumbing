const buttonStyle = {
  width: "max-content",
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  _active: {
    transform: "scale(0.99)",
  },
  borderRadius: "8px",
  fontWeight: 500,
};

export const buttonRecipes = {
  variants: {
    variant: {
      outline: {
        ...buttonStyle,
        border: "2px solid",
      },
      solid: {
        ...buttonStyle,
      },
      subtle: {
        ...buttonStyle,
      },
      surface: {
        ...buttonStyle,
      },
      ghost: {
        boxShadow: "none",
        _active: {
          transform: "scale(0.99)",
        },
      },
    },
  },
  base: {
    colorPalette: "primary",
  },
};
