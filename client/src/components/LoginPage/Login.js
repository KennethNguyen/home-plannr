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

const Login = () => {
  const { colorMode } = useColorMode();

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prevState) => !prevState);

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
      <Heading textAlign="center">Login</Heading>
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
              placeholder="NarutoFan22"
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
          <Button width="100%" colorScheme="teal" variant="solid" type="submit">
            Login
          </Button>
          <Text>
            First time here?{" "}
            <Link as={RouterLink} to="/signup" color="teal.400">
              Sign up!
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
