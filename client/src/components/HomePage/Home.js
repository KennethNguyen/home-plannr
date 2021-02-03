import React from "react";
import { useHistory } from "react-router-dom"
import { Box, Heading, Flex, VStack, Button, useMediaQuery } from "@chakra-ui/react";
import LogOutButton from "../LogOutButton";
import Laptop from "./LayoutGrids/Laptop";
import Mobile from "./LayoutGrids/Mobile";

const Home = () => {
  const history = useHistory()
  const loggedIn = JSON.parse(localStorage.getItem("userDetails"));
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

  const handleLogin = () => history.push("/login")

  const handleSignup = () => history.push("/signup")

  return (
    <Box>
      {loggedIn ?
      <>
      <LogOutButton />
      <Heading textAlign="center">{loggedIn.user.houseName} Home</Heading>
      <Flex mt={5} mb={5} justify="center">
        <Box w="90%">{getViewportComponent()}</Box>
      </Flex>
      </>
      :
      <VStack spacing={6}>
        <Heading mt="30vh" textAlign="center">Welcome to Home Plannr! Please login or sign up!</Heading>
        <Button width="25vw" colorScheme="teal" variant="solid" onClick={handleLogin}>
              Login
        </Button>
        <Button width="25vw" colorScheme="teal" variant="solid" onClick={handleSignup}>
              Sign Up
        </Button>
      </VStack>
      }
    </Box>
  );
};

export default Home;
