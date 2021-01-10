import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleLightMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label={
        colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
};

export default ToggleLightMode;
