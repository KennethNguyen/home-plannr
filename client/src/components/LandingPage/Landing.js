import React, { useEffect } from "react";
import { VStack, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const loggedIn = JSON.parse(localStorage.getItem("userDetails"));
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) history.push("/home");
  });

  const handleLogin = () => history.push("/login");

  const handleSignup = () => history.push("/signup");

  return (
    <>
      {!loggedIn && (
        <VStack spacing={6}>
          <Heading mt="30vh" textAlign="center">
            Welcome to Home Plannr! Please login or sign up!
          </Heading>
          <Button
            width="25vw"
            colorScheme="teal"
            variant="solid"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            width="25vw"
            colorScheme="teal"
            variant="solid"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </VStack>
      )}
    </>
  );
};

export default Landing;
