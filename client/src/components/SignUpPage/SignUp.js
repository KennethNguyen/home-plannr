import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  useColorMode,
  IconButton,
  VStack,
  Button,
  Box,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const SignUp = () => {
  const { colorMode } = useColorMode();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const togglePassword = () => setShowPassword((prevState) => !prevState);
  const toggleConfirmPass = () => setShowConfirmPass((prevState) => !prevState);

  return (
    <Box
      maxW="600px"
      borderWidth={2}
      borderRadius={12}
      mx="auto"
      pos="center"
      boxShadow="lg"
      p={6}
      rounded="md"
    >
      <Heading mb={2} textAlign="center">
        Create a New Account
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              id={
                colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
              }
              type="text"
              autoFocus
              placeholder="MrBeast58"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                id={
                  colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
                }
                type={showPassword === true ? "text" : "password"}
                placeholder="******"
              />
              <InputRightElement>
                <IconButton
                  icon={showPassword === true ? <ViewOffIcon /> : <ViewIcon />}
                  variant="ghost"
                  aria-label={
                    showPassword === true ? "Hide password" : "Show password"
                  }
                  onClick={togglePassword}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm password</FormLabel>
            <InputGroup>
              <Input
                id={
                  colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
                }
                type={showConfirmPass === true ? "text" : "password"}
                placeholder="******"
              />
              <InputRightElement>
                <IconButton
                  icon={
                    showConfirmPass === true ? <ViewOffIcon /> : <ViewIcon />
                  }
                  variant="ghost"
                  aria-label={
                    showConfirmPass === true
                      ? "Hide confirmed password"
                      : "Show confirmed password"
                  }
                  onClick={toggleConfirmPass}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button width="100%" colorScheme="teal" variant="solid" type="submit">
            Sign Up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="teal.400">
              Log in!
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
