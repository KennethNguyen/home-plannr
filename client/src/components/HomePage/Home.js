import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Flex, useMediaQuery } from "@chakra-ui/react";
import LogOutButton from "../LogOutButton";
import Laptop from "./LayoutGrids/Laptop";
import Mobile from "./LayoutGrids/Mobile";

const Home = () => {
  const loggedIn = JSON.parse(localStorage.getItem("userDetails"));
  const history = useHistory();

  if (!loggedIn) history.push("/");
  // viewport breakpoint for Mobile (sm) is 361px min-width
  // viewport breakpoint for Laptop (lg) is 1025px min-width

  // const [isLargerThanMobile] = useMediaQuery("(min-width:361px)");
  // const [isLargerThanLaptop] = useMediaQuery("(min-width:1025px)");

  const [isLargerThanLaptop] = useMediaQuery("(min-width:1025px)");

  const getViewportComponent = () => {
    if (isLargerThanLaptop) {
      return <Laptop />;
    }
    return <Mobile />;
  };

  return (
    <>
      {loggedIn && (
        <Box>
          <LogOutButton />
          <Heading textAlign="center">{loggedIn.user.houseName} Home</Heading>
          <Flex mt={5} mb={5} justify="center">
            <Box w="90%">{getViewportComponent()}</Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Home;
