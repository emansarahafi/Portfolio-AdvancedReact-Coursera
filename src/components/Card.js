import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={4}
      align="start"
      spacing={4}
    >
      <Image borderRadius="md" src={imageSrc} alt={title} />
      <VStack align="start" spacing={2}>
        <Heading size="md" color="black">{title}</Heading>
        <Text fontSize="sm" color="black">{description}</Text>
      </VStack>
      <HStack spacing={2} align="center">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Text fontSize="sm" color="blue.500">Learn More</Text>
      </a>
        <FontAwesomeIcon icon={faArrowRight} color="#4299E1" />
      </HStack>
    </VStack>
  );
};

export default Card;