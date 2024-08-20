import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, Text } from "@chakra-ui/react";

const greeting = "Hello, my name is Eman!";
const bio1 = "A computer engineering graduate";
const bio2 = "currently pursuing a Master's degree in Software Engineering";
const bio3 = "and an aspiring web & mobile developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    >
    <Avatar src="https://i.pravatar.cc/150?img=1" />
    <Text>{greeting}</Text>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    <Heading>{bio3}</Heading>
  </FullScreenSection>
);

export default LandingSection;
