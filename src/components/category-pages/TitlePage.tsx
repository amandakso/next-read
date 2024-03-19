import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { titles } from "../../utilities/constants";
import { getRandomIndexNumber } from "../../utilities/helpers";

export default function TitlePage() {
  function generateTitlePrompt() {
    const max = titles.length;
    const index = getRandomIndexNumber(max);
    return titles[index];
  }
  function handleTitleClick() {
    console.log("click");
    const prompt = generateTitlePrompt();
    console.log(prompt);
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
