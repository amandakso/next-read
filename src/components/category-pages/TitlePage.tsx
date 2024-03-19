import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";

export default function TitlePage() {
  function handleTitleClick() {
    console.log("click");
  }
  return (
    <>
      <Container>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading as="h3" size="lg">
            Title: TBR prompts based on the words in a book title
          </Heading>
          <Button
            onClick={handleTitleClick}
            colorScheme="teal"
            maxWidth={"150px"}
          >
            Generate Prompt
          </Button>
        </Flex>
      </Container>
    </>
  );
}
