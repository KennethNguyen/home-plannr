import React from "react";
import { Box, Heading, Flex, useMediaQuery } from "@chakra-ui/react";
import Laptop from "./LayoutGrids/Laptop";
import Tablet from "./LayoutGrids/Tablet";
import Mobile from "./LayoutGrids/Mobile";

const Home = () => {
  const houseName = "123 Street";
  // viewport breakpoint for Mobile (sm) is 361px min-width
  // viewport breakpoint for Tablet (md) is 769px min-width
  // viewport breakpoint for Laptop (lg) is 1025px min-width

  // const [isLargerThanMobile] = useMediaQuery("(min-width:361px)");
  // const [isLargerThanTablet] = useMediaQuery("(min-width:769px)");
  // const [isLargerThanLaptop] = useMediaQuery("(min-width:1025px)");

  const [isLargerThanTablet, isLargerThanLaptop] = useMediaQuery([
    "(min-width:769px)",
    "(min-width:1025px)",
  ]);

  const getViewportComponent = () => {
    if (isLargerThanLaptop) return <Laptop />;
    if (!isLargerThanLaptop && isLargerThanTablet) return <Tablet />;
    return <Mobile />;
  };

  return (
    <Box>
      <Heading textAlign="center">{houseName} Home</Heading>
      <Flex mt={5} justify="center">
        <Box w="90%">{getViewportComponent()}</Box>
      </Flex>
    </Box>
  );
};

export default Home;