import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  useColorMode,
  IconButton,
  Circle,
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
  FormHelperText,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";

const initialState = {
  houseName: "",
  username: "",
  password: "",
  confirmPassword: "",
}

// TODO: Use history from react-router to push user to home-page after successful sign up, finish handleSubmit()
const SignUp = () => {
  const { colorMode } = useColorMode();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState(initialState)

  const togglePassword = () => setShowPassword((prevState) => !prevState);
  const toggleConfirmPass = () => setShowConfirmPass((prevState) => !prevState);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
      <Circle mr="auto" ml="auto" mb={3} size={14} bg="red.500">
        <LockIcon w={8} h={8} color="white" />
      </Circle>
      <Heading mb={4} textAlign="center">
        Create a New Account
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>House Name</FormLabel>
              <Input
                id={
                  colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
                }
                name="houseName"
                type="text"
                autoFocus
                placeholder="Banana Slugz"
                onChange={handleChange}
              />
              <FormHelperText>Like a nickname for your house. NOT your address.</FormHelperText>
            </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              id={
                colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
              }
              name="username"
              type="text"
              placeholder="MrBeast58"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                id={
                  colorMode === "light" ? "lightPlaceholder" : "darkPlaceholder"
                }
                name="password"
                type={showPassword === true ? "text" : "password"}
                placeholder="******"
                onChange={handleChange}
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
                name="confirmPassword"
                type={showConfirmPass === true ? "text" : "password"}
                placeholder="******"
                onChange={handleChange}
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
