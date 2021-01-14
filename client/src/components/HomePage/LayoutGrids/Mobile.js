import React from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import Members from "../Members";
import Chores from "../Chores";
import Notices from "../Notices";
import PenaltyBoard from "../PenaltyBoard";

// layout for Mobile viewport
const Mobile = () => (
  <SimpleGrid h="100rem" columns={2} gap={6}>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      bg="orange.400"
    >
      <Notices />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      bg="green.400"
    >
      <PenaltyBoard />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      bg="red.600"
    >
      <Members />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      bg="yellow.500"
    >
      <Chores />
    </GridItem>
  </SimpleGrid>
);

export default Mobile;
