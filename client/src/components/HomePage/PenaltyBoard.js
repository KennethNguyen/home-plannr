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

export default PenaltyBoard;
