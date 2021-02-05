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
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

const PenaltyBoard = () => {
  const penalties = [
    "Unwashed dishes",
    "Toaster oven left on with no food",
    "Left empty rice cooker unwashed",
  ];
  return (
    <VStack mb={5}>
      <Heading mt={4} textAlign="center">
        But Y Tho
      </Heading>
      {penalties.map((penalty) => (
        <Flex
          w="80%"
          boxShadow="base"
          p={1}
          rounded="md"
          border="1px"
          justify="center"
          align="center"
          key={penalty}
        >
          <Box p={2}>
            <Text fontSize="lg">{penalty}</Text>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              mb={1}
              icon={<EditIcon />}
              aria-label="Edit penalty"
              variant="ghost"
            />
            <IconButton
              mb={1}
              icon={<DeleteIcon />}
              aria-label="Delete penalty"
              variant="ghost"
            />
          </Box>
        </Flex>
      ))}
      <IconButton
        variant="ghost"
        aria-label="Add penalty"
        icon={<AddIcon w={5} h={5} />}
      />
    </VStack>
  );
};

export default PenaltyBoard;
