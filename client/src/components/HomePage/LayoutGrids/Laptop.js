import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Members from "../Members";
import Chores from "../Chores";
import Notices from "../Notices";
import PenaltyBoard from "../PenaltyBoard";

// layout for Laptop viewport

// TODO: clear all the comments up and decide on color palette for the grid cards
// bgGradient="linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)" <- grayish, not bad for both
// bgGradient="linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)" <- honeydew green, great for light, not for dark
// bgGradient="linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)" <- aqua sea, not bad for both
// bgGradient="linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)" <- bday cake/sherbert colors, great for light, not for dark
// bgGradient="linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%)" <- white/slate to light teal, super pretty on light, not for dark

// https://digitalsynopsis.com/design/beautiful-color-gradients-backgrounds/
// #4 winter neva *
// #8 plum plate *** but not for this project...maybe
// #14 great whale
// #16 clean mirror
// #21 desert hump
// #23 healthy water *

const Laptop = () => (
  <Grid
    h="40rem"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={6}
  >
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      rowSpan={2}
      colSpan={1}
      // bg="red.600"
      bgGradient="linear-gradient(315deg, #96deda 0%, #50c9c3 74%)"
    >
      <Members />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      rowSpan={2}
      colSpan={2}
      // bg="yellow.500"
      // bgGradient="linear-gradient(315deg, #a1c4fd 0%, #c2e9fb);" <- nice sea blue gradient
      bgGradient="linear-gradient(315deg, #96deda 0%, #50c9c3 74%)"
    >
      <Chores />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      // bg="orange.400"
      // bgGradient="linear-gradient(315deg, #96deda 0%, #50c9c3 74%)" <- nice teal gradient
      bgGradient="linear-gradient(315deg, #96deda 0%, #50c9c3 74%)"
    >
      <Notices />
    </GridItem>
    <GridItem
      className="homeContainer"
      boxShadow="lg"
      rounded="xl"
      colSpan={2}
      // bg="red.400"
      bgGradient="linear-gradient(315deg, #96deda 0%, #50c9c3 74%)"
    >
      <PenaltyBoard />
    </GridItem>
  </Grid>
);

export default Laptop;
