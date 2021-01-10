import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Members from "../Members";
import Chores from "../Chores";

// layout for Laptop viewport
const Laptop = () => (
  <Grid
    h="40rem"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={6}
  >
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
    <GridItem boxShadow="lg" rounded="xl" colSpan={2} bg="orange.400" />
    <GridItem boxShadow="lg" rounded="xl" colSpan={2} bg="green.400" />
  </Grid>
);

export default Laptop;
