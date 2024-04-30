import { useState } from "react";
import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { miscellaneous, BookInterface } from "../../utilities/constants";

export default function MiscellaneousPage() {
  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as="h1" size="lg">
          Miscellaneous: uncategorized prompts
        </Heading>
        <Button colorScheme="teal">Generate Prompt</Button>
      </Flex>
      <Text>Section in Progress. Please Check Back in the Future.</Text>
    </Container>
  );
}
