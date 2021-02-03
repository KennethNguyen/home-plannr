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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Notices = () => {
  const notices = [
    "Game night",
    "Food night",
    "Trip to San Jose",
    "Game night2",
    "Food night2",
    "Trip to San Jose2",
    "Game night3",
    "Food night3",
    "Trip to San Jose3",
  ];
  return (
    <VStack mb={5}>
      <Heading mt={4} textAlign="center">
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
          key={notice}
        >
          <Box p={2}>
            <Text fontSize="lg">{notice}</Text>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              mb={1}
              icon={<EditIcon />}
              aria-label="Edit notice"
              variant="ghost"
            />
            <IconButton
              mb={1}
              icon={<DeleteIcon />}
              aria-label="Delete notice"
              variant="ghost"
            />
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default Notices;
