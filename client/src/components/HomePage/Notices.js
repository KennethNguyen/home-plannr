import React from "react";
import {
  Box,
  Heading,
  VStack,
  Flex,
  Spacer,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Notices = () => {
  const notices = [
    "Game night",
    "Food night",
    "Trip to San Jose",
    "Game night",
    "Food night",
    "Trip to San Jose",
    "Game night",
    "Food night",
    "Trip to San Jose",
  ];
  return (
    <VStack mb={5}>
      <Heading mt={4} texAlign="center">
        Important Notices
      </Heading>
      {notices.map((notice) => (
        <Flex
          w="80%"
          boxShadow="base"
          p={1}
          rounded="md"
          border="1px"
          justify="center"
          align="center"
        >
          <Box p={2}>
            <Text fontSize="lg">{notice}</Text>
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

export default Notices;
