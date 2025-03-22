import { createIcon, IconProps } from "@chakra-ui/react";

const CameraInspection = createIcon({
  displayName: "CameraInspection",
  path: (
    <>
      <path d="M21 7h-3.18l-1.72-2H7.9L6.18 7H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-9 9a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
      <circle cx="12" cy="13" r="2" />
    </>
  ),
});

export const CameraInspectionIcon = (props: IconProps) => (
  <CameraInspection
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  />
);
