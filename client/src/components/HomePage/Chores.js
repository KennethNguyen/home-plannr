import React from "react";
import {
  Box,
  Heading,
  VStack,
  Flex,
  Text,
  Spacer,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Chores = () => {
  const members = [
    { name: "John D.", id: 1, isDone: false },
    { name: "Caroline", id: 2, isDone: false },
    { name: "Daanish", id: 3, isDone: false },
    { name: "Sam A.", id: 4, isDone: false },
    { name: "Kanye", id: 5, isDone: false },
    { name: "Sandra H.", id: 6, isDone: false },
  ];

  const setCheckedTask = (checkedValue, member) => ({
    ...member,
    isDone: checkedValue,
  });

  return (
    <Box>
      <Heading mt={4} textAlign="center">
        Chores
      </Heading>
      <Flex>
        <VStack w="50%">
          <Heading size="md" mt={1} textAlgin="center">
            Unassigned
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
                <Text fontSize="md">{member.name}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
        <VStack w="50%">
          <Heading size="md" mt={1} textAlgin="center">
            Kitchen
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
                <Text fontSize="md">{member.name}</Text>
              </Box>
              <Spacer />
              <Box>
                <IconButton
                  mb={2}
                  icon={<DeleteIcon />}
                  aria-label="Delete person"
                  variant="ghost"
                />
              </Box>
              <Box>
                <Checkbox
                  isChecked={member.isDone}
                  onChange={(e) => setCheckedTask(e.target.checked, member)}
                />
              </Box>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Chores;
