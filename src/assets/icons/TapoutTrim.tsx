import { createIcon, IconProps } from "@chakra-ui/react";

const TapoutTrim = createIcon({
  displayName: "TapoutTrim",
  path: (
    <>
      <path d="M12 2a2 2 0 0 0-2 2v5H5a1 1 0 0 0-1 1v6H2v2h4v2h2v-2h8v2h2v-2h4v-2h-2v-6a1 1 0 0 0-1-1h-5V4a2 2 0 0 0-2-2zm0 10h5v5h-5zm-7 0h5v5H5z" />
    </>
  ),
});

export const TapoutTrimIcon = (props: IconProps) => (
  <TapoutTrim
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  />
);
