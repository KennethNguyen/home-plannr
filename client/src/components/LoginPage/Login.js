import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  // useColorMode,
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";
import { UserContext } from "../../context/UserContext";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  // const { colorMode } = useColorMode(); // colorMode === "light" ? do this when lightmode : do this when darkmode

  const { loginUser } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const togglePassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = (e) => {
    // eslint-disable-next-line
    // dynamic property name since e.target is an object
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

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
      <Heading textAlign="center">Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              autoFocus
              placeholder="NarutoFan22"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
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
