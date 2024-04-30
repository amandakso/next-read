import { useState } from "react";
import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { miscellaneous } from "../../utilities/constants";
import {
  generatePrompt,
  searchGoogleBook,
  selectBooks,
} from "../../utilities/helpers";

export default function MiscellaneousPage() {
  const [miscPrompt, setMiscPrompt] = useState<string>("");
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);

  async function handleMiscClick() {
    // get and display random misc prompt
    const prompt = generatePrompt(miscellaneous);
    setMiscPrompt(prompt.prompt);
    setIsPrompt(true);

    // select book suggestions to display
    const booksToDisplay = selectBooks(prompt.results);

    // get book data from selected books
    const bookResults = [];

    for (const item of booksToDisplay) {
      const result = await searchGoogleBook(item.id);
      if (result) {
        bookResults.push(result);
      }
    }
  }

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
        <Button onClick={handleMiscClick} colorScheme="teal">
          Generate Prompt
        </Button>
        {isPromptGenerated ? <Text>{miscPrompt}</Text> : null}
      </Flex>
    </Container>
  );
}
