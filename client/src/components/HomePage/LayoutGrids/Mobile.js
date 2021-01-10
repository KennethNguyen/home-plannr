import React from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import Members from "../Members";
import Chores from "../Chores";

// layout for Mobile viewport
const Mobile = () => (
  <SimpleGrid h="40rem" columns={1} gap={6}>
    <GridItem boxShadow="lg" rounded="xl" colSpan={2} bg="orange.400" />
    <GridItem boxShadow="lg" rounded="xl" colSpan={2} bg="green.400" />
    <GridItem boxShadow="lg" rounded="xl" rowSpan={2} colSpan={1} bg="red.600">
      <Members />
    </GridItem>
    <GridItem
      boxShadow="lg"
      rounded="xl"
      rowSpan={2}
      colSpan={2}
      bg="yellow.500"
    >
      <Chores />
    </GridItem>
  </SimpleGrid>
);

export default Mobile;
