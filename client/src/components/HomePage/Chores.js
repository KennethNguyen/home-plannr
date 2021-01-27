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
    { name: "Caroline", id: 2, isDone: true },
    { name: "Daanish", id: 3, isDone: false },
    { name: "Sam A.", id: 4, isDone: true },
    { name: "Kanye", id: 5, isDone: false },
    { name: "Sandra H.", id: 6, isDone: true },
    { name: "John D.", id: 7, isDone: false },
    { name: "Caroline", id: 8, isDone: false },
    { name: "Daanish", id: 9, isDone: true },
    { name: "Sam A.", id: 10, isDone: false },
    { name: "Kanye", id: 11, isDone: true },
    { name: "Sandra H.", id: 12, isDone: false },
  ];

  const setCheckedTask = (checkedValue, member) => ({
    ...member,
    isDone: checkedValue,
  });

  return (
    <Box mb={5}>
      <Heading mt={4} textAlign="center">
        Chores
      </Heading>
      <Flex>
        <VStack w="50%">
          <Heading size="md" mt={1}>
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
              key={member.id}
            >
              <Box p={2}>
                <Text fontSize="md">{member.name}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
        <VStack spacing={5} w="50%">
          <Box align="center" justify="center" w="100%">
            <VStack>
              <Heading size="md" mt={1}>
                Kitchen
              </Heading>
              {members.splice(0, members.length / 2).map((member) => (
                <Flex
                  w="75%"
                  boxShadow="base"
                  p={1}
                  rounded="md"
                  border="1px"
                  justify="center"
                  align="center"
                  key={member.id}
                >
                  <Box>
                    <Checkbox
                      isChecked={member.isDone}
                      onChange={(e) => setCheckedTask(e.target.checked, member)}
                    />
                  </Box>
                  <Box p={2}>
                    <Text
                      style={{
                        textDecoration: member.isDone ? "line-through" : "",
                      }}
                      fontSize="md"
                    >
                      {member.name}
                    </Text>
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
                </Flex>
              ))}
            </VStack>
          </Box>
          <Box align="center" justify="center" w="100%">
            <VStack>
              <Heading size="md" mt={1}>
                Bathrooms
              </Heading>
              {members.splice(-(members.length / 2)).map((member) => (
                <Flex
                  w="75%"
                  boxShadow="base"
                  p={1}
                  rounded="md"
                  border="1px"
                  justify="center"
                  align="center"
                  key={member.id}
                >
                  <Box>
                    <Checkbox
                      isChecked={member.isDone}
                      onChange={(e) => setCheckedTask(e.target.checked, member)}
                    />
                  </Box>
                  <Box p={2}>
                    <Text
                      style={{
                        textDecoration: member.isDone ? "line-through" : "",
                      }}
                      fontSize="md"
                    >
                      {member.name}
                    </Text>
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
                </Flex>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Chores;
