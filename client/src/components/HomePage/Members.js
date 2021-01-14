import React from "react";
import {
  VStack,
  Text,
  Heading,
  Flex,
  Box,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Members = () => {
  const members = [
    "John D.",
    "Caroline",
    "Daanish",
    "Sam A.",
    "Kanye",
    "Sandra H.",
  ];

  return (
    <VStack spacing={4} mb={5}>
      <Heading mt={4} textAlign="center">
        Members
      </Heading>
      {members.map((member) => (
        <Flex
          w="60%"
          boxShadow="base"
          p={1}
          rounded="md"
          border="1px"
          justify="center"
          align="center"
        >
          <Box p={2}>
            <Text fontSize="lg">{member}</Text>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              mb={1}
              icon={<DeleteIcon />}
              aria-label="Delete person"
              variant="ghost"
            />
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default Members;
